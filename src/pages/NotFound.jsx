import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-nice py-20 text-center">
      <h1 className="h1">404</h1>
      <p className="muted mt-2">Oops, that page could not be found.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
    </section>
  )
}
