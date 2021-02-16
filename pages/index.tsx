import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greetings from "../components/Greetings";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greetings name="Leon" />
    </div>
  );
}
