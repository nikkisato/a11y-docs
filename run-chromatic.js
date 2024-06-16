require('dotenv').config()
const { execSync } = require('child_process')

const chromaticToken = process.env.CHROMATIC_PROJECT_TOKEN_STORYBOOK
if (!chromaticToken) {
  console.error(
    'Error: CHROMATIC_PROJECT_TOKEN_STORYBOOK is not defined in .env file',
  )
  process.exit(1)
}

execSync(`npx chromatic --project-token=${chromaticToken}`, {
  stdio: 'inherit',
})
