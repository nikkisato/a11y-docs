// src/components/Button.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    // onClick: () => alert('You clicked me!'),
    text: 'Default',
    style: 'default',
    type: 'button',
  },
}

export const Primary: Story = {
  args: {
    style: 'primary',
    // onClick: () => alert('You clicked me!'),
    text: 'Primary',
    type: 'button',
  },
}

export const Secondary: Story = {
  args: {
    style: 'secondary',
    text: 'Secondary',
    type: 'button',
  },
}

export const Disabled: Story = {
  args: {
    style: 'disabled',
    text: 'Disabled',
    type: 'button',
  },
}
