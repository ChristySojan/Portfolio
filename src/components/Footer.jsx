import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="container-nice py-6 text-sm text-neutral-400 flex flex-col md:flex-row md:items-center gap-2 md:gap-0 md:justify-between">
        <div>© {year} {profile.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-white">LeetCode</a>
        </div>
      </div>
    </footer>
  )
}
