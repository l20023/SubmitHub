import type { GradeRow } from '../../types'

type GradesProps = {
  grades: GradeRow[]
}

export function Grades({ grades }: GradesProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
        Grades
      </h1>
      <p className="-mt-4 text-slate-600">
        Summary of graded work. Final grades are posted by your instructor.
      </p>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50">
              <tr>
                <th className="px-5 py-3 font-semibold text-navy">
                  Assignment
                </th>
                <th className="px-5 py-3 font-semibold text-navy">Submitted</th>
                <th className="px-5 py-3 font-semibold text-navy">Score</th>
                <th className="px-5 py-3 font-semibold text-navy">Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-5 py-4 font-medium text-navy">
                    {row.assignmentTitle}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{row.submittedOn}</td>
                  <td className="px-5 py-4 text-slate-700">
                    {row.score} / {row.maxScore}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-submitted-bg px-2.5 py-1 text-xs font-semibold leading-none text-submitted-text">
                      {row.letterGrade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
