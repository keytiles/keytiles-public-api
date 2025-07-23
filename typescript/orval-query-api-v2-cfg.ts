import * as customCode from './custom-code.js'
import { defineConfig } from 'orval'

import * as utils from 'util'

export default defineConfig({
   reports_api_v1: {
     
    input: {
        target: '../src/main/openapi/query-api-v2.yaml',

        parserOptions: {
          resolve: {
            file: customCode.RemoveSchemasFromExternalSchemaFilesFileResolver
            
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
        target: 'model/generated/query-api-v2.ts',
        //schemas: 'model/generated/query-api-v2',
        //client: 'react-query',
        httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
         
        }

    },
    
    hooks: {
      afterAllFilesWrite: customCode.afterFilesGeneratedHookFs
    }


   },

});