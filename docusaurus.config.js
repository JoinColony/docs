// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DEFAULT_EDIT_URL = 'https://github.com/JoinColony/docs/edit/main'

const getLibraryEditUrl = ({ docPath }) => {
  docPath = docPath
    .replace(/^colonynetwork/, 'colonyNetwork/edit/develop/docs')
    .replace(/^colonysdk/, 'colonySDK/edit/main/docs')
    .replace(/^colonyjs/, 'colonyJS/edit/main/docs');


  return `https://github.com/JoinColony/${docPath}`;
}

const pluginsBase = [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'colony/learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./colony/learn/sidebars.ts'),
        editUrl: DEFAULT_EDIT_URL,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'explore',
        path: 'colony/explore',
        routeBasePath: 'explore',
        sidebarPath: require.resolve('./colony/explore/sidebars.ts'),
        editUrl: DEFAULT_EDIT_URL,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'build',
        path: 'colony/build',
        routeBasePath: 'build',
        sidebarPath: require.resolve('./colony/build/sidebars.ts'),
        editUrl: DEFAULT_EDIT_URL,
      },
    ],
];

const pluginsFull = [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'develop_colonysdk',
        path: 'vendor/colonySDK/docs',
        routeBasePath: 'colonysdk',
        // TODO: create proper sidebar
        // TODO: consider using https://github.com/milesj/docusaurus-plugin-typedoc-api/blob/master/packages/plugin/README.md
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl: getLibraryEditUrl,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'develop_colonynetwork',
        path: 'vendor/colonyNetwork/docs',
        routeBasePath: 'colonynetwork',
        // TODO: create proper sidebar
        // TODO: consider using https://github.com/milesj/docusaurus-plugin-typedoc-api/blob/master/packages/plugin/README.md
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl: getLibraryEditUrl,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'develop_colonyjs',
        path: 'vendor/colonyJS/docs',
        routeBasePath: 'colonyjs',
        // TODO: create proper sidebar
        // TODO: consider using https://github.com/milesj/docusaurus-plugin-typedoc-api/blob/master/packages/plugin/README.md
        sidebarPath: require.resolve('./sidebars.ts'),
        editUrl: getLibraryEditUrl,
      },
    ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Colony Knowledge Base',
  tagline: 'Explore the vast possibilities of the Colony Network',
  url: 'https://docs.colony.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JoinColony', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          path: 'src/pages',
        }
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'ZFUKNKZFFL',
        apiKey: '286f37a3de8d2dd5172c0cce745a87f4',
        indexName: 'colony_docs',
        contextualSearch: true,
      },
      navbar: {
        title: 'Colony Knowledge Base',
        logo: {
          alt: 'Colony Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docsPluginId: 'learn',
            docId: 'index',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docsPluginId: 'explore',
            docId: 'index',
            position: 'left',
            label: 'Explore',
          },
          {
            type: 'doc',
            docsPluginId: 'build',
            docId: 'index',
            position: 'left',
            label: 'Build',
          },
          {
            href: 'https://github.com/JoinColony',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/feVZWwysqM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/JoinColony',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/JoinColony',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} colony.io. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      }
    }),
  plugins: process.env.FULL ? pluginsBase.concat(pluginsFull) : pluginsBase,
};

module.exports = config;
