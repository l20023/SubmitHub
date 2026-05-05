import type { Assignment } from '../../types'
import { AssignmentCard } from '../AssignmentCard'

type ActiveAssignmentsProps = {
  assignments: Assignment[]
  onUpload: (assignment: Assignment) => void
  onViewSubmission: (assignment: Assignment) => void
}

export function ActiveAssignments({
  assignments,
  onUpload,
  onViewSubmission,
}: ActiveAssignmentsProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-title-violet md:text-4xl">
        Active Assignments
      </h1>
      <ul className="space-y-5">
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <AssignmentCard
              assignment={assignment}
              action={
                assignment.status === 'pending' ? 'upload' : 'view'
              }
              onAction={() =>
                assignment.status === 'pending'
                  ? onUpload(assignment)
                  : onViewSubmission(assignment)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
