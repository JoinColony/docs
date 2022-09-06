// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');

const typedocConfigColonyJS = require('./vendor/colonyJS/typedoc.json');
const typedocConfigColonySDK = require('./vendor/colonySDK/typedoc.json');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const getEditUrlPath = ({ docPath }) => {
  docPath = docPath
    .replace(/^colonynetwork/, 'colonyNetwork/edit/develop/docs')
    .replace(/^colonysdk/, 'colonySDK/edit/main/docs')
    .replace(/^colonyjs/, 'colonyJS/edit/main/docs');


  return `https://github.com/JoinColony/${docPath}`;
}

const resolveVendor = (libraryName, internalPath) => {
  return path.resolve(__dirname, 'vendor', libraryName, internalPath);
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Colony Developer Docs',
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: getEditUrlPath,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
        title: 'Colony Developer Docs',
        logo: {
          alt: 'Colony Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'colonysdk/index',
            position: 'left',
            label: 'Colony SDK',
          },
          {
            type: 'doc',
            docId: 'colonynetwork/index',
            position: 'left',
            label: 'Colony Network',
          },
          {
            type: 'doc',
            docId: 'colonyjs/index',
            position: 'left',
            label: 'ColonyJS',
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
    }),
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        ...typedocConfigColonyJS,
        id: 'colonyjs',
        entryPoints: typedocConfigColonyJS
          .entryPoints.map(p => resolveVendor('colonyJS', p)),
        tsconfig: resolveVendor('colonyJS', typedocConfigColonyJS.tsconfig),
        out: 'colonyjs/api',
        hideBreadcrumbs: true,
        hideInPageTOC: true,
        plugin: undefined,
      }
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        ...typedocConfigColonySDK,
        id: 'colonysdk',
        entryPoints: typedocConfigColonySDK
          .entryPoints.map(p => resolveVendor('colonySDK', p)),
        tsconfig: resolveVendor('colonySDK', typedocConfigColonySDK.tsconfig),
        out: 'colonysdk/api',
        hideBreadcrumbs: true,
        hideInPageTOC: true,
        plugin: undefined,
      }
    ]
  ]
};

module.exports = config;
