module.exports = {
  title: 'ISOBlue',
  tagline: 'Open-Source Agricultural Machinery Sensor Hub',
  organizationName: 'ISOBlue',
  projectName: 'isoblue.github.io',
  baseUrl: '/',
  url: 'https://isoblue.org',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'ISOBlue',
      logo: {
        alt: 'isoblue-logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog/',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/OATS-Group/isoblue-avena',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://groups.google.com/g/isoblue',
          label: 'Google Group',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs',
            },
            {
              label: 'Hardware',
              to: 'docs/hw/bom',
            },
            {
              label: 'Software',
              to: 'docs/sw/swbuild',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Google Group',
              href: 'https://groups.google.com/g/isoblue'
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/OATS-Group/isoblue-avena/issues'
            }

          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/OATS-Group/isoblue-avena'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Ag Systems and Technology Center, Purdue University. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'general/howitworks',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ISOBlue/isoblue.github.io/edit/master/v2-website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ISOBlue/isoblue.github.io/edit/master/v2-website/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
