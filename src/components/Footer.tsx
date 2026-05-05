import { footerData } from '../data/mockData'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Teaching assistants
          </h3>
          <ul className="space-y-2 text-sm text-navy">
            {footerData.tas.map((ta) => (
              <li key={ta.email}>
                <span className="font-medium">{ta.name}</span>
                <br />
                <a
                  href={`mailto:${ta.email}`}
                  className="text-brand-primary hover:underline"
                >
                  {ta.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Professor
          </h3>
          <div className="space-y-2 text-sm text-navy">
            <p className="font-medium">{footerData.professor.name}</p>
            <p>
              <a
                href={`mailto:${footerData.professor.email}`}
                className="text-brand-primary hover:underline"
              >
                {footerData.professor.email}
              </a>
            </p>
            <p className="text-slate-600">{footerData.professor.office}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Course links
          </h3>
          <ul className="space-y-2 text-sm">
            {footerData.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-medium text-brand-primary hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        SubmitHub · Homework submission portal
      </div>
    </footer>
  )
}
