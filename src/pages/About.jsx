import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section className="container-nice py-12">
      {/* <SectionHeader title="About" subtitle="A quick snapshot of me and my journey." /> */}
      <div className="grid gap-6 md:grid-cols-2">

        <div className="card">
          <h3 className="h2">Contact</h3>
          <div className="mt-2 text-neutral-300 space-y-1">
            {/* <div><strong>Location:</strong> {profile.location}</div> */}
            <div><strong>Phone:</strong> {profile.phone.join(' / ')}</div>
            <div><strong>Email:</strong> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div className="flex gap-4 pt-2">
              <a className="btn border border-neutral-700 hover:bg-neutral-900" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn border border-neutral-700 hover:bg-neutral-900" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn border border-neutral-700 hover:bg-neutral-900" href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="h2">Location</h3>
          <div className="mt-2 text-neutral-300 space-y-1">
            <div><strong>Current Address:</strong> {profile.location.current}</div>
            <div><strong>Permanent Address:</strong> {profile.location.permanent}</div>
          </div>
        </div>

      </div>

      <div className="mt-8 card">
        <h3 className="h2">Education</h3>
        <ul className="mt-3 space-y-4">
          {profile.education.map((e, i) => (
            <li key={i} className="border-b border-neutral-800 pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{e.school}</p>
                  <p className="muted">{e.degree} • {e.location}</p>
                </div>
                <span className="text-sm rounded-full bg-neutral-800 px-3 py-1 text-neutral-300">{e.dates}</span>
              </div>
              <div className="mt-1 text-sm text-neutral-300">
                {e.cgpa && <>CGPA: {e.cgpa}</>}
                {e.percentage && <>Percentage: {e.percentage}</>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
