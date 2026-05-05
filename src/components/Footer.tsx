import { footerData } from '../data/mockData'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200/90 bg-bright-snow">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-title-violet">
            Teaching Assistant Emails
          </h3>
          <ul className="space-y-2 text-sm text-navy">
            {footerData.taEmails.map((email) => (
              <li key={email}>
                <a
                  href={`mailto:${email}`}
                  className="text-inherit transition-colors hover:text-slate-900"
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
                className="text-inherit transition-colors hover:text-slate-900"
              >
                {footerData.professor.email}
              </a>
            </p>
            <p className="text-inherit">
              Office hours: {footerData.professor.officeHours}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold text-title-violet">
            Course Discord/Forum
          </h3>
          <div className="space-y-3 text-sm text-navy">
            <p>
              <a
                href={footerData.discord.href}
                className="font-normal text-brand-primary underline underline-offset-2 transition-colors hover:text-brand-primary-hover"
              >
                {footerData.discord.label}
              </a>
            </p>
            <p>
              Forum:{' '}
              <a
                href={footerData.forum.href}
                className="text-inherit transition-colors hover:text-slate-900"
              >
                {footerData.forum.display}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
