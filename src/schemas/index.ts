import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import code from './code'

export const schemaTypes = [blockContent, code]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, code],
}
