export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Short_description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.max(200)
    },
    {
      name: "image",
      type: "image",
      title: "Image of Category"

    }
  ],
}
