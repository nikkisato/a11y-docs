// page-tree-config.ts
import { PageTreeConfig } from '@q42/sanity-plugin-page-tree';

export const pageTreeConfig: PageTreeConfig = {
  /* Root page schema type name */
  rootSchemaType: 'homePage',
  /* Array of all page schema type names */
  pageSchemaTypes: ['homePage', 'contentPage', 'contentChildPage'],
  /* Optionally specify which document types can be the parent of a document type.
  If no allowed parents are specified for a type, all document types are allowed as a parent for that type.
  This config can also be used to prevent certain document types from having any children.*/
  allowedParents: {
    contentChildPage: ['contentPage'],
  },
  /* Api version to be used in all underlying Sanity client use */
  apiVersion: '2023-12-08',
  /* Optionally provide the field name of the title field of your page documents, to be used to generate a slug automatically for example. */
  titleFieldName: 'title',
  /* Used for showing the full url for a document and linking to it. */
  /* optional, otherwise the path is shown */
  baseUrl: 'https://example.com',
};