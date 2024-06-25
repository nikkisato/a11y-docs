import { defineArrayMember, defineType } from 'sanity'

export default defineType({
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
    {
      name: 'showHeroSection',
      title: 'Show Hero Section',
      type: 'boolean',
      initialValue: true,
    },
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'text',
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'blockContent',
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
    {
      title: 'Subheadline',
      name: 'subheadline',
      type: 'blockContent',
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      //   hidden: ({ parent }) => !parent.showHeroSection,
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
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
    {
      title: 'Background Color',
      name: 'backgroundColor',
      type: 'color',
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
    {
      title: 'Text color',
      name: 'textColor',
      type: 'color',
      //   hidden: ({ parent }) => !parent.showHeroSection,
    },
  ],
})
