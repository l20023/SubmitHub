import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header, type TabId } from './Header'
import type { User } from '../types'

type LayoutProps = {
  user: User
  currentTab: TabId
  onTabChange: (tab: TabId) => void
  children: ReactNode
}

export function Layout({
  user,
  currentTab,
  onTabChange,
  children,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-navy">
      <Header user={user} currentTab={currentTab} onTabChange={onTabChange} />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}
