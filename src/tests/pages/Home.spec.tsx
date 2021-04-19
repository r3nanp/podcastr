import { render } from '@testing-library/react'
import Home from '@pages/index'

test('Should display a hello world', () => {
  const home = render(<Home />)

  expect(home.getByText('Hello world!')).toBeInTheDocument()
})
