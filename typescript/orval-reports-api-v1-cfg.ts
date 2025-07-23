import * as customCode from './custom-code.js'
import { defineConfig } from 'orval'

export default defineConfig({
   reports_api_v1: {
     
    input: {
        target: '../src/main/openapi/reports-api-v1.yaml',

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
        target: 'model/generated/reports-api-v1.ts',
        //schemas: 'model/generated/common-types-v2',
        //client: 'react-query',
        httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
          
        },

     },

    hooks: {
      afterAllFilesWrite: customCode.afterFilesGeneratedHookFs
    }
   },

});