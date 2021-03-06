Ext.define("Test.model.Nameplate", {
  // see http://sqewtmdlt01v02/MPARestService/Help/ResourceModel?modelName=MeterNamePlate
  extend: "Test.model.Base",
  fields: [
    { name: "meterID", type: "string" },
    { name: "routeID", type: "string" },
    { name: "billingCycle", type: "string" },
    { name: "readType", type: "string" },
    { name: "rate", type: "string" },
    { name: "AMiProvider", type: "string" },
    { name: "status", type: "string" },
    { name: "loadProfile", type: "string" },
    { name: "lPFrequency", type: "string" },
    { name: "manufacturer", type: "string" },
    { name: "model", type: "string" },
    { name: "dials", type: "string" },
    { name: "installDate", type: "date" },
    { name: "purchaseYear", type: "string" },
    { name: "multiplier", type: "string" },
    { name: "lastbilleddate", type: "date" },
    { name: "productId", type: "string" },
    { name: "productAttributeToken", type: "string" },
    { name: "serviceSupplier", type: "string" },
    { name: "class1", type: "string" },
    { name: "Phase", type: "string" },
    { name: "base1", type: "string" },
    { name: "testAmps", type: "string" },
    { name: "size", type: "string" },
    { name: "deliveryUnits", type: "string" },
    { name: "meterPressure", type: "string" },
    { name: "deliveryPressure", type: "string" },
    { name: "maxPressure", type: "string" },
    { name: "maxPressureUnits", type: "string" },
    { name: "ttempCharted", type: "string" },
    { name: "tempCompensatedIndicator", type: "string" },
    { name: "pressureCompensatedind", type: "string" },
    { name: "correctionFactor", type: "string" },
    { name: "casingCode", type: "string" },
    { name: "returnVal", type: "string" },
    { name: "errorMessage", type: "string" },
  ],
});
