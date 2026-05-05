import type { Assignment, GradeRow, User } from '../types'

export const currentUser: User = {
  firstName: 'Zayn',
  lastName: 'Thompson',
  initials: 'ZT',
}

export const activeAssignments: Assignment[] = [
  {
    id: 'a1',
    title: 'NLP Fundamentals — Tokenization',
    dueDate: 'Due May 12, 2026 · 11:59 PM',
    description:
      'Implement a simple tokenizer and document your design choices in a short report (PDF).',
    status: 'pending',
  },
  {
    id: 'a2',
    title: 'Word Embeddings Lab',
    dueDate: 'Due May 19, 2026 · 11:59 PM',
    description:
      'Train or load embeddings and complete the notebook; submit code and a one-page summary.',
    status: 'pending',
  },
  {
    id: 'a3',
    title: 'Sequence Classification',
    dueDate: 'Due May 26, 2026 · 11:59 PM',
    description:
      'Build a classifier on the provided dataset; include metrics and error analysis.',
    status: 'pending',
  },
]

export const pastSubmissions: Assignment[] = [
  {
    id: 'p1',
    title: 'Course Syllabus Acknowledgment',
    dueDate: 'Submitted Jan 15, 2026',
    description: 'Signed PDF acknowledgment of course policies.',
    status: 'submitted',
    submittedFiles: [
      { name: 'acknowledgment_zt.pdf', size: '124 KB' },
    ],
  },
  {
    id: 'p2',
    title: 'Python & NumPy Refresher',
    dueDate: 'Submitted Feb 2, 2026',
    description: 'Starter exercises and environment check.',
    status: 'submitted',
    submittedFiles: [
      { name: 'refresher_notebook.ipynb', size: '89 KB' },
      { name: 'outputs.zip', size: '1.2 MB' },
    ],
  },
  {
    id: 'p3',
    title: 'Text Preprocessing Mini-Project',
    dueDate: 'Submitted Mar 10, 2026',
    description: 'Pipeline for cleaning and normalizing raw text.',
    status: 'submitted',
    submittedFiles: [
      { name: 'preprocess.py', size: '8 KB' },
      { name: 'README.md', size: '3 KB' },
      { name: 'sample_output.txt', size: '42 KB' },
    ],
  },
]

export const gradeRows: GradeRow[] = [
  {
    id: 'g1',
    assignmentTitle: 'Course Syllabus Acknowledgment',
    score: 10,
    maxScore: 10,
    letterGrade: 'A',
    submittedOn: 'Jan 15, 2026',
  },
  {
    id: 'g2',
    assignmentTitle: 'Python & NumPy Refresher',
    score: 48,
    maxScore: 50,
    letterGrade: 'A-',
    submittedOn: 'Feb 2, 2026',
  },
  {
    id: 'g3',
    assignmentTitle: 'Text Preprocessing Mini-Project',
    score: 92,
    maxScore: 100,
    letterGrade: 'A-',
    submittedOn: 'Mar 10, 2026',
  },
  {
    id: 'g4',
    assignmentTitle: 'Midterm — Written',
    score: 87,
    maxScore: 100,
    letterGrade: 'B+',
    submittedOn: 'Apr 5, 2026',
  },
]

export const footerData = {
  tas: [
    { name: 'Alex Rivera', email: 'arivera@university.edu' },
    { name: 'Jordan Lee', email: 'jlee.ta@university.edu' },
  ],
  professor: {
    name: 'Dr. Maria Chen',
    email: 'mchen@university.edu',
    office: 'CS Building 402 · Tue/Thu 2–4 PM',
  },
  links: [
    { label: 'Course syllabus', href: '#' },
    { label: 'Discussion forum', href: '#' },
    { label: 'Office hours calendar', href: '#' },
  ],
}
