Ext.define("Test.view.main.AcronymsPanel", {
  extend: "Ext.panel.Panel",
  xtype: "acronymsPanel",
  title: "Tree List",
  controller: "tree-list",

  iconCls: "x-fa fa-cogs",
  layout: "border",

  viewModel: {
    type: "tree-list",
  },

  header: {
    items: [
      {
        xtype: "button",
        text: "Options",
        cls: "dock-tab-btn",
        menu: [
          {
            text: "Expander Only",
            checked: true,
            handler: "onToggleConfig",
            config: "expanderOnly",
          },
          {
            text: "Single Expand",
            checked: false,
            handler: "onToggleConfig",
            config: "singleExpand",
          },
        ],
      },
      {
        xtype: "button",
        text: "Nav",
        enableToggle: true,
        reference: "navBtn",
        cls: "dock-tab-btn",
        toggleHandler: "onToggleNav",
      },
      {
        xtype: "button",
        text: "Micro",
        enableToggle: true,
        cls: "dock-tab-btn",
        toggleHandler: "onToggleMicro",
      },
    ],
  },

  items: [
    {
      region: "west",
     // width: 220,
      split: true,
      reference: "treelistContainer",
      layout: { type: "vbox", align: "stretch" },
      border: false,
      scrollable: "y",
      items: [
        { xtype: "treelist", reference: "treelist", bind: "{navItems}" },
        {
          region: "center",
          bodyPadding: 10,
        },
      ],
    },
    {
      region: "center",      
      reference: "treelistDisplay",
      items: [
        {
          region: "center",
          bodyPadding: 10,
          bind: { html: "{selectionText}" },
        },
      ],
    },
  ],
});
