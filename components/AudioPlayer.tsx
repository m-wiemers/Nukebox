import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { playSVG, pauseSVG, likeSVG, unlikeSVG } from "../public/icons";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  id: string;
  audio: string;
};

export default function AudioPlayer({ audio, id }: Props) {
  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioElement = audioRef.current;
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage("favoriteSong", []);
  const favorite = favoriteSongs.includes(id);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
  }, []);

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      audioElement.pause();
    }
  }, [isPlaying]);

  return (
    <div className={styles.player}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <button className={styles.like} onClick={handleFavoriteClick}>
        {favorite ? likeSVG : unlikeSVG}
      </button>

      <input
        className={styles.duration}
        type="range"
        min="0"
        max={audioElement.duration}
        value={progress}
      />
      <button
        className={styles.playButton}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? pauseSVG : playSVG}
      </button>
    </div>
  );
}
