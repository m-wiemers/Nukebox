import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";
import LikeButton from "./LikeButton";
import { playSVG, pauseSVG } from "../public/icons";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioElement = audioRef.current;

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
      <LikeButton />
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
