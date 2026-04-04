import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [react(), libInjectCss(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'index',
            formats: ['es'],
        },
        rolldownOptions: {
            external: ['react', 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob
                    .sync('src/**/*.{ts,tsx}', {
                        ignore: ['src/**/*.d.ts'],
                    })
                    .map(file => [
                        // The name of the entry point
                        // src/nested/foo.ts becomes nested/foo
                        relative(
                            'src',
                            file.slice(0, file.length - extname(file).length)
                        ),
                        // The absolute path to the entry file
                        // src/nested/foo.ts becomes /project/src/nested/foo.ts
                        fileURLToPath(new URL(file, import.meta.url)),
                    ])
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            },
        },
    },
})
