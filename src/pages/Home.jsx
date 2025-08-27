import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import hero from '../assets/hero.jpg'

export default function Home() {
  return (
    <section className="container-nice py-14 flex items-center justify-center min-h-screen">
  <div className="text-center max-w-2xl">
    <h1 className="h1">Hi, I’m <span className="text-brand">{profile.name}</span></h1>
    <p className="mt-4 text-lg text-neutral-300">{profile.objective}</p>
    <div className="mt-6 flex gap-3 justify-center">
      <Link to="/projects" className="btn btn-primary">See Projects</Link>
      <Link to="/about" className="btn border border-neutral-700 hover:bg-neutral-900">Contact</Link>
    </div>
  </div>
</section>
  )
}
