import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import SongContent from "../../components/Song";
import Songnavigation from "../../components/Songnavigation";
import AudioPlayer from "../../components/AudioPlayer";
import styles from "../../styles/id.module.css";

export default function Song() {
  const router = useRouter();
  const { id } = router.query;
  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getSong(id).then((newSong) => setSong(newSong));
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  function goBack() {
    window.history.back();
  }

  return (
    <div className={styles.globContainer}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Songnavigation back={goBack} />
      <main>
        <SongContent
          image={song.image}
          title={song.title}
          artist={song.artist}
          path={song.path}
        />
      </main>
      <footer>
        <AudioPlayer audio={song.path} id={song.id} />
      </footer>
    </div>
  );
}
