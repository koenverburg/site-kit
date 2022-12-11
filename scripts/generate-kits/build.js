const { build } = require('esbuild')

build({
  entryPoints: ['./scripts/generate-kits/src/index.ts'],

  format: 'esm',
  target: 'es2022',
  platform: 'node',
  outfile: './bin/kits.mjs',

  bundle: true,
  minify: false,
  sourcemap: false,

  external: ['fs', 'path', 'playwright', 'playwright-extra', 'puppeteer-extra-plugin-stealth'],
}).catch(console.log)