import { render, screen } from '@testing-library/react'
import Navbar from '@/components/navbar'

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('Navbar Component', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    
    const logo = screen.getByAltText(/dogwarts/i)
    expect(logo).toBeInTheDocument()
  })

  it('renders navigation menu items', () => {
    render(<Navbar />)
    
    const inicioLink = screen.getByText(/início/i)
    const servicosLink = screen.getByText(/serviços/i)
    const sobreLink = screen.getByText(/sobre/i)
    const testemunhosLink = screen.getByText(/testemunhos/i)
    const contactosLink = screen.getByText(/contactos/i)
    
    expect(inicioLink).toBeInTheDocument()
    expect(servicosLink).toBeInTheDocument()
    expect(sobreLink).toBeInTheDocument()
    expect(testemunhosLink).toBeInTheDocument()
    expect(contactosLink).toBeInTheDocument()
  })

  it('renders mobile menu button', () => {
    render(<Navbar />)
    
    const mobileMenuButton = screen.getByRole('button', { name: /abrir menu/i })
    expect(mobileMenuButton).toBeInTheDocument()
  })
})
