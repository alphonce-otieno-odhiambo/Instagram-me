import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instagram-me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Feed/>
    </div>
  )
}
