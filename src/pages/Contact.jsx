import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="container-nice py-12">
      <SectionHeader title="Contact" subtitle="Reach out for collaborations, internships, or opportunities." />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Your Name</label>
                <input className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand" required/>
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand" required/>
              </div>
              <div>
                <label className="block text-sm text-neutral-300 mb-1">Message</label>
                <textarea className="w-full min-h-[120px] rounded-xl border border-neutral-700 bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand" required/>
              </div>
              <button className="btn btn-primary" type="submit">Send</button>
              <p className="text-xs muted">This is a demo form; wire it to EmailJS or a backend later.</p>
            </form>
          ) : (
            <div className="text-green-400">Thanks! Your message would be sent (demo).</div>
          )}
        </div>
        <div className="card space-y-2">
          <div><strong>Email:</strong> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><strong>Phone:</strong> {profile.phone.join(' / ')}</div>
          <div className="flex gap-4 pt-2">
            <a className="btn border border-neutral-700 hover:bg-neutral-900" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn border border-neutral-700 hover:bg-neutral-900" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn border border-neutral-700 hover:bg-neutral-900" href={profile.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  )
}
