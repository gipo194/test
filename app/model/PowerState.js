Ext.define("Test.model.PowerState", {
  extend: "Test.model.Base",

  fields: [
    { name: "Location", type: "string" },
    { name: "IsEnergized", type: "boolean" },
    { name: "LastPowerFailure", type: "date" },
    { name: "NextPowerUpTime", type: "date" },
  ],
});
