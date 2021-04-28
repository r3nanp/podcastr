import { render } from '@testing-library/react'
import 'jest-styled-components'

import { Header } from './index'

const screen = render(<Header />)

describe('Header', () => {
  it('should render the image inside the header component', () => {
    const img = screen.getByAltText(/podcastr/i).parentElement

    expect(img).toBeInTheDocument()
  })
})
