import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quick Guide to Working With Me</title>
        <meta name="description" content="Help your coworkers and colleagues work more effectively with you. It's free and only takes a few minutes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Main
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}
