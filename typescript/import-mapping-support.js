import fs from "fs";
import path from "path";
import * as url from "@apidevtools/json-schema-ref-parser/dist/lib/util/url.js";
import * as yaml from 'yaml';

const util = require('util')


let _schemaNamesByImportMappingSchemaFiles = {};

let _findMatchingImportMapping = function(importMappings, file) {
   let matchingEntry = null;
   Object.entries(importMappings).forEach(function(entry) {
      let isMatch = file.url.indexOf(entry[0]) >= 0;
      //console.log(`mapping '${entry[0]}' is match for '${file.url}': ${isMatch}`);
      if (isMatch) {
         matchingEntry = entry;
         return;
      }
   });
   return matchingEntry;
}

/**
 * Creates a 'hook' function can be used in 'afterAllFilesWrite' hook.
 * 
 * This function iterates through all the generated files and adds 'import' statements to the top of the file
 * which is based on the given import mappings.
 * 
 * @param {Object} importMappings 
 * @returns 
 */
export let createImportMappingAwareFileResolver = function(importMappings) {
   let resolver = {
      order: 1,
      canRead: true,
      read: function(file, callback, $refs) {
         console.debug(`resolving schema file '${file.url}'...`);
         //console.log(`importMappings: ${util.inspect(importMappings, {showHidden: false, depth: 1, colors: true})}`);
         //console.log(`file: ${file.url}, refs: ${util.inspect($refs, {showHidden: false, depth: 1, colors: true})}`);

         // let's read up the file content
         file = _enrichWithFileContent(file);
         let fileContent = file.data;

         // we need to know which importMapping this file maps to - if any...
         let mappingEntry = _findMatchingImportMapping(importMappings, file);
         console.log(`matching mappingEntry: ${mappingEntry}`);
         if (mappingEntry !== null) {
            // ok we have a match!
            // let's remove the schemas from the content
            let result = _removeSchemasFromContent(file.data);
            fileContent = result.fileContent;
            // memorize the schemas of this mapping
            _schemaNamesByImportMappingSchemaFiles[mappingEntry[1]] = result.schemaNames;
            //console.log(`_schemaNamesByImportMappingSchemaFiles: ${util.inspect(_schemaNamesByImportMappingSchemaFiles, {showHidden: false, depth: 1, colors: true})}`);
         }

         // time to return the content
         return fileContent;
      }
   }
   return resolver;
}

/**
 * Reads the content of a file described by FileInfo
 * 
 * @param {apidevtools.swagger-parser.FileInfo} fileInfo the file info provided by Orval "input" flow
 * @returns the fileInfo enriched with .data field
 */
let _enrichWithFileContent = function(fileInfo) {
      console.debug(`reading content of file '${fileInfo.url}'`);
      if (fileInfo.data) {
         console.debug(`file content already there - no need to read`);
         return fileInfo;
      }
      try {
         let path = url.toFileSystemPath(fileInfo.url);
         if (path.endsWith("/") || path.endsWith("\\")) {
            path = path.slice(0, -1);
         }
         let fileContentBuffer = fs.readFileSync(path);
         fileInfo.data = fileContentBuffer.toString('utf-8');
         return fileInfo;
      } catch (err) {
         let msg = `Failed to read content of file '${fileInfo.url}', error was: ${err.message}`;
         console.error(msg);
         throw new Error(msg);
      }
  };

let _removeSchemasFromContent = function(fileContent) {

   try {
      let schemaNames = [];

      // let's parse the content as pure YAML
      const parsed = yaml.parse(fileContent);
      let components = parsed.components || {};
      if (components.schemas) {
         // memorize the schema entries (keys)
         schemaNames = Object.keys(components.schemas);
         // remove the schema entries
         delete components.schemas;
      }
      
      //console.log(`components: ${util.inspect(components, {showHidden: false, depth: 1, colors: true})}`);

      // if 'components' block became empty, remove that as well
      if (Object.keys(components).length === 0) {
         delete parsed.components;
      }

      // finally, transform back into string
      fileContent = yaml.stringify(parsed);

      return {
         fileContent: fileContent, 
         schemaNames: schemaNames
      };
      
   } catch (error) {
      let msg = `Failed to remove schemas from OpenApi content, error was: ${err.message}`;
      console.error(msg);
      throw new Error(msg);
   }

};


/**
 * This function can be used as a post-processor (in 'hook').
 * Iterates over the given file list and prepends all files content with "import" statements.
 * 
 * @param {Array} fileList 
 */
export let afterFilesGeneratedHookFs = function(fileList) {
   for (let i=0; i<fileList.length; i++) {
      let filePath = fileList[i];
      let fakeFile = {url: filePath};
      fakeFile = _enrichWithFileContent(fakeFile);

      let importLines = ["// imports coming from defined immportMapping"];
      Object.entries(_schemaNamesByImportMappingSchemaFiles).forEach(function(entry) {
         importLines.push(`import { ${entry[1].join(", ")} } from '${entry[0]}'`);
      });
      let fileContent = fakeFile.data;
      if (importLines.length > 1) {

         fileContent = importLines.join("\n") + "\n\n" + fakeFile.data;
      }
      

      // console.log(`file: ${filePath}, content: ${fileContent}`);

      // let's write back the file
      try {
         fs.writeFileSync(filePath, fileContent,{encoding:'utf8',flag:'w'});
      } catch(err) {
         console.log(`Failed to write file with amended imports: ${filePath}: ${err.message}`);
         return;
      }
   }
   
}
