'use client'

import { Summary } from '~/features/Summary'
import { Skeleton } from '~/shared/ui'

import styles from './loading.module.css'

const Loading = () => {
  return (
    <h1 className={styles.root}>
      <Summary
        title={<Skeleton />}
        description={<Skeleton />}
        thumbnail={<Skeleton />}
      />
    </h1>
  )
}

export default Loading
