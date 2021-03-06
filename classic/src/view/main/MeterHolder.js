Ext.define('Test.view.main.MeterHolder', {
    extend: 'Ext.panel.Panel',
    xtype: 'meterHolder',
    
    title: 'Meter Holder',    
    cls: 'panels-container',
    width: '100%',
    layout: 'border',
    cls: Ext.baseCSSPrefix + 'shadow',
    requires: [
        'Ext.layout.container.Border'
    ],

    defaults: {
       // split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Search Parameters',
            region: 'west',
            //margin: '0 10 0 0',
            xtype: 'meterForm',
            collapsible: true,
            resizable: true,
            width: 320 // 320 in Aria theme
        },
        {
            title: null,            
            region: 'center',
            collapsible: false,
            xtype: 'readsTabs',      
        }
    ]
});