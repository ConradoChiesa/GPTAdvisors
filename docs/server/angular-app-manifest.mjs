
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/GPTAdvisors',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/GPTAdvisors/home",
    "route": "/GPTAdvisors"
  },
  {
    "renderMode": 2,
    "route": "/GPTAdvisors/home"
  },
  {
    "renderMode": 2,
    "route": "/GPTAdvisors/about"
  },
  {
    "renderMode": 2,
    "route": "/GPTAdvisors/contact"
  }
],
  assets: {
    'index.csr.html': {size: 5440, hash: 'b8edb9d9310526b790e7ed7bc9da1915cb0eebabb9fc7d746329f18177ec12c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1195, hash: 'ae23823414f9090fee0003356352aac9f772aec1cab61dc9259e2d68eb4b8027', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 17351, hash: '7e83ac60fb0c921feb63bf61b3a10d555ffa3b5671500d493aab4a867605d9b0', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19398, hash: '0735a6abbb600fc9f587da7ca0b1c242b803f2d46162c2d5d669c9ea3dca7245', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19728, hash: '82b64d9609e29b03ea5aa959da717ca57587f43a9ff0ac3bd843fb2329edff5d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-R37GORVW.css': {size: 226826, hash: 'd0uUHn5AnKw', text: () => import('./assets-chunks/styles-R37GORVW_css.mjs').then(m => m.default)}
  },
};
