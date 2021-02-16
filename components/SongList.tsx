import styles from "../styles/SongList.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function SongList(props: Props) {
  const songListContent = (
    <li className={styles.list}>
      <img src={props.image} className={styles.image} />
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.artist}>{props.artist}</p>
    </li>
  );
  return <ol className={styles.orderedList}>{songListContent}</ol>;
}
