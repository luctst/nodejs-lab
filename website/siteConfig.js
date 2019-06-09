/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const siteConfig = {
  title: 'NodeJs documentation',
  tagline: 'A little documentation to better understand NodeJs',
  url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	customDocsPath: "website/docs/",
	projectName: 'nodejs-lab',
	editUrl: "https://github.com/luctst/nodejs-lab/master/website/docs/",
	docsSideNavCollapsible: true,
  headerLinks: [
    {doc: 'getting-started', label: 'Docs'},
    {page: 'help', label: 'Help'},
  ],
  favicon: 'img/favicon.ico',
  colors: {
		primaryColor: '#026e00',
    secondaryColor: '#333',
  },
	copyright: `Copyright © ${new Date().getFullYear()} made with help of Docusaurus project.`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  enableUpdateBy: true,
	enableUpdateTime: true,
	scrollToTop: true,
  repoUrl: 'https://github.com/luctst/nodejs-lab',
};

module.exports = siteConfig;
