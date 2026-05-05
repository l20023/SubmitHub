import { useCallback, useRef, useState } from 'react'
import type { Assignment } from '../../types'
import { ModalOverlay } from './ModalOverlay'

function CloudUploadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3A1.5 1.5 0 001.5 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  )
}

type UploadModalProps = {
  assignment: Assignment
  onClose: () => void
}

export function UploadModal({ assignment, onClose }: UploadModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [stagedNames, setStagedNames] = useState<string[]>([])

  const addFiles = useCallback((files: FileList | File[]) => {
    const list = Array.from(files).map((f) => f.name)
    if (list.length) setStagedNames((prev) => [...prev, ...list])
  }, [])

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  const onSubmit = () => {
    // Frontend-only: acknowledge selection then close
    if (stagedNames.length === 0) {
      // Still allow closing after "submit" for demo — optional: require files
      onClose()
      return
    }
    onClose()
  }

  return (
    <ModalOverlay onClose={onClose}>
      <div className="flex flex-col p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-1 border-b border-slate-100 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Submit work
          </p>
          <h2 className="text-xl font-bold text-navy">{assignment.title}</h2>
          <p className="text-sm text-slate-600">{assignment.dueDate}</p>
        </div>

        <div
          onDragEnter={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`flex min-h-[200px] flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-10 transition-colors ${
            isDragging
              ? 'border-brand-primary bg-violet-50/80'
              : 'border-slate-300 bg-slate-50/50'
          }`}
        >
          <CloudUploadIcon className="mb-4 h-14 w-14 text-slate-400" />
          <p className="text-center text-sm text-slate-600">
            Drag and drop files here, or{' '}
            <label
              htmlFor="submithub-upload-input"
              className="cursor-pointer font-semibold text-brand-primary hover:underline"
            >
              browse
            </label>
            .
          </p>
          <input
            ref={inputRef}
            id="submithub-upload-input"
            type="file"
            multiple
            className="sr-only"
            aria-label="Choose files to upload"
            onChange={(e) => {
              if (e.target.files?.length) addFiles(e.target.files)
              e.target.value = ''
            }}
          />
        </div>

        {stagedNames.length > 0 && (
          <ul className="mt-4 max-h-28 space-y-1 overflow-y-auto text-xs text-slate-600">
            {stagedNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover"
          >
            Submit
          </button>
        </div>
      </div>
    </ModalOverlay>
  )
}
