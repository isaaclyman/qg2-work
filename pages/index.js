import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>qg2.work</title>
        <meta name="description" content="Help your colleagues work more effectively with you. It's free and only takes a few minutes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={500} height={192} layout="intrinsic"></Image>
        </div>

        <p>
          <strong>qg2</strong> generates a one-page guide to help your colleagues work more effectively with you.
          It includes:
        </p>

        <ul>
          <li>Preferred name and pronouns</li>
          <li>Job title</li>
          <li>Areas of expertise</li>
          <li>Workplace accommodations</li>
          <li>How you like to communicate</li>
          <li>How you like to receive feedback</li>
          <li>Any other collaboration tips</li>
        </ul>

        <p>
          <strong>Every section is optional.</strong> If you prefer not to share something, you can leave it blank.
        </p>

        <p>
          It's free to use and there's no signup. At the end of the process, you'll make a PDF or printout.
        </p>

        <Link href="/create">
          <button>
            Get started
          </button>
        </Link>
      </main>
    </div>
  )
}
