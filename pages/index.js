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
        <div className={styles.logo}>
          <Image src="/logo.png" width={500} height={192} layout="intrinsic"></Image>
        </div>

        <p>
          <strong>qg2</strong> generates a one-page guide to help your coworkers and colleagues work more effectively with you.
          It includes:
        </p>

        <ul>
          <li>Your preferred name and pronouns</li>
          <li>Your job title</li>
          <li>A few hobbies and interests</li>
          <li>Any conditions or disabilities you want to disclose</li>
          <li>Things people might misunderstand about you</li>
          <li>Your work environment needs</li>
          <li>How you like to communicate</li>
          <li>How you like to receive feedback</li>
          <li>What motivates you</li>
          <li>What you struggle with</li>
        </ul>

        <p>
          It's free to use and there's no signup. At the end of the process, you'll make a PDF or printout.
        </p>

        <button>
          Get started
        </button>
      </main>
    </div>
  )
}
