// src/components/Button.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Header from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    isStatic: true,
    isSticky: false,
    isTransparent: false,
  },
}

// export const Static: Story = {
//   args: {
//     isStatic: true,
//     isSticky: false,
//     isTransparent: false,
//   },
// }

export const Sticky: Story = {
  args: {
    isStatic: false,
    isSticky: true,
    isTransparent: false,
  },
}

export const Transparent: Story = {
  args: {
    isStatic: false,
    isSticky: false,
    isTransparent: true,
  },
}
