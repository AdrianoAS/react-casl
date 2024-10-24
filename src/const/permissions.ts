interface IPermission {
  [key: string]: any;
}
export const permissions: IPermission = {
  manager: [
    {
      action: "update",
      subject: "manager",
    },
    {
      action: "delete",
      subject: "manager",
    },
    {
      action: "create",
      subject: "manager",
    },
    {
      action: "read",
      subject: "manager",
    },
  ],
  financial: [
    {
      action: "update",
      subject: "financial",
    },
    {
      action: "read",
      subject: "financial",
    },
  ],
  member: [
    {
      action: "update",
      subject: "member",
    },
    {
      action: "read",
      subject: "member",
    },
    {
      action: "delete",
      subject: "member",
    },
  ],
};
