import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/renderWithTheme'
import 'jest-styled-components'

import { Header } from './index'

describe('<Header />', () => {
  it('should render the logo', () => {
    const { container } = renderWithTheme(<Header />)

    const img = screen.getByAltText(/podcastr/i).parentElement

    expect(img).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should get the text', () => {
    renderWithTheme(<Header />)

    const title = screen.getByText(/o melhor para você ouvir, sempre\./i)

    expect(title).toBeInTheDocument()
  })

  it('should render button', () => {
    renderWithTheme(<Header />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
