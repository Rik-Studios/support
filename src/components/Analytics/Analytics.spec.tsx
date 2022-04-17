import React from 'react'

import { screen, render } from '@testing-library/react'

import Analytics from './Analytics'

describe('<Analytics />', () => {
  it('render', async () => {
    render(<Analytics />)
    expect(screen.getByTestId('gtm-gtag')).toBeInTheDocument()
    expect(screen.getByTestId('gtm-datalayer')).toBeInTheDocument()
  })
})
