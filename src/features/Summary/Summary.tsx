import React from 'react'
import clsx from 'clsx'

import {
  Title,
  Description,
  ThumbnailImage,
  GetNotesFromNextVideoButton
} from './components'

import styles from './Summary.module.css'

interface Props {
  thumbnail: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

export const Summary = ({ description, thumbnail, title }: Props) => {
  return (
    <article className={styles.root}>
      <div className={styles.thumbnail}>{thumbnail}</div>
      <div className={styles.details}>
        <div className={clsx(styles.text, styles.title)}>{title}</div>
        <div className={clsx(styles.text, styles.description)}>
          {description}
        </div>
      </div>
    </article>
  )
}

Summary.Title = Title
Summary.Description = Description
Summary.ThumbnailImage = ThumbnailImage
Summary.GetNotesFromNextVideoButton = GetNotesFromNextVideoButton
