import { defineConfig } from 'orval'

export default defineConfig({
   common_types_v2: {
     
    input: {
        target: '../src/main/openapi/common-types-v2.yaml',
     },

     output: {
        workspace: 'src/',
        // mode: single | split | tags | tags-split
        mode: 'single',
        target: 'model/generated/common-types-v2.ts',
        //schemas: 'model/generated/common-types-v2',
        //client: 'react-query',
        //httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
          useTypeOverInterfaces: false,
        }

     }
   },

   common_metadata_v1: {
     
    input: {
        target: '../src/main/openapi/common-metadata-v1.yaml',
     },

     output: {
        workspace: 'src/',
        // mode: single | split | tags | tags-split
        mode: 'single',
        target: 'model/generated/common-metadata-v1.ts',
        //schemas: 'model/generated/common-metadata-v1',
        //client: 'react-query',
        //httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
          useTypeOverInterfaces: false,
        }


     },
    //  hooks: {
    //    afterAllFilesWrite: 'prettier --write',
    //  },
   },

   common_schedule_v1: {
     
    input: {
        target: '../src/main/openapi/common-schedule-v1.yaml',
     },

     output: {
        workspace: 'src/',
        // mode: single | split | tags | tags-split
        mode: 'single',
        target: 'model/generated/common-schedule-v1.ts',
        //schemas: 'model/generated/common-schedule-v1',
        //client: 'react-query',
        //httpClient: 'axios',
        fileExtension: '.ts',
        namingConvention: 'PascalCase',
        indexFiles: false,

        override: {
          useTypeOverInterfaces: false,
        }

     }
   },

});