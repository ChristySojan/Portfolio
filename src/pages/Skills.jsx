import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'

function SkillPills({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-200">{s}</span>
      ))}
    </div>
  )
}

export default function Skills() {
  const { skills } = profile
  return (
    <section className="container-nice py-12">
      <SectionHeader title="Skills" subtitle="Languages, frameworks, and tools I use." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h3 className="h2">Languages</h3>
          <div className="mt-3"><SkillPills items={skills.languages} /></div>
        </div>
        <div className="card">
          <h3 className="h2">Backend</h3>
          <div className="mt-3"><SkillPills items={skills.backend} /></div>
        </div>
        <div className="card">
          <h3 className="h2">Frontend</h3>
          <div className="mt-3"><SkillPills items={skills.frontend} /></div>
        </div>
        <div className="card">
          <h3 className="h2">Tools</h3>
          <div className="mt-3"><SkillPills items={skills.tools} /></div>
        </div>
      </div>
    </section>
  )
}
