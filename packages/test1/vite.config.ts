import { mergeConfig } from 'vite';
import * as path from 'path';
import base from '../../vite.config';

export default mergeConfig(base, {
  root: __dirname, // path.resolve(__dirname, '../'),
  resolve: {
    alias: { '/test1/src/main.ts': './src/main.ts' },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
    outDir: path.resolve(__dirname, 'dist', 'frontend'),
    assetsDir: 'static',
  },
});
