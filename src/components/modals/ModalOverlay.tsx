import type { ReactNode } from 'react'
import { useEffect } from 'react'

type ModalOverlayProps = {
  children: ReactNode
  onClose: () => void
  /** When true, clicking the dark backdrop calls onClose */
  closeOnBackdrop?: boolean
}

export function ModalOverlay({
  children,
  onClose,
  closeOnBackdrop = true,
}: ModalOverlayProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="presentation"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="max-h-[min(90vh,900px)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
