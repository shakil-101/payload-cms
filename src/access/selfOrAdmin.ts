import { Access } from "payload/config";

const selfOrAdmin: Access = ({ req: { user }, id }) => {
  // allow users with a role of 'admin'
  if (user.roles && user.roles.some((role) => role === "admin")) {
    return true;
  }
  // allow any other users to update only oneself
  return user.id === id;
};
export default selfOrAdmin;
