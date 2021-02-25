import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APISong, deleteSong, getSong } from "../../utils/api";
import SongContent from "../../components/Song";
import Songnavigation from "../../components/Songnavigation";
import AudioPlayer from "../../components/AudioPlayer";
import styles from "../../styles/id.module.css";

export default function Song() {
  const router = useRouter();
  // const { id } = router.query;
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery === "string" ? idQuery : idQuery[0];

  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    getSong(id).then((newSong) => setSong(newSong));
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  function goBack() {
    window.history.back();
  }

  const handleDeleteClick = async () => {
    const conf = confirm("are you fu** sure?");
    if (conf == true) {
      await deleteSong(song.id);
    } else {
      getSong(id);
    }
  };

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
        <button onClick={handleDeleteClick} className={styles.delBtn}>
          DELETE
        </button>
      </main>
      <footer>
        <AudioPlayer audio={song.path} id={song.id} />
      </footer>
    </div>
  );
}
