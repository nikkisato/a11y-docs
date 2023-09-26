/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'

it('App Router: Works with Client Components (React State)', () => {
  render(<Button />)
  expect(screen.getByRole('heading')).toHaveTextContent('0')
  fireEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('heading')).toHaveTextContent('1')
})
