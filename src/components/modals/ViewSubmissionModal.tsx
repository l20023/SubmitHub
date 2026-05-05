import type { Assignment } from '../../types'
import { ModalOverlay } from './ModalOverlay'

type ViewSubmissionModalProps = {
  assignment: Assignment
  onClose: () => void
}

export function ViewSubmissionModal({
  assignment,
  onClose,
}: ViewSubmissionModalProps) {
  const files = assignment.submittedFiles ?? []

  return (
    <ModalOverlay onClose={onClose}>
      <div className="flex flex-col p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-3 border-b border-slate-100 pb-6 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Submission
            </p>
            <h2 className="text-xl font-bold text-navy">{assignment.title}</h2>
            <p className="text-sm text-slate-600">{assignment.dueDate}</p>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
            <span className="inline-flex w-fit rounded-full bg-submitted-bg px-3 py-1 text-xs font-semibold text-submitted-text">
              Submitted
            </span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover"
            >
              Hide Submission
            </button>
          </div>
        </div>

        <h3 className="mb-3 text-sm font-semibold text-navy">Submitted Files</h3>
        <ul className="space-y-2">
          {files.map((file) => (
            <li
              key={file.name}
              className="flex items-center justify-between gap-4 rounded-lg bg-file-row px-4 py-3 text-sm"
            >
              <span className="min-w-0 truncate font-medium text-navy">
                {file.name}
              </span>
              <span className="shrink-0 text-slate-600">{file.size}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
          Files listed above reflect your last successful upload. If something
          looks wrong, contact your TA before the deadline.
        </p>
      </div>
    </ModalOverlay>
  )
}
