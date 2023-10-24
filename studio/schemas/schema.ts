// Rich text annotations used in the block content editor
// import * as annotations from './annotations';
// Block content
// import * as blocks from './objects/block';
// Document types
// import * as documents from './documents';
// Object types
import * as objects from './objects';
// Field types
// import { timeField, dayOfWeek } from '@schemas/fields';
// Singleton document types
// import * as singletons from './singletons';

// Export all schema definitions
export const schema: { types: any } = {
  types: [
    // ...Object.values(annotations),
    // ...Object.values(blocks),
    // ...Object.values(documents),
    ...Object.values(objects),
    // ...Object.values(singletons),
    // Fields that don't need to be imported directly in schemas
    // timeField,
    // dayOfWeek,
  ],
};