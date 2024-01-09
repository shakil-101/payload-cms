import { CollectionConfig } from "payload/types";
export const Clients: CollectionConfig = {
  slug: "clients",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "designation",
      type: "text",
      required: true,
    },
    {
      name: "feedback",
      type: "textarea",
      required: true,
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
};
