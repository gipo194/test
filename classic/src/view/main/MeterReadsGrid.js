Ext.define('Test.view.main.MeterReadsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'meterReadsGrid',
    id: 'meterReadsGrid',

    requires: [
        'Ext.grid.plugin.Exporter'
    ],

    bbar: [{
        xtype: 'button',
        text: 'export',
        handler: function () {
            var meterId = Ext.state.Manager.get("meterId");
            var searchType = Ext.state.Manager.get("searchType");
            
            var gridRef = Ext.ComponentQuery.query('grid')[0]
            gridRef.saveDocumentAs({
                type: 'xlsx',
                charset: 'Shift-JIS',
                title: searchType + ' ' + meterId,
                fileName: meterId + '.xlsx',                
            });
        }
    }],

    plugins: [{
        ptype: 'gridexporter'
    }],
    
    
    title: 'MeterReads',
    emptyText: "No data retrieved.",
    store: 'meterStore',

    columns: [
        { text: 'READ TIME', dataIndex: 'READ TIME', flex: 1 },
        { text: 'ENTRY_DATE', dataIndex: 'ENTRY_DATE', flex: 1 },
        { text: 'READ SRC', dataIndex: 'READ SRC', flex: 1 },
        { text: 'DIAL KWH', dataIndex: 'DIAL KWH', flex: 1 },
        { text: 'USAGE KWH', dataIndex: 'USAGE KWH', flex: 1 },
        { text: 'DAILY KW', dataIndex: 'DAILY KW', flex: 1 },
        { text: 'READ FLAG', dataIndex: 'READ FLAG', flex: 1 }
    ]
});