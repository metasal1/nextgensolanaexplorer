'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Work in Progress!
        </p>
        <div>
          <a
            href="https://milysec.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Milysec
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>
          NEXT GEN SOLANA EXPLORER
        </h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  )
}
