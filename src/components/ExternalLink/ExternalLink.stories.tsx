// src/components/Button.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import ExternalLInk from './ExternalLink'

const meta = {
  title: 'Components/ExternalLink',
  component: ExternalLInk,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExternalLInk>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Default',
    style: 'default',
  },
}

export const Primary: Story = {
  args: {
    style: 'primary',
    text: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    style: 'secondary',
    text: 'Secondary',
  },
}

export const Disabled: Story = {
  args: {
    style: 'disabled',
    text: 'Disabled',
  },
}
