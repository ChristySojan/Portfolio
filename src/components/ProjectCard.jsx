export default function ProjectCard({ title, stack = [], highlights = [], repo, period }) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300">{period}</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {stack.map(s => (
          <span key={s} className="rounded-full border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300">{s}</span>
        ))}
      </div>
      {highlights?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-300">
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
      {repo && (
        <a className="btn btn-primary mt-4" href={repo} target="_blank" rel="noreferrer">
          View Repository
        </a>
      )}
    </article>
  )
}
