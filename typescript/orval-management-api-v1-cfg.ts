import * as importMappingSupport from './import-mapping-support.js'
import { defineConfig } from 'orval'

// This is the map of import mappings - when external schema file is used.
// key: the name of the included schema file
// value: the generated ts file from that - from which we need to import the types from
var importMappings = {
  "common-types-v2.yaml": "./common-types-v2",
  "common-schedule-v1.yaml": "./common-schedule-v1",
  "common-metadata-v1.yaml": "./common-metadata-v1",
};

export default defineConfig({
   reports_api_v1: {
     
    input: {
        target: '../src/main/openapi/management-api-v1.yaml',

        parserOptions: {
          resolve: {
            file: importMappingSupport.createImportMappingAwareFileResolver(importMappings)
            
            //external: false
          }
        },

      //   filters: {
      //    mode: 'exclude',
      //    schemas: ['BaseResponseClass']
      //   }
     },

     output: {
        workspace: 'src/',
        // mode: single | split | tags | tags-split
        mode: 'single',
        target: 'model/generated/management-api-v1.ts',
        //schemas: 'model/generated/management-api-v1',
        //client: 'react-query',
        httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
         
        }

     },
     
    hooks: {
      afterAllFilesWrite: importMappingSupport.afterFilesGeneratedHookFs
    }
   },

});