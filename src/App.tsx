import { useState } from 'react'
import { Layout } from './components/Layout'
import type { TabId } from './components/Header'
import { ActiveAssignments } from './components/views/ActiveAssignments'
import { PastSubmissions } from './components/views/PastSubmissions'
import { Grades } from './components/views/Grades'
import { UploadModal } from './components/modals/UploadModal'
import { ViewSubmissionModal } from './components/modals/ViewSubmissionModal'
import {
  activeAssignments,
  currentUser,
  gradeRows,
  pastSubmissions,
} from './data/mockData'
import type { Assignment } from './types'

type ModalState =
  | { type: null }
  | { type: 'upload'; assignment: Assignment }
  | { type: 'view'; assignment: Assignment }

function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('active')
  const [modal, setModal] = useState<ModalState>({ type: null })

  return (
    <>
      <Layout
        user={currentUser}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      >
        {currentTab === 'active' && (
          <ActiveAssignments
            assignments={activeAssignments}
            onUpload={(assignment) =>
              setModal({ type: 'upload', assignment })
            }
            onViewSubmission={(assignment) =>
              setModal({ type: 'view', assignment })
            }
          />
        )}
        {currentTab === 'past' && (
          <PastSubmissions
            assignments={pastSubmissions}
            onViewSubmission={(assignment) =>
              setModal({ type: 'view', assignment })
            }
          />
        )}
        {currentTab === 'grades' && <Grades grades={gradeRows} />}
      </Layout>

      {modal.type === 'upload' && (
        <UploadModal
          assignment={modal.assignment}
          onClose={() => setModal({ type: null })}
        />
      )}
      {modal.type === 'view' && (
        <ViewSubmissionModal
          assignment={modal.assignment}
          onClose={() => setModal({ type: null })}
        />
      )}
    </>
  )
}

export default App
