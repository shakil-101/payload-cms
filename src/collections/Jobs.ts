import { CollectionConfig } from "payload/types";

import { isAdmin } from "../access/isAdmin";
import { slateEditor } from "@payloadcms/richtext-slate";
// import selfOrAdmin from "../access/selfOrAdmin";

const Jobs: CollectionConfig = {
  slug: "jobs",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "designation",
      type: "text",
      required: true,
    },
    {
      name: "deadline",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyy",
        },
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
    },
    {
      name: "lookingFor",
      type: "text",
      required: true,
    },
    {
      name: "responsibility",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["ol", "ul"],
          leaves: [],
        },
      }),
    },
    {
      name: "qualification",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["ol", "ul"],
          leaves: [],
        },
      }),
    },

    {
      name: "salaryBenefit",
      type: "richText",
      editor: slateEditor({
        admin: {
          elements: ["ol", "ul"],
          leaves: [],
        },
      }),
    },
    {
      name: "aboutUs",
      type: "text",
      required: true,
    },
    {
      name: "workingHours",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "workingDays",
      type: "text",
      required: true,
    },

    {
      name: "category",
      type: "select",
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: false, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "Managerial",
          value: "Managerial",
        },
        {
          label: "Dev",
          value: "Dev",
        },
        {
          label: "Design",
          value: "Design",
        },
      ],
    },
    {
      name: "location",
      type: "select",
      hasMany: false,
      admin: {
        isClearable: true,
        isSortable: false, // use mouse to drag and drop different values, and sort them according to your choice
      },
      options: [
        {
          label: "Dhaka",
          value: "Dhaka",
        },
        {
          label: "San Jose",
          value: "San Jose",
        },
      ],
    },
  ],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
};

export default Jobs;
