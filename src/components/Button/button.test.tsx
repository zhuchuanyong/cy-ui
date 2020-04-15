import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

const defaultProps = {
  onClick: jest.fn()
}

describe('test 组件button', () => {
  it('默认', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.queryByText('Nice')

    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn  btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})
