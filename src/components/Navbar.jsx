import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  // { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/certificates', label: 'Certificates' },
  // { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur">
      <div className="container-nice flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="CS" className="h-8 w-8" />
          <span className="font-semibold">Christy Sojan</span>
        </Link>
        <nav className="hidden gap-2 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                'rounded-full px-3 py-1 text-sm transition ' +
                (isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:text-white')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
