Ext.define('Test.view.main.RawReadsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'rawReadsGrid',
    id: 'rawReadsGrid',

    requires: [
        'Ext.grid.plugin.Exporter'
    ],

    bbar: [{
        xtype: 'button',
        text: 'Export',
        handler: function () {
            var meterId = MySharedData.meterId;
            var searchType = MySharedData.searchType;            
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
    
    title: 'RawReads',
    emptyText: "No data could be retrieved for meter " + MySharedData.meterId + ".",
    
    store: 'rawReadsStore', 
    scrollable: true, 

    columns: [
        { text: 'READ TIME', dataIndex: 'READ TIME', flex: 1 },
        { text: 'ENTRY_DATE', dataIndex: 'ENTRY_DATE', flex: 1 },
        { text: 'READ SRC', dataIndex: 'READ SRC', flex: 1 },
        { text: 'DIAL KWH', dataIndex: 'DIAL KWH', flex: 1 },
        { text: 'USAGE KWH', dataIndex: 'USAGE KWH', flex: 1 },
        { text: 'DAILY KW', dataIndex: 'DAILY KW', flex: 1 },
        { text: 'READ FLAG', dataIndex: 'READ FLAG', flex: 1 }
    ],
    
    viewConfig : {
        listeners : {
        // Attempting to get the columns to autosize.
         afterlayout : function (dataview) {
          Ext.each(dataview.panel.columns, function (column) {
            column.autoSize();
          })
         }
        }
       },
});