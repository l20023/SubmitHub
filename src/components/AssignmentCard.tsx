import { useCallback, useId, useRef, useState } from 'react'
import type { Assignment } from '../types'

type AssignmentCardProps = {
  assignment: Assignment
  action: 'upload' | 'view'
}

const BTN_BASE =
  'inline-flex h-11 w-[12.75rem] shrink-0 items-center justify-center rounded-lg px-4 text-sm font-semibold transition-colors'

const UPLOAD_BTN_CLASS = `${BTN_BASE} cursor-pointer bg-brand-primary text-white transition-colors hover:bg-brand-primary-hover active:brightness-95`

const VIEW_BTN_CLASS = `${BTN_BASE} cursor-pointer border border-slate-300 bg-white text-brand-primary transition-colors hover:border-slate-400 hover:bg-lavender active:brightness-[0.98]`

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

function StatusBadge({ status }: { status: Assignment['status'] }) {
  if (status === 'pending') {
    return (
      <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-pending-bg px-3 py-1.5 text-xs font-semibold leading-none text-pending-text">
        Pending
      </span>
    )
  }
  return (
    <span className="inline-flex shrink-0 items-center justify-center rounded-full bg-submitted-bg px-3 py-1.5 text-xs font-semibold leading-none text-submitted-text">
      Submitted
    </span>
  )
}

/** Hairline “border” via box-shadow (normal white background) */
const FILE_ROW_CLASS =
  'flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-3 text-sm shadow-[0_0_0_0.5px_rgba(15,23,42,0.07),0_1px_2px_rgba(15,23,42,0.04)]'

const EXPAND_GRID =
  'grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none'

export function AssignmentCard({ assignment, action }: AssignmentCardProps) {
  const [submissionOpen, setSubmissionOpen] = useState(false)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [uploadDragging, setUploadDragging] = useState(false)
  const [stagedNames, setStagedNames] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()
  const fileInputId = `submithub-upload-${inputId}`

  const isView = action === 'view'
  const isUpload = action === 'upload'
  const submissionExpanded = isView && submissionOpen
  const uploadExpanded = isUpload && uploadOpen
  const files = assignment.submittedFiles ?? []

  const addFiles = useCallback((fileList: FileList | File[]) => {
    const list = Array.from(fileList).map((f) => f.name)
    if (list.length) setStagedNames((prev) => [...prev, ...list])
  }, [])

  const closeUpload = useCallback(() => {
    setUploadOpen(false)
    setUploadDragging(false)
    setStagedNames([])
  }, [])

  const buttonLabel = (() => {
    if (isUpload) return uploadExpanded ? 'Cancel' : 'Upload Files'
    return submissionExpanded ? 'Hide Submission' : 'View Submission'
  })()

  const buttonClass = isUpload ? UPLOAD_BTN_CLASS : VIEW_BTN_CLASS

  function handleActionClick() {
    if (isUpload) {
      if (uploadExpanded) {
        closeUpload()
      } else {
        setUploadOpen(true)
      }
      return
    }
    setSubmissionOpen((v) => !v)
  }

  function handleUploadDrop(e: React.DragEvent) {
    e.preventDefault()
    setUploadDragging(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  function handleSubmitUpload() {
    closeUpload()
  }

  return (
    <article className="overflow-hidden rounded-2xl border-0 bg-white shadow-[0_0_0_0.5px_rgba(15,23,42,0.08),0_2px_6px_-1px_rgba(15,23,42,0.06),0_6px_20px_-4px_rgba(15,23,42,0.05)]">
      <div className="flex flex-col gap-6 p-6 md:flex-row md:items-stretch md:justify-between md:gap-8">
        <div className="min-w-0 flex-1 space-y-2">
          <h2 className="text-xl font-semibold leading-snug text-navy md:text-[1.4rem]">
            {assignment.title}
          </h2>
          <p className="text-sm font-medium text-slate-600">{assignment.dueDate}</p>
          <p className="text-sm leading-relaxed text-slate-600">
            {assignment.description}
          </p>
        </div>

        <div className="flex w-full shrink-0 flex-row items-stretch justify-end gap-0 md:w-auto md:shrink-0 md:gap-1">
          <div className="flex w-26 shrink-0 items-center justify-center sm:w-28">
            <StatusBadge status={assignment.status} />
          </div>
          <div className="flex shrink-0 items-center justify-center">
            <button
              type="button"
              onClick={handleActionClick}
              className={buttonClass}
            >
              {buttonLabel}
            </button>
          </div>
        </div>
      </div>

      {isUpload && (
        <div
          className={`${EXPAND_GRID} ${
            uploadExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className={`border-t-[0.5px] border-slate-200 px-6 pb-6 pt-5 transition-colors ${
                uploadDragging ? 'bg-violet-50/80' : 'bg-slate-50/50'
              }`}
              onDragEnter={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setUploadDragging(true)
              }}
              onDragOver={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setUploadDragging(true)
              }}
              onDragLeave={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setUploadDragging(false)
                }
              }}
              onDrop={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleUploadDrop(e)
              }}
            >
              <div
                onClick={() => inputRef.current?.click()}
                className={`flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-transparent px-6 py-10 transition-colors ${
                  uploadDragging
                    ? 'border-brand-primary'
                    : 'border-slate-300 hover:border-slate-400'
                }`}
              >
                <CloudUploadIcon className="mb-4 h-14 w-14 text-slate-400" />
                <p className="text-center text-sm text-slate-600">
                  Drag and drop files here, or{' '}
                  <label
                    htmlFor={fileInputId}
                    className="cursor-pointer font-semibold text-brand-primary transition-colors hover:text-brand-primary-hover hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    browse
                  </label>
                  .
                </p>
                <input
                  ref={inputRef}
                  id={fileInputId}
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
                  {stagedNames.map((name, i) => (
                    <li key={`${name}-${i}`}>{name}</li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmitUpload}
                  className="cursor-pointer rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-hover active:brightness-95"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isView && (
        <div
          className={`${EXPAND_GRID} ${
            submissionExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t-[0.5px] border-slate-200 px-6 pb-6 pt-5">
              <h3 className="mb-3 text-base font-semibold text-navy">
                Submitted Files
              </h3>
              <ul className="space-y-2">
                {files.map((file) => (
                  <li key={file.name} className={FILE_ROW_CLASS}>
                    <span className="min-w-0 truncate font-medium text-navy">
                      {file.name}
                    </span>
                    <span className="shrink-0 text-slate-600">{file.size}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-slate-500">
                Note: This is mockData. In a real app, files would be
                downloadable or viewable.
              </p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
