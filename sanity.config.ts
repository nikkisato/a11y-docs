/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

// import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'
import { codeInput } from '@sanity/code-input'
import { colorInput } from '@sanity/color-input'
// import { richDate } from '@sanity/rich-date-input'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { lighthousePlugin } from 'sanity-lighthouse-plugin'
import { draftReviewPluginV3 } from 'sanity-plugin-draft-review-v3'
import {
  defineUrlResolver,
  Iframe,
  IframeOptions,
} from 'sanity-plugin-iframe-pane'
import { previewUrl } from 'sanity-plugin-iframe-pane/preview-url'
import { media, mediaAssetSource } from 'sanity-plugin-media'

// see https://www.sanity.io/docs/api-versioning for how versioning works
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from '~/lib/sanity.api'
import { schema } from '~/schemas'

const iframeOptions = {
  url: defineUrlResolver({
    base: '/api/draft',
    requiresSlug: ['code'],
  }),
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export default defineConfig({
  basePath: '/studio',
  name: 'project-name',
  title: 'Project Name',
  projectId,
  dataset,
  //edit schemas in './src/schemas'
  schema,
  plugins: [
    codeInput(),
    deskTool({
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        return S.document().views([
          // Default form view
          S.view.form(),
          // Preview
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      },
    }),
    // Add the "Open preview" action
    previewUrl({
      base: '/api/draft',
      requiresSlug: ['code'],
      urlSecretId: previewSecretId,
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    lighthousePlugin(),
    colorInput(),

    draftReviewPluginV3({}),
    // inlineSvgInput(),
    // richDate(),
  ],
  // This is for the media plugin
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource,
        )
      },
    },
  },
})
