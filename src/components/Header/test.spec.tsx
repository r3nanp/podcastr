import { screen } from '@testing-library/react'
import 'jest-styled-components'

describe('<Header />', () => {
  it('should render the image inside the header component', () => {
    const img = screen.getByRole('img', {
      name: /podcastr/i
    })

    expect(img).toBeInTheDocument()
  })

  it('should get the text inside the header component', () => {
    const title = screen.getByText(/o melhor para você ouvir, sempre\./i)

    expect(title).toBeInTheDocument()
  })
})
