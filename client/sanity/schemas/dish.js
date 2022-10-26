export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Dish",
      validation: (Rule) => Rule.required()
    },
    {
      name: "Short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the Dish",
      validation: (Rule) => Rule.required()
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],

}