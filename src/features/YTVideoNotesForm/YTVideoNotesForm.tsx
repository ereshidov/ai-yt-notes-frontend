'use client'
import React, { useState, useTransition } from 'react'

import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { getYTVideoId } from '~/shared/helpers'

import styles from './YTVideoNotesForm.module.css'

export const YTVideoNotesForm = () => {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState(false)

  const router = useRouter()

  const getNotesFromYoutubeVideo = async (form: FormData) => {
    try {
      setError(false)
      const submittedUrl = form.get('url') as string
      const youtubeVideoId = getYTVideoId(submittedUrl)

      startTransition(() => {
        router.push(`/notes/${youtubeVideoId}`)
      })
    } catch (e) {
      setError(true)
    }
  }

  return (
    <div className={styles.root}>
      <form className={styles.form} action={getNotesFromYoutubeVideo}>
        <TextField
          error={error}
          helperText="Provide correct YouTube URL, example: https://www.youtube.com/watch?v=phWxA89Dy94"
          name="url"
          label="Youtube URL"
        />
        <Button disabled={isPending} variant="outlined" type="submit">
          {isPending ? 'Redirecting...' : 'Submit 🚀'}
        </Button>
      </form>
    </div>
  )
}
