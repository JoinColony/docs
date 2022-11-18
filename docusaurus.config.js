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

async function capitalizeSidebarItems({ defaultSidebarItemsGenerator, ...args }) {
  const items = await defaultSidebarItemsGenerator(args);
  items.forEach(mainItem => {
    if (mainItem.items) {
      mainItem.items = mainItem.items.map(item => {
        if (item.label) {
          item.label = item.label.replace(/^([a-z])/, m => m.toUpperCase());
        }
        return item;
      });
    }
  });
  return items;
};

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
        id: 'craft',
        path: 'colony/craft',
        routeBasePath: 'craft',
        sidebarPath: require.resolve('./colony/craft/sidebars.ts'),
        editUrl: DEFAULT_EDIT_URL,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'develop',
        path: 'colony/develop',
        routeBasePath: 'develop',
        sidebarPath: require.resolve('./colony/develop/sidebars.ts'),
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
        sidebarPath: require.resolve('./sidebars.ts'),
        sidebarItemsGenerator: capitalizeSidebarItems,
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
        sidebarItemsGenerator: capitalizeSidebarItems,
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
        sidebarItemsGenerator: capitalizeSidebarItems,
        editUrl: getLibraryEditUrl,
      },
    ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Colony Knowledge Realm',
  tagline: 'Explore the vast possibilities of the Colony Network',
  url: 'https://docs.colony.io',
  baseUrl: process.env.QA ? '/next/' : '/',
  onBrokenLinks: process.env.QA ? 'warn' : 'throw',
  onBrokenMarkdownLinks: process.env.QA ? 'warn' : 'throw',
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
        title: 'Colony Knowledge Realm',
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
            docsPluginId: 'craft',
            docId: 'index',
            position: 'left',
            label: 'Craft',
          },
          {
            type: 'doc',
            docsPluginId: 'develop',
            docId: 'index',
            position: 'left',
            label: 'Develop',
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
  plugins: process.env.FULL ? [...pluginsBase, ...pluginsFull] : pluginsBase,
};

module.exports = config;
