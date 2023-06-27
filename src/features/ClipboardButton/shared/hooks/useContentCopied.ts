'use client'

import { useEffect, useState } from 'react'

const RESET_TO_DEFAULT_AFTER_MS = 3000

const DEFAULT_CONTENT_COPIED = false

export const useContentCopied = () => {
  const [contentCopied, setContentCopied] = useState(DEFAULT_CONTENT_COPIED)
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setContentCopied(DEFAULT_CONTENT_COPIED)
    }, RESET_TO_DEFAULT_AFTER_MS)
    return () => {
      window.clearTimeout(timerId)
    }
  }, [contentCopied])

  return {
    contentCopied,
    setContentCopied
  }
}
