Ext.define("Test.model.PowerState", {
  // see http://sqewtmdlt01v02/MPARestService/Help/ResourceModel?modelName=PowerState 
  extend: "Test.model.Base",

  fields: [
    { name: "Location", type: "string" },
    { name: "IsEnergized", type: "boolean" },
    { name: "LastPowerFailure", type: "date" },
    { name: "NextPowerUpTime", type: "date" },
  ],
});
