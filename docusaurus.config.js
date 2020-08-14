module.exports = {
  title: 'JObberCore  Site',
  tagline: 'All in one Tool to Schedue and Run your jobs',
  url: 'https://balajikummari.github.io', 
  baseUrl: '/docusaurusGenisis/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'balajikummari', // Usually your GitHub org/user name.
  projectName: 'docusaurusGenisis', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JObberCore',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/balajikummari/docusaurusGenisis',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/balajikummari/docusaurusGenisis',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JObberCore , Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/balajikummari/docusaurusGenisis/tree/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/balajikummari/docusaurusGenisis/tree/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
