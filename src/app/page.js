import Image from 'next/image'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

const HankoAuth = dynamic(() => import('./_lib/HankoAuth'), { ssr: false })

export default function Home() {

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
          NEXT GEN
        </h1>
        <h2>
          SOLANA EXPLORER
        </h2>
      </div>
      <div className={styles.grid}>
        <HankoAuth />
      </div>
    </main>
  )
}
