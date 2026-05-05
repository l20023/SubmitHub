export type AssignmentStatus = 'pending' | 'submitted'

export interface SubmissionFile {
  name: string
  size: string
}

export interface Assignment {
  id: string
  title: string
  dueDate: string
  description: string
  status: AssignmentStatus
  submittedFiles?: SubmissionFile[]
}

export interface GradeRow {
  id: string
  assignmentTitle: string
  score: number
  maxScore: number
  letterGrade: string
  submittedOn: string
}

export interface User {
  firstName: string
  lastName: string
  initials: string
}
