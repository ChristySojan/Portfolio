import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'

export default function Achievements() {
  return (
    <section className="container-nice py-12">
      <SectionHeader title="Achievements" /*subtitle="Competitions and recognitions."*/ />
      <div className="space-y-4">
        {profile.achievements.map((a, i) => (
          <article key={i} className="card p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{a.name}</h3>
              <p className="mt-1 text-neutral-300">{a.detail}</p>
            </div>
            {a.proof && (<a href={a.proof} target="_blank" rel="noreferrer" className="btn btn-primary ml-4 shrink-0" > View Certificate </a>)}
          </article>
        ))}
      </div>
    </section >
  )
}
