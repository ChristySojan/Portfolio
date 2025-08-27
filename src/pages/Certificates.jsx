import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'

export default function Certificates() {
  return (
    <section className="container-nice py-12">
      <SectionHeader title="Certificates" /*subtitle="Courses and verifications."*/ />
      <ul className="space-y-3">
        {profile.certificates.map((c, i) => (
          <li key={i} className="card flex items-center justify-between gap-4">
            <span className="text-neutral-200">{c.name}</span>
            <a href={c.link} target="_blank" rel="noreferrer" className="btn btn-primary">View</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
