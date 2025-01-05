import { Rule } from "sanity";

// export const post = {
//   name: "post",
//   title: "Post",
//   type: "document",

//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (Rule: Rule) => Rule.required().error("Required"),
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: { source: "title" },
//       validation: (Rule: Rule) => Rule.required().error("Required"),
//     },
//     {
//       name:'image',
//       type:'image',
//       title:'Image',
//       options:{
//           hotspot:true,
//       },
//       validation: (Rule :Rule) => Rule.required(), 
       
//   },
//     {
//       name: "publishedAt",
//       title: "Published at",
//       type: "datetime",
//       initialValue: () => new Date().toISOString(),
//     },
//     {
//       name: "excerpt",
//       title: "Excerpt",
//       type: "text",
//       validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
//     },
//     {
//       name: "body",
//       title: "Body",
//       type: "array",
//       of: [
//         { type: "block" },
//         {
//           type: "image",
//           fields: [{ type: "text", name: "alt", title: "Alt" }],
//         },
//       ],
//     },
//     {
//       name: "tags",
//       title: "Tags",
//       type: "array",
//       of: [{ type: "reference", to: [{ type: "tag" }] }],
//     },
//   ],
//   preview: {
//     select: {
//       title: "title",
//     },
//     prepare(selection: { title: string }) {
//       const { title } = selection;
//       return {
//         title,
//       };
//     },
//   },
// };
export const post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("Required"),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection: Record<string, any>) {
      const { title } = selection;
      return {
        title: title || "Untitled",
      };
    },
  },
};
