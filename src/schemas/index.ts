import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import code from './code'

export const schemaTypes = [post, blockContent, code]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, code],
}
