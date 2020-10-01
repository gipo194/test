Ext.define('Test.view.main.MeterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'meterForm',

    title: 'Form',
    frame: true,
    // width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    defaults: {
        anchor: '100%',
        labelWidth: 120
    },
    
    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'user',
        emptyText: 'user id',
        msgTarget: 'under'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'pass',
        emptyText: 'password',
        inputType: 'password'
    }, {
        xtype: 'checkbox',
        fieldLabel: 'Remember me',
        name: 'remember'
    }],

    buttons: [
        { text: 'Register' },
        { text: 'Login' }
    ]
});