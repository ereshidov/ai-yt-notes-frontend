import React from 'react'

import styles from './ThumbnailImage.module.css'

interface Props {
  thumbnailSrc: Maybe<string>
}

export const ThumbnailImage = ({ thumbnailSrc }: Props) => {
  if (!thumbnailSrc) {
    return <div>?</div>
  }
  return (
    <img className={styles.root} alt="Youtube Thumbnail" src={thumbnailSrc} />
  )
}
