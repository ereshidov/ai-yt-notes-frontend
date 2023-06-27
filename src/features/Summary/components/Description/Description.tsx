'use client'

import React from 'react'

import { Paper } from '@mui/material'

import styles from './Description.module.css'
import { ClipboardButton } from '~/features/ClipboardButton'
import { DownloadTextAsTxtButton } from '~/features/DownloadTextAsTxtButton'

interface Props {
  description: string
  captions: string
}

export const Description = ({ description, captions }: Props) => {
  return (
    <Paper className={styles.root}>
      <div className={styles.actions}>

      <DownloadTextAsTxtButton filename="video-captions" content={captions}>
        Download captions from video
      </DownloadTextAsTxtButton>
      <ClipboardButton
        content={description}
      />
      </div>
      <p>{description}</p>
    </Paper>
  )
}
