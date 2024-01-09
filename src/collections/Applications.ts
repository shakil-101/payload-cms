import { CollectionConfig } from "payload/types";

export const Applications: CollectionConfig = {
  slug: "applications",
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => false,
  },

  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "contactNumber",
      type: "text",
      required: true,
    },

    {
      name: "designation",
      type: "text",
      required: true,
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["application/pdf"],
  },
};
