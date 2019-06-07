/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const siteConfig = {
  title: 'Test Site',
  tagline: 'A website for testing',
  url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	customDocsPath: "website/docs",
  projectName: 'nodejs-lab',
  headerLinks: [
    {doc: 'test', label: 'Docs'},
    {page: 'help', label: 'Help'},
  ],
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#1e2151',
    secondaryColor: '#151738',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  enableUpdateBy: true,
  enableUpdateTime: true,
  repoUrl: 'https://github.com/luctst/nodejs-lab',
};

module.exports = siteConfig;
