Ext.define("Test.model.AdvanceStmtAcctHistory", {
  extend: "Test.model.Base",

  fields: [
    { name: "Firstname", type: "string" },
    { name: "Address", type: "string" },
    { name: "City", type: "string" },
    { name: "Status", type: "string" },
    { name: "StartDate", type: "date" },
    { name: "EndDate", type: "date" },
    { name: "Meternumber", type: "string" },
    { name: "EffectiveDate", type: "date" },
    { name: "EndEffectiveDate", type: "date" },
    { name: "Location", type: "string" },
    { name: "ReturnVal", type: "string" },
    { name: "ErrorMessage", type: "string" }
  ],
});
