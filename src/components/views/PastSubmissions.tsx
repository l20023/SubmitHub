import type { Assignment } from '../../types'
import { AssignmentCard } from '../AssignmentCard'

type PastSubmissionsProps = {
  assignments: Assignment[]
}

export function PastSubmissions({ assignments }: PastSubmissionsProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
        Past Submissions
      </h1>
      <p className="-mt-4 text-slate-600">
        Review files you have already submitted for completed assignments.
      </p>
      <ul className="space-y-5">
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <AssignmentCard assignment={assignment} action="view" />
          </li>
        ))}
      </ul>
    </div>
  )
}
