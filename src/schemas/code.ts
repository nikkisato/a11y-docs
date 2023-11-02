import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'codeBlock',
  type: 'document',
  title: 'Code',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      title: 'content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      type: 'code',
      name: 'css',
      title: 'CSS',
      options: {
        language: 'css',
      },
    }),
    defineField({
      type: 'code',
      name: 'html',
      title: 'HTML',
      options: {
        language: 'html',
      },
    }),
    defineField({
      type: 'code',
      name: 'javascript',
      title: 'Javascript',
      options: {
        language: 'javascript',
      },
    }),
    defineField({
      type: 'code',
      name: 'typescript',
      title: 'Typescript',
      options: {
        language: 'typescript',
      },
    }),
    defineField({
      type: 'code',
      name: 'liquid',
      title: 'Liquid',
      options: {
        language: 'plaintext',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
