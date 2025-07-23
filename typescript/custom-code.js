import fs from "fs";
import path from "path";
import * as url from "@apidevtools/json-schema-ref-parser/dist/lib/util/url.js";
import * as yaml from 'yaml';

const util = require('util')

let _schemaNamesBySchemaFiles = {};

export const customImportTransformer = function(content, operation, p3) {
  console.log(`transformer: p3: ${p3}, operation: ${operation}, content: ${util.inspect(content, {showHidden: false, depth: 1, colors: true})}`);
  // Add your custom imports at the top
  const customImports = `import { CustomType } from '@/types/CustomType';\n`;

  // Return modified content
  return {
    ...content,
    implementation: customImports + content.implementation,
  };
};

/**
 * 
 * @param {Array} fileList 
 */
export let afterFilesGeneratedHookFs = function(fileList) {
   for (let i=0; i<fileList.length; i++) {
      let filePath = fileList[i];
      let fileContent = readFileContent({url: filePath});

      let importLines = [];
      Object.entries(_schemaNamesBySchemaFiles).forEach(function(entry) {
         importLines.push(`import { ${entry[1].join(", ")} } from './${entry[0].replace('.yaml', '')}'`);
      });
      fileContent = importLines.join("\n") + "\n\n" + fileContent;

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

export let RemoveSchemasFromExternalSchemaFilesFileResolver = {
      order: 1,
      canRead: true,
      read: function(file, callback, $refs) {
         //console.log(`file: ${file.url}, refs: ${util.inspect($refs, {showHidden: false, depth: 1, colors: true})}`);
         let fileContent = readFileContent(file);
         if ($refs._root$Ref.path != file.url) {
            let result = removeSchemasFromContent(fileContent);
            fileContent = result.fileContent;
            let schemaFileName = path.basename(file.url);
            _schemaNamesBySchemaFiles[schemaFileName] = result.schemaNames;
         }

         console.log(`_schemaNamesBySchemaFiles: ${util.inspect(_schemaNamesBySchemaFiles, {showHidden: false, depth: 1, colors: true})}`);

         return fileContent;
      }
   }

export let readFileContent = function(file) {
      console.log(`readFileContent: ${file.url}`);

      let path;
      try {
         path = url.toFileSystemPath(file.url);
      } catch (err) {
         console.log(`Malformed URI: ${file.url}: ${err.message}`);
         return;
      }
      if (path.endsWith("/") || path.endsWith("\\")) {
         path = path.slice(0, -1);
      }
      let fileContent;
      try {
         let fileContentBuffer = fs.readFileSync(path);
         fileContent = fileContentBuffer.toString('utf-8');
      } catch (err) {
        console.log(`Error opening file ${path}: ${err.message}`);
      }

      return fileContent;
  };

export let removeSchemasFromContent = function(fileContent) {
      let schemaNames = [];

      try {
         const parsed = yaml.parse(fileContent);
         let components = parsed.components || {};
         if (components.schemas) {
            schemaNames = Object.keys(components.schemas);
            delete components.schemas;
         }
         
         //console.log(`components: ${util.inspect(components, {showHidden: false, depth: 1, colors: true})}`);
         if (Object.keys(components).length === 0) {
            delete parsed.components;
         }
         fileContent = yaml.stringify(parsed);
         
      } catch (error) {
         console.error('Failed to parse YAML:', error);
         fileContent = "";
      }

      return {
         fileContent: fileContent, 
         schemaNames: schemaNames
      };
  };
