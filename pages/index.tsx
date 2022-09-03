import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conaways game of life.</title>
        <meta name="description" content="Conaway's game of life." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}
          style={{maxWidth: '70%'}}
        >
          Welcome to a competitve <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conaways Game of Life</a>
        </h1>
        <p className={styles.description}>
          Get started by reading 
          <code className={styles.code}>
            <a href="/about" target={"_blank"}>
              the rules
            </a>
          </code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Rules &rarr;</h2>
            <p>Find in-depth information about Conaways Game of Life</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Game &rarr;</h2>
            <p>Play a competitive game, win a prize and join the leader board.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
          <h2>Research &rarr;</h2>
            <p>All games are stored in Arweave to provide a data set for researchers.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Code &rarr;</h2>
            <p>
              View the code repository on Github to implement this on your own.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Arweave
        </a>
      </footer>
    </div>
  )
}

export default Home
