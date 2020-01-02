/* See https://docusaurus.io/docs/site-config.html for all the possible site configuration options. */

const siteConfig = {
  title: 'terry Portal (20200102 test setup)' ,
  tagline: 'Payment processing for partners.',
   url: 'https://terry.com' ,
  baseUrl: '/',
  projectName: 'terry project',
  organizationName: 'terry org',
  headerLinks: [
    {doc: 'group1_doc1', label: 'Documentation'},
 
  ],

/*  algolia: { apiKey: '9bf16cc78135dbeeb3826894ebbbb2ee', indexName: 'openpowerquality' },

  headerIcon: 'img/opqlogo_white.png',*/
  footerIcon: 'img/opqlogo_white.png',
  favicon: 'img/opq.ico',

  colors: {
   primaryColor: "#0587b3",
    
    secondaryColor: "#6fc1f0",
    tintColor: "#005068",
    backgroundColor: "#e9faff"
  },

  copyright: 'Copyright © ' + new Date().getFullYear() + 'VitalChek',

  highlight: { theme: 'default' },

  markdownPlugins: [function(md) {
  }],

  scripts: ['https://buttons.github.io/buttons.js', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML', '/js/mathjax-config.js'],

  stylesheets: ['https://fonts.googleapis.com/css?family=Gugi'],

  onPageNav: 'separate',
  blogSidebarCount: 'ALL',
};

module.exports = siteConfig;
