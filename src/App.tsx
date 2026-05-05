import { useState } from 'react'
import { Layout } from './components/Layout'
import type { TabId } from './components/Header'
import { ActiveAssignments } from './components/views/ActiveAssignments'
import { PastSubmissions } from './components/views/PastSubmissions'
import { Grades } from './components/views/Grades'
import {
  activeAssignments,
  currentUser,
  gradeRows,
  pastSubmissions,
} from './data/mockData'

function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('active')

  return (
    <Layout
      user={currentUser}
      currentTab={currentTab}
      onTabChange={setCurrentTab}
    >
      {currentTab === 'active' && (
        <ActiveAssignments assignments={activeAssignments} />
      )}
      {currentTab === 'past' && (
        <PastSubmissions assignments={pastSubmissions} />
      )}
      {currentTab === 'grades' && <Grades grades={gradeRows} />}
    </Layout>
  )
}

export default App
