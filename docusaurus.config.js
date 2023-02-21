// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const DEFAULT_EDIT_URL = 'https://github.com/JoinColony/docs/edit/main'

const getLibraryEditUrl = ({ versionDocsDirPath: path, docPath }) => {
  // Remove edit link from auto-generate docs
  if (docPath.startsWith('api') || docPath.startsWith('interfaces')) {
    return null;
  }

  const LIB_ROOT_EDIT_URL = 'https://github.com/JoinColony';
  if (path.includes('colonyNetwork')) {
    return `${LIB_ROOT_EDIT_URL}/colonyNetwork/edit/develop/docs/${docPath}`;
  } else if (path.includes('colonySDK')) {
    return `${LIB_ROOT_EDIT_URL}/colonySDK/edit/main/docs/${docPath}`;
  } else if (path.includes('colonyJS')) {
    return `${LIB_ROOT_EDIT_URL}/colonyJS/edit/main/docs/${docPath}`;
  }
  return null;
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
        id: 'docs',
        path: 'colony',
        routeBasePath: '/',
        sidebarPath: require.resolve('./colony/sidebars.ts'),
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
  onBrokenLinks: process.env.QA ? 'warn' : (process.env.FULL ? 'throw' : 'log'),
  onBrokenMarkdownLinks: process.env.QA ? 'warn' : (process.env.FULL ? 'throw' : 'log'),
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
        gtag: {
          trackingID: 'G-354563238',
          anonymizeIP: true
        },
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
            docsPluginId: 'docs',
            docId: 'learn/index',
            position: 'left',
            label: 'Learn',
          },
          {
            type: 'doc',
            docsPluginId: 'docs',
            docId: 'use/index',
            position: 'left',
            label: 'Use',
          },
          {
            type: 'doc',
            docsPluginId: 'docs',
            docId: 'develop/index',
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
