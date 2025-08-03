import * as importMappingSupport from '@keytiles/orval-importmapping-support/dist/import-mapping-support.js'
import { defineConfig } from 'orval'

// This is the map of import mappings - when external schema file is used.
// key: the name of the included schema file
// value: the generated ts file from that - from which we need to import the types from
var importMappings = {
  "common-types-v3.yaml": "./common-types-v3",
};

export default defineConfig({
   hitcollection_api_v2: {
     
    input: {
        target: '../src/main/openapi/hit-collection-api-v2.yaml',

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
        target: 'model/generated/hitcollection-api-v2.ts',
        //schemas: 'model/generated/hitcollection-api-v2',
        //client: 'react-query',
        httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
         
        }

     },
     
    hooks: {
      afterAllFilesWrite: importMappingSupport.afterFilesGeneratedHookFn
    }
   },

});