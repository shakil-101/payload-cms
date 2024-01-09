import { CollectionConfig } from "payload/types";

export const ContactMessages: CollectionConfig = {
  slug: "contact-messages",
  access: {
    create: () => true,
    update: () => false,
    read: () => true,
    delete: () => false,
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },

    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      required: true,
    },
  ],
};
