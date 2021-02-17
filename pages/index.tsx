import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greetings from "../components/Greetings";
import SongPreList from "../components/SongList";

const songs = [
  {
    image:
      "http://www.popmonitor.de/wp-content/uploads/2020/10/Die-%C3%84rzte-Hell.jpg",
    title: "Ich, Am Strand",
    artist: "Die Ärzte",
  },
  {
    image:
      "http://www.popmonitor.de/wp-content/uploads/2020/10/Die-%C3%84rzte-Hell.jpg",
    title: "Woodburger",
    artist: "Die Ärzte",
  },
  {
    image:
      "https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/22524662/original/resize:300x225/crop:x11y12w442h332/hash:1464660523/1431279375_794321017313258_1731408266737095111_n.png",
    title: "Midas",
    artist: "I Fight with Mr Right",
  },
];

const songsItem = songs.map((song) => (
  <SongPreList
    key={`${song.artist}-${song.title}`}
    image={song.image}
    title={song.title}
    artist={song.artist}
  />
));

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Greetings name="Leon" />

      <ol className={styles.orderedList}>{songsItem}</ol>
    </div>
  );
}
