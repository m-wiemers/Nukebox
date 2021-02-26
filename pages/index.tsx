import Head from "next/head";
import styles from "../styles/Home.module.css";
import Greetings from "../components/Greetings";
import SongPrev from "../components/SongList";
import { useEffect, useState } from "react";
import { APISong, deleteSong, getSongs } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);

  function refreshSongs() {
    getSongs().then(setSongs);
  }
  useEffect(refreshSongs, []);

  const songsItem = songs.map((song) => (
    <Link href={`/songs/${song.id}`} key={song.id}>
      <a>
        <SongPrev
          image={song.image}
          title={song.title}
          artist={song.artist}
          link={song.path}
          id={song.id}
        />
        <button
          onClick={async (event) => {
            event.preventDefault();
            await deleteSong(song.id);
            refreshSongs();
          }}
        >
          Delete
        </button>
      </a>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Greetings name="Leon" />

      <ol className={styles.orderedList}>{songsItem}</ol>

      <div>
        <p>Wanne spend a Song?</p>
        <button>Here you go</button>
      </div>
    </div>
  );
}
