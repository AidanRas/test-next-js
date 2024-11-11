import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from "../components/counter";
import GitHub from '../components/github';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className={styles.title}>
          Aidan Rasmussen Welcomes <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Counter name={'Pablo'} mult={1} size={2}/>
        <Counter name={'Pia'} mult={1} size={2}/>
        <hr
        style={{
          width: "80%",
          marginTop: '1em'
        }}/>
        <GitHub/ >
        <hr
        style={{
          width: "80%",
          marginTop: '1em'
        }}/>
        <p>Check out my <Link href='/store'>fake store</Link></p>
    </div>

  );
}
