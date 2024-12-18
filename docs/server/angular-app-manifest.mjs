
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/GPTAdvisors/',
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
    'index.csr.html': {size: 5441, hash: 'f50f4a26f5a7075c4543e0ca97fd01c8776d94da913dddf1a46561cc6c7ab79b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1196, hash: 'fa61b44387ffebbff4cc636a831028117f8c57a864871b47774e33c88d3b6e6e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 17352, hash: '8be18ba490e33ee904a6572328f76477e54fc72143dea860785c6e1cd1965e04', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19399, hash: '72d4c017315af226a0a232f5fa202f3fe3282d7807ed31d6a23837146a2019db', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 19729, hash: 'fc7616e7892e1f25945d8f7eae6e5f3b7ee5fc9cd31bbbe988d33dc18ccd0e18', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-R37GORVW.css': {size: 226826, hash: 'd0uUHn5AnKw', text: () => import('./assets-chunks/styles-R37GORVW_css.mjs').then(m => m.default)}
  },
};
