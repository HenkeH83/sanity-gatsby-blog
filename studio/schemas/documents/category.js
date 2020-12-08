export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'slug',
      options: {
        // add a button to generate slug from the title field
        source: 'title'
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
