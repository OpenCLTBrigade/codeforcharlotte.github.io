/* List of projects/orgs using your project for the users page */
const users = [
  // {
  //   caption: '',
  //   image: '',
  //   infoLink: '',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'CodeForCharlotte' /* title for your website */,
  tagline: 'Become an open source contributor in no time!!!',
  url: 'https://CodeForCharlotte.github.io/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'CodeForCharlotte.github.io',
  headerLinks: [
    {doc: 'getting_started', label: 'Docs'},
    {page: 'help', label: 'Help'},
    // {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  favicon: 'img/CFC-favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#3d9cd1',
    secondaryColor: '#3d9cd1',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' CodeForCharlotte',
  organizationName: 'CodeForCharlotte', // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/CodeForCharlotte/CodeForCharlotte.github.io',
};

module.exports = siteConfig;
