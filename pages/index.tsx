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
      "https://profile-images.xing.com/images/bee4e5ffea74d2f27c54d935d45d0638-5/leon-machens.256x256.jpg",
    title: "I Fight with Mr Right",
    artist: "Midas",
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
