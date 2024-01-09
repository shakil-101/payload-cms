import { Access } from "payload/config";

export const isAdmin: Access<any> = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes("admin"));
};
