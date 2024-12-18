
export default {
  basePath: '/GPTAdvisors',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
