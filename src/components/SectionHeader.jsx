export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="h1">{title}</h1>
      {subtitle && <p className="mt-2 muted">{subtitle}</p>}
    </div>
  )
}
