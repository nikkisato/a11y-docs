import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'text',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'text',
    },
    {
      title: 'Subheadline',
      name: 'subheadline',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
        {
          name: 'accessibility',
          type: 'string',
          title: 'Accessibility',
        },
      ],
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'color',
    },
    {
      title: 'Text color',
      name: 'textColor',
      type: 'color',
    },
  ],
})
