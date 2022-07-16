import Head from 'next/head'
import Header from "../components/Header"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
 
    <div>
      <Head>
        <title>Fb Clone</title>
        <meta name="Fb clone" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />  

      <h1>Lets build the clone</h1>
      {/* Header */}

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

   // <div className={styles.container}>
    //   <Head>
    //     <title>Fb Clone</title>
    //     <meta name="Fb clone" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1>Lets build Fb</h1>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>