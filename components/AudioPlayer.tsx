import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";
import { playSVG, pauseSVG, likeSVG, unlikeSVG } from "../public/icons";

type Props = {
  id: string;
  audio: string;
};

export default function AudioPlayer({ audio, id }: Props) {
  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [favorite, setFavorite] = useState(null);
  const audioElement = audioRef.current;

  useEffect(() => {
    if (typeof id !== "string" || favorite === null) {
      return;
    }
    if (favorite) {
      localStorage.setItem("favoriteSong", id);
    }
    if (!favorite) {
      localStorage.removeItem("favoriteSong");
    }
  }, [favorite]);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    setFavorite(id === localStorage.getItem("favoriteSong"));
  }, []);

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
      <button className={styles.like} onClick={() => setFavorite(!favorite)}>
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
