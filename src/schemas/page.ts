import { defineType } from 'sanity'

import heroSection from './heroSection'

export default defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    // {
    //   title: 'Hero Section',
    //   name: 'heroSection',
    //   type: 'heroSection',
    // },
    // {
    //   title: 'Content',
    //   name: 'content',
    //   type: 'array',
    //   of: [{ type: 'block' }],
    // },
    {
      title: 'Block Content',
      name: 'blockContent',
      type: 'blockContent',
    },
  ],
})
