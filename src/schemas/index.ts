import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import code from './code'
import post from './post'

export const schemaTypes = [post, blockContent, code]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, code],
}
