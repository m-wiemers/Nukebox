import styles from "../styles/Songtopnavi.module.css";

type Props = {
  back(): void;
};

export default function Songnavigation(props: Props) {
  const SongNavi = (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={props.back}></button>
      <div className={styles.headtext}>Now Playing</div>
    </div>
  );
  return SongNavi;
}
