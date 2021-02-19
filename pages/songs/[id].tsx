import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import SongContent from "../../components/Song";
import Songnavigation from "../../components/Songnavigation";
import Player from "../../components/Player";

export default function Song() {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getSong(id).then((newSong) => {
      setSong(newSong);
    });
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  const songItem = (
    <SongContent image={song.image} title={song.title} artist={song.artist} />
  );

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <Songnavigation back={goBack} />
      <div>{songItem}</div>
      <Player />
    </>
  );
}
