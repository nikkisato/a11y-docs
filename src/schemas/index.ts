import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import code from './code'
import heroSection from './heroSection'
import page from './page'

export const schemaTypes = [blockContent, code, heroSection, page]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
