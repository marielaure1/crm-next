import { auth } from "@api/modules/auth";
import { createModule } from "@api/utils/create-module";

export const api = {
  auth,
  clients: createModule("clients", {}),
  prospects: createModule('prospects', {}),
  users: createModule('users', {}),
  employees: createModule('employees', {}),
  leads: createModule('leads', {}),
  contacts: createModule('contacts', {}),
  settings: createModule('settings', {}),
};

export default api;
