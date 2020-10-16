Ext.define('Test.view.main.ReadsTabs', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.layout.container.Card'
    ],
    xtype: 'readsTabs',

    cls: Ext.baseCSSPrefix + 'shadow',

    items: [
        {
            title: 'Regular Reads',
            xtype: 'meterReadsGrid',                                
        },
        {
            title: 'Skeleton Reads',
            html: 'Skeleton Reads content.',
            //hidden: true
        },
        {
            title: 'Raw Reads',
            html: 'Raw Reads content.',
            //hidden: true
        }
    ]
});