import React from 'react'
import TestComponent from 'components/TestComponent'
import renderer from 'react-test-renderer'

describe('components/TestComponent.js', () => {
  it('does a snapshot', () => {
    const tree = renderer.create(<TestComponent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
