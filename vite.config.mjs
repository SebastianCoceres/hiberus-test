import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import htmlPurge from 'vite-plugin-purgecss';


export default defineConfig({
    root: './',
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src', 'partials'),
        }),
        htmlPurge([htmlPurge()]),
    ],
})