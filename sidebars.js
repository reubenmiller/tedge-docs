/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    // {type: 'doc', label: 'docs'},
    {type: 'doc', id: 'overview', label: 'Overview'},
    {type: 'doc', id: 'install/index', label: 'Install'},
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'start/index'},
      items:[
        {type: 'autogenerated', dirName: 'start'}
      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      items:[
        {type: 'autogenerated', dirName: 'understand'}
      ]
    },
    {
      type: 'category',
      label: 'Operate Devices',
      items:[
        {type: 'autogenerated', dirName: 'operate'}
      ]
    },
    {
      type: 'category',
      label: 'Extend thin-edge',
      items:[
        {type: 'autogenerated', dirName: 'extend'}
      ]
    },
    {
      type: 'category',
      label: 'Contribute to thin-edge',
      items:[
        {type: 'autogenerated', dirName: 'contribute'}
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: {type: 'doc', id: 'references/index'},
      items:[
        {type: 'autogenerated', dirName: 'references'}
      ]
    },
  ],
  // tutorialSidebar: [
  //   {type: 'autogenerated', dirName: 'extend'},
  // ],
    // Documentation: [
      // {
      //   type: 'category',
      //   label: 'Items2',
      //   // link: '',
      //   // collapsed: false,
      //   items:[
      //     {type: 'autogenerated', dirName: 'extend'},
      //     // {type: 'autogenerated', dirName: 'extend'},
      //     // {type: 'autogenerated', dirName: 'install'},
      //     // {type: 'autogenerated', dirName: 'operate'},
      //     // {type: 'autogenerated', dirName: 'references'},
      //     // {type: 'autogenerated', dirName: 'understand'},
      //   ],
      // },
    // ],
  // },
  caseStudiesSidebar: [
    {type: 'category', label: 'Case Studies', items:[
      {type: 'autogenerated', dirName: 'case-studies'},
    ]},
  ],
  // caseStudiesSidebar: {  
    // CaseStudies: [
      // {type: 'category', label: 'Items', collapsed: false, items:[
      //   {type: 'autogenerated', dirName: 'case-studies'},
      // ]},
      // {type: 'autogenerated', dirName: 'case-studies'},
    // ]
  // },

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
