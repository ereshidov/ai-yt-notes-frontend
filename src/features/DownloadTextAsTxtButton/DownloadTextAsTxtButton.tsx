'use client'
import React, { PropsWithChildren } from 'react'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'

interface Props extends PropsWithChildren {
  filename: string
  content: string
}

export const DownloadTextAsTxtButton = ({
  filename,
  content,
  children
}: Props) => {
  const handleClick = () => {
    Object.assign(document.createElement('a'), {
      download: filename,
      href: URL.createObjectURL(new Blob([content], { type: 'text/plain' }))
    }).click()
  }

  return (
    <Button startIcon={<DownloadIcon />} onClick={handleClick}>
      {children}
    </Button>
  )
}
