import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './studio/schemas/schema';
import { codeInput } from '@sanity/code-input';

export default defineConfig({
	name: 'default',
	title: 'a11y-docs-cms',
	projectId: 'ncg6rrlr',
	dataset: 'production',
	useCdn: true,
	plugins: [deskTool(), visionTool(), codeInput()],
	schema,
});
