import styles from "../styles/SongList.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function SongPreList(props: Props) {
  const songListContent = (
    <li className={styles.listItem}>
      <img src={props.image} className={styles.image} />
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.artist}>{props.artist}</p>
    </li>
  );
  return songListContent;
}
