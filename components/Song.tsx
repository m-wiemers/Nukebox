import styles from "../styles/song.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function SongContent(props: Props) {
  const singleSongContent = (
    <div className={styles.container}>
      <img className={styles.img} src={props.image} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.artist}>{props.artist}</div>
    </div>
  );
  return singleSongContent;
}
