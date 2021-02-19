import styles from "../styles/player.module.css";

export default function Player() {
  const playerContent = (
    <div className={styles.containter}>
      <div className={styles.contantbar}>
        <button className={styles.download}>download</button>
        <button className={styles.like}>like</button>
        <button className={styles.volume}>volume</button>
      </div>
      <div className={styles.timebar}>---</div>
      <div className={styles.infobar}>
        <div className={styles.time}>5:00</div>
        <div className={styles.remained}>5:00 min remained</div>
        <div className={styles.total}>35:00</div>
      </div>
      <div className={styles.player}>
        <div className={styles.play}></div>
      </div>
    </div>
  );
  return playerContent;
}
