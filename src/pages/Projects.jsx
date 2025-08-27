import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <section className="container-nice py-12">
      <SectionHeader title="Projects" /*subtitle="Selected work with code links."*/ />
      <div className="grid gap-6 md:grid-cols-2">
        {profile.projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
