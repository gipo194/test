Ext.define("Test.model.Meter", {
  // see: http://sqewtmdlt01v02/MPARestService/Help/ResourceModel?modelName=Meter 
  extend: "Test.model.Base",
  fields: [
    { name: "MeterId", type: "string" },
    { name: "MeterName", type: "string" },
    { name: "IsElectric", type: "boolean" },
    { name: "IsInstalled", type: "boolean" },
    { name: "IsEnergized", type: "boolean" },
    { name: "IsCVR", type: "boolean" },
    { name: "IsNCOM", type: "boolean" },
    { name: "IsAMI", type: "boolean" },
    { name: "IsAMR", type: "boolean" },
    { name: "Dials", type: "string" },
    { name: "Multiplier", type: "string" },
    { name: "StartDate", type: "string" },
    { name: "InstallDate", type: "date" },
    { name: "RateId", type: "string" },
    { name: "AddressLine", type: "string" },
    { name: "City", type: "string" },
    { name: "Location", type: "string" },
    { name: "ReturnVal", type: "string" },
    { name: "ErrorMessage", type: "string" },
    { name: "StatusCode", type: "int" },
    { name: "EffectiveDate", type: "date" },
    { name: "EndEffectiveDate", type: "date" },
  ],
});
