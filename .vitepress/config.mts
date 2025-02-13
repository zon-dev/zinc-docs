import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zinc",
  description: "Zinc is a high-performance HTTP web framework written in Zig.",
  themeConfig: {
    logo: '/zero.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/src/quickstart' },
    ],

    sidebar: [
      {text: 'Home', link: '/'},
      {text: 'Quickstart', link: '/src/quickstart'},

      {
        text: 'Examples',
        items: [
          { text: 'Basic routing', link: '/src/examples/basic-routing' },
          { text: 'CORS', link: '/src/examples/cors' },
          { text: 'Grouping routes', link: '/src/examples/grouping-routes' },
          { text: 'HTTP methods', link: '/src/examples/http-methods' },
          { text: 'JSON response', link: '/src/examples/json-response' },
          { text: 'Map as post form', link: '/src/examples/map-as-post-form' },
          { text: 'Map as query parameters', link: '/src/examples/map-as-query-parameters' },
          { text: 'Middleware', link: '/src/examples/middleware' },
          { text: 'Page not found', link: '/src/examples/page-not-found' },
          { text: 'Query and post form', link: '/src/examples/query-and-post-form' },
          { text: 'Query parameters', link: '/src/examples/query-parameters' },
          { text: 'Redirects', link: '/src/examples/redirects' },
          { text: 'Static files', link: '/src/examples/static-files' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zon-dev/zinc' }
    ]
  }
})
