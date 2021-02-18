import { useState } from "react";
import styles from "../styles/Button.module.css";

export default function Button() {
  const likeVector = <img src="/like.svg" />;
  const unLikeVector = <img src="/unlike.svg" />;
  const [like, setLike] = useState(unLikeVector);

  function changeLike() {
    setLike(like == unLikeVector ? likeVector : unLikeVector);
  }

  return (
    <button className={styles.button} onClick={changeLike}>
      {like}
    </button>
  );
}
