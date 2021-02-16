import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greetings from "../components/Greetings";
import SongPreList from "../components/SongList";

const images =
  "http://www.popmonitor.de/wp-content/uploads/2020/10/Die-%C3%84rzte-Hell.jpg";
const title = ["Ich, Am Strand", "Woodburger"];
const artist = ["Die Ärzte", "Scooter"];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greetings name="Leon" />

      <ol className={styles.orderedList}>
        <SongPreList image={images} title={title[0]} artist={artist[0]} />
        <SongPreList image={images} title={title[1]} artist={artist[0]} />
      </ol>
    </div>
  );
}
