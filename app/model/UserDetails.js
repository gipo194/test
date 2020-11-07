Ext.define("Test.model.UserDetails", {
  extend: "Test.model.Base",
  fields: [
    { name: "UserId", type: "string" },
    { name: "UserFirstName", type: "string" },
    { name: "UserLastName", type: "string" },
    { name: "UserEmail", type: "string" },
    { name: "SupervisorEmail", type: "string" },
    { name: "Status", type: "string" },
    { name: "UpdatedBy", type: "string" },
    { name: "InsertedBy", type: "string" },
    { name: "IAAP", type: "string" },
    { name: "ReturnVal", type: "string" },
    { name: "ErrorMessage", type: "string" },
  ],
});
