import { useEffect, useState } from "react";
import styles from "../styles/NewSong.module.css";
import { APISong, postSong } from "../utils/api";

export default function NewSong() {
  const [id, setId] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [path, setPath] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newSong: APISong = { id, image, title, artist, path };
    postSong(newSong);
    window.location.href = `/songs/${id}`;
  }

  function handleBack(event) {
    event.preventDefault();
    history.back();
  }

  useEffect(() => {
    setId(
      `${title.replaceAll(" ", "-").toLowerCase()}_${artist
        .replaceAll(" ", "-")
        .toLowerCase()}`
    );
  }, [artist, title]);

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        Entry Artist
        <input
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        ></input>
        Entry Title
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        Link to Image
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
        ></input>
        Link to mp3
        <input
          value={path}
          onChange={(event) => setPath(event.target.value)}
        ></input>
        This ist our Job:
        <input className={styles.id} readOnly value={id}></input>
        <button className={styles.btn} type="submit" onClick={handleSubmit}>
          Here We Go
        </button>
        <button className={`${styles.btn} ${styles.btn2}`} onClick={handleBack}>
          I wanna go home
        </button>
      </div>
    </form>
  );
}
