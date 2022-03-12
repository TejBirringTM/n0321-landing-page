import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'


import { resolve } from 'path'
const fullPathToSrc = resolve(__dirname, './src');


const vueConfs = {
    template: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith("ion-")
        }
    }
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      Vue(vueConfs),
      WindiCSS()
    ],
    resolve: {
        alias: {
            '@': fullPathToSrc
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "sass:color";
                    @import '${fullPathToSrc}/assets/styles/_vars.scss';
                    @import '${fullPathToSrc}/assets/styles/_mixins.scss';
                `
            }
        }
    }
})
