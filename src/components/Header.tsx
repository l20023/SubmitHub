import type { User } from '../types'

export type TabId = 'active' | 'past' | 'grades'

type HeaderProps = {
  user: User
  currentTab: TabId
  onTabChange: (tab: TabId) => void
}

const tabs: { id: TabId; label: string }[] = [
  { id: 'active', label: 'Active Assignments' },
  { id: 'past', label: 'Past Submissions' },
  { id: 'grades', label: 'Grades' },
]

export function Header({ user, currentTab, onTabChange }: HeaderProps) {
  return (
    <header className="submithub-header-bar relative z-10 border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex shrink-0 items-center gap-1.5">
          <div
            className="submithub-logo-mark flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            aria-hidden
          >
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-title-violet">
            SubmitHub
          </span>
        </div>

        <nav
          className="flex flex-1 flex-wrap items-center justify-center gap-1 md:gap-6"
          aria-label="Main"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`cursor-pointer px-2 py-1 text-sm font-medium transition-colors ${
                currentTab === tab.id
                  ? 'text-brand-primary hover:text-brand-primary-hover'
                  : 'text-slate-600 hover:text-brand-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full bg-lavender text-sm font-semibold text-title-violet"
            title={`${user.firstName} ${user.lastName}`}
            aria-label={`Signed in as ${user.firstName} ${user.lastName}`}
          >
            {user.initials}
          </div>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover active:brightness-95"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
