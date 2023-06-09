
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);
import { useRouter } from "next/router"
import { useState } from "react"
import { Auth } from "aws-amplify"
import Link from 'next/link';
import { Container } from '@nextui-org/react';
import Layout from '@/components/layout';
// import { Button } from '@aws-amplify/ui-react';
import { Button } from '@nextui-org/react';
const Home = () => {
  const [query, getQuery] = useState();
  const router = useRouter();
  const handleOnChange = e => getQuery(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    router.push(`/posts/${query}`)
  }
  return (

      <Layout>
        <Container>
   
   

      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
          <main className={styles.main}>
                 <Button>Click me</Button>
            <Link href="npagetest">TOTEST</Link>
                <form onSubmit={handleOnSubmit}>
          <input type="text" onChange={handleOnChange} />
        </form>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
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
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
        </div>
        

        </Container>
        </Layout>

  )
}

export default Home