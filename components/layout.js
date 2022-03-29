import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>qg2.work</title>
        <meta
          name="description"
          content="Generate a one-page guide to help your colleagues work more effectively with you. It's free and only takes a few minutes."
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  )
}
