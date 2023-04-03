// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const tailwindCss = require('tailwindcss');
const autoPrefixer = require('autoprefixer');

/* eslint-enable @typescript-eslint/no-var-requires */

const DEFAULT_EDIT_URL = 'https://github.com/JoinColony/docs/edit/main';

const getLibraryEditUrl = ({ versionDocsDirPath: path, docPath }) => {
  // Remove edit link from auto-generate docs
  if (docPath.startsWith('api') || docPath.startsWith('interfaces')) {
    return null;
  }

  const LIB_ROOT_EDIT_URL = 'https://github.com/JoinColony';
  if (path.includes('colonyNetwork')) {
    return `${LIB_ROOT_EDIT_URL}/colonyNetwork/edit/develop/docs/${docPath}`;
  }
  if (path.includes('colonySDK')) {
    return `${LIB_ROOT_EDIT_URL}/colonySDK/edit/main/docs/${docPath}`;
  }
  if (path.includes('colonyJS')) {
    return `${LIB_ROOT_EDIT_URL}/colonyJS/edit/main/docs/${docPath}`;
  }
  return null;
};

async function capitalizeSidebarItems({
  defaultSidebarItemsGenerator,
  ...args
}) {
  const items = await defaultSidebarItemsGenerator(args);
  items.forEach((mainItem) => {
    if (mainItem.items) {
      mainItem.items = mainItem.items.map((item) => {
        if (item.label) {
          item.label = item.label.replace(/^([a-z])/, (m) => m.toUpperCase());
        }
        return item;
      });
    }
  });
  return items;
}

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
  // https://github.com/facebook/docusaurus/issues/8297
  // This is quite brittle, I just hope they provide a better way to access the svgo options at some point
  function svgFix() {
    return {
      name: 'svg-fix',
      configureWebpack(config) {
        const svgRuleIndex = config.module.rules.findIndex((r) =>
          r.test.test('file.svg'),
        );
        const svgrConfigIndex = config.module.rules[
          svgRuleIndex
        ].oneOf.findIndex((r) => {
          if (!Array.isArray(r.use) || r.use.length === 0) return false;
          return r.use[0].loader.indexOf('@svgr/webpack') !== -1;
        });
        if (svgRuleIndex === -1 || svgrConfigIndex === -1) return;

        config.module.rules[svgRuleIndex].oneOf[
          svgrConfigIndex
        ].use[0].options.svgoConfig.plugins[0].params.overrides.cleanupIDs = false;
      },
    };
  },
  function tailwindcss() {
    return {
      name: 'docusaurus-tailwindcss',
      configurePostCss(config) {
        // Appends TailwindCSS and AutoPrefixer.
        config.plugins.push(tailwindCss);
        config.plugins.push(autoPrefixer);
        return config;
      },
    };
  },
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
  onBrokenLinks: process.env.QA ? 'warn' : process.env.FULL ? 'throw' : 'log',
  onBrokenMarkdownLinks: process.env.QA
    ? 'warn'
    : process.env.FULL
    ? 'throw'
    : 'log',
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
        },
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
        logo: {
          alt: 'Colony Logo',
          src: 'img/logo.svg',
        },
        style: 'dark',
        items: [
          {
            type: 'doc',
            docsPluginId: 'docs',
            docId: 'learn/index',
            position: 'right',
            label: 'Learn',
            className: 'navbarSectionLearn',
          },
          {
            type: 'doc',
            docsPluginId: 'docs',
            docId: 'use/index',
            position: 'right',
            label: 'Use',
            className: 'navbarSectionUse',
          },
          {
            type: 'doc',
            docsPluginId: 'docs',
            docId: 'develop/index',
            position: 'right',
            label: 'Develop',
            className: 'navbarSectionDevelop',
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Colony Logo',
          src: 'img/logo.svg',
        },
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
        copyright: `Copyright © ${new Date().getFullYear()} Colony. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
    }),
  plugins: process.env.FULL ? [...pluginsBase, ...pluginsFull] : pluginsBase,
  clientModules: [require.resolve('./src/piwik.js')],
};

module.exports = config;
