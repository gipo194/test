Ext.define('MySharedData', {
    singleton: true,
    serverUrl: 'http://sqewtmdlt01v02/MpaRestService/',
    webDbServiceUrl: 'http://SQEWTMDLT01V02.puget.com:8080/WebDBService.svc',
    searchType: null,
    meterID: null,
    dtStartDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 100), // 100 days ago in milliseconds,
    dtEndDate: new Date(),
    dtEndEffectiveDate: new Date(4000, 11, 31, 0, 0, 0),
})