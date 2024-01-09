import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: () => true,
    update: () => true,
    read: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "filename",
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["application/pdf"],
  },
  fields: [],
};

export default Media;
