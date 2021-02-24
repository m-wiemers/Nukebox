import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greetings from "../components/Greetings";
import SongPrev from "../components/SongList";
import { useEffect, useState } from "react";
import { APISong, getSongs } from "../utils/api";
import Link from "next/link";

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
    <Link href={`/songs/${song.id}`} key={song.id}>
      <a>
        <SongPrev
          image={song.image}
          title={song.title}
          artist={song.artist}
          link={song.path}
        />
      </a>
    </Link>
  ));

  const [views, setViews] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Greetings name="Leon" />

      <p>Dies ist dein {views}. Besuch!</p>

      <ol className={styles.orderedList}>{songsItem}</ol>
    </div>
  );
}
