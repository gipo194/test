Ext.define('Test.view.main.MeterHolder', {
    extend: 'Ext.panel.Panel',
    xtype: 'meterHolder',
    
    title: 'Neter Holder',

    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },

    bodyPadding: 10,

    defaults: {
        frame: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Panel 1',
            flex: 1,
            margin: '0 10 0 0',
            html: 'flex: 1'
        },
        {
            title: 'Panel 3',
            flex: 2,
            xtype: 'meterReadsGrid'
        }
    ]
});