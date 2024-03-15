// src/components/Button.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

import IconButton from './IconButton'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Default',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'default',
  },
}

export const DefaultLeft: Story = {
  args: {
    text: 'Default',
    icon: <CatchingPokemonIcon />,
    iconLeft: true,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'default',
  },
}

export const DefaultRight: Story = {
  args: {
    text: 'Default',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: true,
    type: 'button',
    className: '',
    style: 'default',
  },
}

export const Primary: Story = {
  args: {
    text: 'primary',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'primary',
  },
}

export const PrimaryLeft: Story = {
  args: {
    text: 'primary',
    icon: <CatchingPokemonIcon />,
    iconLeft: true,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'primary',
  },
}

export const PrimaryRight: Story = {
  args: {
    text: 'primary',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: true,
    type: 'button',
    className: '',
    style: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    text: 'secondary',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'secondary',
  },
}

export const SecondaryLeft: Story = {
  args: {
    text: 'secondary',
    icon: <CatchingPokemonIcon />,
    iconLeft: true,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'secondary',
  },
}

export const SecondaryRight: Story = {
  args: {
    text: 'secondary',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: true,
    type: 'button',
    className: '',
    style: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    text: 'disabled',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'disabled',
  },
}

export const DisabledRight: Story = {
  args: {
    text: 'disabled',
    icon: <CatchingPokemonIcon />,
    iconLeft: false,
    iconRight: true,
    type: 'button',
    className: '',
    style: 'disabled',
  },
}

export const DisabledLeft: Story = {
  args: {
    text: 'disabled',
    icon: <CatchingPokemonIcon />,
    iconLeft: true,
    iconRight: false,
    type: 'button',
    className: '',
    style: 'disabled',
  },
}
