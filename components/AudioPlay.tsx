import ReactAudioPlayer from "react-audio-player";
import styles from "../styles/player.module.css";

type Props = {
  audio: string;
};

export default function AudioPlay(props: Props) {
  const player = (
    <div className={styles.container}>
      <ReactAudioPlayer src={props.audio} controls></ReactAudioPlayer>
    </div>
  );
  return player;
}
