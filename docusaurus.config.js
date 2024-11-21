import 'dotenv/config';
const PrismLight = require('./src/utils/prismLight');
const PrismDark = require('./src/utils/prismDark');

const config = {
  title: 'IFRAME API',
  tagline: '',
  url: 'https://maeret.github.io/',
  trailingSlash: false,
  baseUrl: '/',
  organizationName: 'Maeret',
  projectName: 'iframe-doc',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  clientModules: [require.resolve('./src/modules/RedirectModule.js')],
  plugins: [
    [
      'content-docs',
      {
        id: 'get-started',
        path: 'get-started',
        routeBasePath: '/',
        breadcrumbs: false,
        lastVersion: 'current',
        versions: {
          current: {
            label: '2.0',
            path: '/',
            badge: true,
          },
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        blog: {
          routeBasePath: '/changelog',
          blogSidebarTitle: 'Changelog',
          blogTitle: 'Changelog',
          showReadingTime: false,
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarCount: 'ALL',
          postsPerPage: 1,
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'en-payment',
            spec: './static/openapi/en-payment-openapi.yaml',
          },
          {
            id: 'en-wallet',
            spec: './static/openapi/en-wallet-openapi.yaml',
          },
        ],
        theme: {
          primaryColor: '#3578e5',
          options: {
            expandResponses: 'all',
            hideDownloadButton: true,
          },
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'IFRAME API',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
        href: '/',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Get Started',
        },
        {
          to: '/changelog',
          label: 'Changes History',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'get-started',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {},
    prism: {
      additionalLanguages: ['php', 'bash', 'json'],
      theme: PrismLight,
      darkTheme: PrismDark,
    },
  },
};

export default config;
