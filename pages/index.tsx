import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greetings from "../components/Greetings";
import SongPrev from "../components/SongList";
import { useEffect, useState } from "react";
import { APISong, getSongs } from "../utils/api";

export default function Home() {
  // add const "tracks" and set the status to an empty Array from type "APITracks"
  const [songs, setSongs] = useState<APISong[]>([]);

  // don`t know what this really do, but I like effects.
  useEffect(() => {
    getSongs().then((newTracks) => {
      setSongs(newTracks);
    });
  }, []);

  const songsItem = songs.map((song) => (
    <SongPrev
      key={`${song.artist}-${song.title}`}
      image={song.image}
      title={song.title}
      artist={song.artist}
    />
  ));

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
