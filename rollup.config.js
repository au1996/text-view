import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

const banner = `/**
 * Vue 3 TextView ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`

export default [
  {
    input: 'src/index.ts',
    plugins: [
      vue({
        css: false,
      }),
      postcss(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'VueTextView',
        banner,
        globals: {
          vue: 'Vue',
        },
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        banner,
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  },
  {
    input: 'src/index.ts',
    plugins: [dts()],
    output: {
      format: 'esm',
      file: 'dist/index.d.ts',
    },
  },
]
