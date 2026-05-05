import type { Assignment } from '../types'

type AssignmentCardProps = {
  assignment: Assignment
  action: 'upload' | 'view'
  onAction: () => void
}

function StatusBadge({ status }: { status: Assignment['status'] }) {
  if (status === 'pending') {
    return (
      <span className="inline-flex rounded-full bg-pending-bg px-3 py-1 text-xs font-semibold text-pending-text">
        Pending
      </span>
    )
  }
  return (
    <span className="inline-flex rounded-full bg-submitted-bg px-3 py-1 text-xs font-semibold text-submitted-text">
      Submitted
    </span>
  )
}

export function AssignmentCard({
  assignment,
  action,
  onAction,
}: AssignmentCardProps) {
  const buttonLabel = action === 'upload' ? 'Upload Files' : 'View Submission'

  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-start md:justify-between">
      <div className="min-w-0 flex-1 space-y-2">
        <h2 className="text-lg font-semibold text-navy">{assignment.title}</h2>
        <p className="text-sm font-medium text-slate-500">{assignment.dueDate}</p>
        <p className="text-sm leading-relaxed text-slate-600">
          {assignment.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-stretch gap-3 md:items-end">
        <StatusBadge status={assignment.status} />
        <button
          type="button"
          onClick={onAction}
          className="rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover"
        >
          {buttonLabel}
        </button>
      </div>
    </article>
  )
}
