import type { Assignment } from '../types'

type AssignmentCardProps = {
  assignment: Assignment
  action: 'upload' | 'view'
  onAction: () => void
}

/** Fixed width fits “View Submission” and “Upload Files” without reflow */
const ACTION_BTN_CLASS =
  'inline-flex h-11 w-[12.75rem] shrink-0 items-center justify-center rounded-lg bg-brand-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover'

function StatusBadge({ status }: { status: Assignment['status'] }) {
  if (status === 'pending') {
    return (
      <span className="inline-flex shrink-0 rounded-full bg-pending-bg px-3 py-1.5 text-xs font-semibold text-pending-text">
        Pending
      </span>
    )
  }
  return (
    <span className="inline-flex shrink-0 rounded-full bg-submitted-bg px-3 py-1.5 text-xs font-semibold text-submitted-text">
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
    <article className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="min-w-0 flex-1 space-y-2">
        <h2 className="text-2xl font-bold leading-snug text-title-violet md:text-[1.65rem]">
          {assignment.title}
        </h2>
        <p className="text-sm font-medium text-slate-600">{assignment.dueDate}</p>
        <p className="text-sm leading-relaxed text-slate-600">
          {assignment.description}
        </p>
      </div>
      <div className="flex shrink-0 flex-row flex-wrap items-center gap-3 md:gap-4">
        <StatusBadge status={assignment.status} />
        <button type="button" onClick={onAction} className={ACTION_BTN_CLASS}>
          {buttonLabel}
        </button>
      </div>
    </article>
  )
}
