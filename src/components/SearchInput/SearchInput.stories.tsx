// src/components/Button.stories.tsx

import SearchIcon from '@mui/icons-material/Search'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import SearchInput from './SearchInput'

const meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    icon: <SearchIcon />,
  },
}
