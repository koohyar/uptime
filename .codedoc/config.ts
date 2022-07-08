import { configuration } from '@codedoc/core';
import { formulaPlugin } from '@codedoc/core/components';
import { codingBlog } from '@codedoc/coding-blog-plugin'
import { theme } from './theme';



export const config = /*#__PURE__*/configuration({
  theme,
  src: {
    base: 'posts'
  },
  dest: {
    namespace: '/uptime',
    html: 'dist',
    assets: process.env.GITHUB_BUILD === 'true' ? 'dist' : '.',
    bundle: process.env.GITHUB_BUILD === 'true' ? 'bundle' : 'dist/bundle',
    styles: process.env.GITHUB_BUILD === 'true' ? 'styles' : 'dist/styles',
  },
  page: {
    title: {
      base: 'Uptime'
    },
    favicon: '/favicon.ico'
  },
  plugins: [
    codingBlog({
      assets: [
        'img',
        'favicon.ico',
      ]
    }),
    formulaPlugin
  ],
  misc: {
    github: {
      repo: 'uptime',
      user: 'koohyar'
    }
  }
});
