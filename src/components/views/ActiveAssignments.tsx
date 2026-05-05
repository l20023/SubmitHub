import type { Assignment } from '../../types'
import { AssignmentCard } from '../AssignmentCard'

type ActiveAssignmentsProps = {
  assignments: Assignment[]
  onUpload: (assignment: Assignment) => void
}

export function ActiveAssignments({
  assignments,
  onUpload,
}: ActiveAssignmentsProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
        Active Assignments
      </h1>
      <ul className="space-y-5">
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <AssignmentCard
              assignment={assignment}
              action="upload"
              onAction={() => onUpload(assignment)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
