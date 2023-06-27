import { ClipboardButton, YTVideoNotesForm } from '~/features'

import styles from './page.module.css'

export default async function Home() {
  return (
    <main>
      <h1 className={styles.title}>
        Youtube notes from any video using AI! 🧑‍🔬
      </h1>
      <YTVideoNotesForm />
    </main>
  )
}
