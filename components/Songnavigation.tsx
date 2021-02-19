import styles from "../styles/Songtopnavi.module.css";

export default function Songnavigation() {
  const SongNavi = (
    <div className={styles.globalcont}>
      <div className={styles.container}>
        <button className={styles.backButton}> </button>
        <div className={styles.headtext}>Now Playing</div>
      </div>
    </div>
  );
  return SongNavi;
}
