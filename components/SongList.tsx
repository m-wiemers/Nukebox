import styles from "../styles/SongList.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function SongPrev(props: Props) {
  const songContent = (
    <li className={styles.listItem}>
      <img className={styles.image} src={props.image} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.artist}>{props.artist}</div>
    </li>
  );
  return songContent;
}
