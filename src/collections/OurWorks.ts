import { CollectionConfig } from "payload/types";

export const OurWorks: CollectionConfig = {
  slug: "our-works",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "shortDescription",
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
