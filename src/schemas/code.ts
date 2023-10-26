import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'codeBlock',
  type: 'document',
  title: 'Code Block',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      title: 'Content',
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
      name: 'richtext',
      title: 'Liquid',
      options: {
        language: 'plaintext',
      },
    }),
  ],
})
