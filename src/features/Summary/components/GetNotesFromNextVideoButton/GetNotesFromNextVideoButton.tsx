'use client'
import RefreshIcon from '@mui/icons-material/Refresh'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

import styles from './GetNotesFromNextVideoButton.module.css'

export const GetNotesFromNextVideoButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <Button
      className={styles.root}
      onClick={handleClick}
      startIcon={<RefreshIcon />}
    >
      Get notes from next video 🚀
    </Button>
  )
}
