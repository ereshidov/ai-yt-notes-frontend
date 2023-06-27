'use client'

import React, { useState } from 'react'

import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import CheckIcon from '@mui/icons-material/Check'
import { Alert, Button, Snackbar, Tooltip } from '@mui/material'
import { useContentCopied } from './shared'

interface Props {
  content: string
  className?: string
}

export const ClipboardButton = ({ content, className }: Props) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const { contentCopied, setContentCopied } = useContentCopied()

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setContentCopied(true)
    } catch (e) {
      setSnackbarOpen(true)
    }
  }

  return (
    <div className={className}>
      <Tooltip placement="top" open={contentCopied} title="Copied">
        <Button startIcon={contentCopied ? <CheckIcon color="success" /> : <ContentPasteIcon />} onClick={handleClick}>
          Copy to clipboard
        </Button>
      </Tooltip>
      <Snackbar open={snackbarOpen} autoHideDuration={5000}>
        <Alert severity="error" sx={{ width: '100%' }}>
          Something went wrong while copying
        </Alert>
      </Snackbar>
    </div>
  )
}
