import { footerData } from '../data/mockData'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-title-violet">
            Teaching Assistant Emails
          </h3>
          <ul className="space-y-2 text-sm">
            {footerData.taEmails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="text-slate-500 underline-offset-2 hover:underline"
                >
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-title-violet">
            Professor Contact
          </h3>
          <div className="space-y-2 text-sm text-navy">
            <p>
              <a
                href={`mailto:${footerData.professor.email}`}
                className="text-slate-500 underline-offset-2 hover:underline"
              >
                {footerData.professor.email}
              </a>
            </p>
            <p className="text-slate-600">
              Office hours: {footerData.professor.officeHours}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-title-violet">
            Course Discord/Forum
          </h3>
          <div className="space-y-3 text-sm">
            <p>
              <a
                href={footerData.discord.href}
                className="font-medium text-brand-primary underline-offset-2 hover:underline"
              >
                {footerData.discord.label}
              </a>
            </p>
            <p className="text-navy">
              Forum:{' '}
              <a
                href={footerData.forum.href}
                className="text-slate-500 underline-offset-2 hover:underline"
              >
                {footerData.forum.display}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        <span className="font-medium text-title-violet">SubmitHub</span>
        {' · '}
        Homework submission portal
      </div>
    </footer>
  )
}
