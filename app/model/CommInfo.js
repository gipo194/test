Ext.define("Test.model.Personnel", {
  extend: "Test.model.Base",

  fields: [
    { name: "MeterID", type: "string" },
    { name: "LocationID", type: "string" },
    { name: "ComID", type: "string" },
    { name: "ElectricID", type: "string" },
    { name: "PrimeMcc", type: "string" },
    { name: "Psr", type: "number" },
    { name: "ReturnVal", type: "string" },
    { name: "ErrorMessage", type: "string" },
  ],
});
