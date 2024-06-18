import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import code from './code'
import heroSection from './heroSection'

export const schemaTypes = [blockContent, code, heroSection]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
