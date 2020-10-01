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
            title: 'Form',
            flex: 1,
            margin: '0 10 0 0',
            xtype: 'meterForm'
        },
        {
            title: 'Response',
            flex: 2,
            xtype: 'meterReadsGrid'
        }
    ]
});