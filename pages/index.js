import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useReadOnlyStickyState } from '../helpers/useStickyState.hook'

export default function Home() {
  const createForm = useReadOnlyStickyState('createForm')

  return (
    <div className={styles.container}>
      <Head>
        <title>qg2.work</title>
        <meta
          name="description"
          content="Help your colleagues work more effectively with you. It's free and only takes a few minutes."
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            width={500}
            height={192}
            layout="intrinsic"
          ></Image>
        </div>

        {createForm && (
          <div className={styles.mainSub}>
            <p>
              It looks like you've been here before. Would you like to see the
              guide you've previously created?
            </p>
            <Link href="/view">
              <button>View your guide</button>
            </Link>
          </div>
        )}

        <p>
          <strong>qg2</strong> generates a one-page guide to help new colleagues
          work more effectively with you. It includes:
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
          <strong>Every section is optional.</strong> If you prefer not to share
          something, you can leave it blank. Please don't share anything that
          might result in negative consequences at work.
        </p>

        <p>
          This tool is free to use and there's no signup. At the end of the
          process, you'll print or download a PDF.
        </p>

        <p className={styles.small}>
          By clicking 'Get Started' I understand and agree that qg2 and its
          creator(s) are not responsible for the data I choose to enter and
          share using this tool. The data I enter will be stored primarily on my
          own computer. Anything submitted to another machine or server will be
          stored at a statistical level and will not be associated with my name,
          identity, or computer.
        </p>

        <Link href="/create">
          <button>Get Started</button>
        </Link>
      </main>
    </div>
  )
}
