import { render } from '@testing-library/react'
import { Header } from './index'

const screen = render(<Header />)

it('should render the text inside the header component', () => {
  expect(
    screen.getByText('O melhor para você ouvir, sempre')
  ).toBeInTheDocument()
})
