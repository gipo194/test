Ext.define("Test.model.UsagePointDetails", {
  extend: "Test.model.Base",

  fields: [
    { name: "CustomerName", type: "string" },
    { name: "City", type: "string" },
    { name: "State", type: "string" },
    { name: "Zip", type: "string" },
    { name: "AddressLine1", type: "string" },
    { name: "AddressLine2", type: "string" },
    { name: "ClientLocationID", type: "string" },
    { name: "ReturnVal", type: "string" },
    { name: "ErrorMessage", type: "string" },
  ],
});
