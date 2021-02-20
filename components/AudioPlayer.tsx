import { useState } from "react";
import styles from "../styles/AudioPlayer.module.css";

export default function AudioPlayer() {
  const playSVG = (
    <svg
      className={styles.buttonSVG}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 30.051 30.051"
    >
      <path
        d="M19.982,14.438l-6.24-4.536c-0.229-0.166-0.533-0.191-0.784-0.062c-0.253,0.128-0.411,0.388-0.411,0.669v9.069
     c0,0.284,0.158,0.543,0.411,0.671c0.107,0.054,0.224,0.081,0.342,0.081c0.154,0,0.31-0.049,0.442-0.146l6.24-4.532
     c0.197-0.145,0.312-0.369,0.312-0.607C20.295,14.803,20.177,14.58,19.982,14.438z"
      />
      <path
        d="M15.026,0.002C6.726,0.002,0,6.728,0,15.028c0,8.297,6.726,15.021,15.026,15.021c8.298,0,15.025-6.725,15.025-15.021
     C30.052,6.728,23.324,0.002,15.026,0.002z M15.026,27.542c-6.912,0-12.516-5.601-12.516-12.514c0-6.91,5.604-12.518,12.516-12.518
     c6.911,0,12.514,5.607,12.514,12.518C27.541,21.941,21.937,27.542,15.026,27.542z"
      />
    </svg>
  );
  const pauseSVG = (
    <svg
      className={styles.buttonSVG}
      id="Layer_1"
      height="512"
      viewBox="0 0 511.448 511.448"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z" />
      <path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z" />
      <path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z" />
    </svg>
  );
  const prevSVG = (
    <svg
      className={styles.prevSVG}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 240.823 240.823"
    >
      <path
        id="Chevron_Right"
        d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
       l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
       C52.942,116.507,52.942,124.327,57.633,129.007z"
      />
    </svg>
  );
  const nextSVG = (
    <svg
      className={styles.nextSVG}
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 240.823 240.823"
    >
      <path
        id="Chevron_Right_1_"
        d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
		l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
		C187.881,124.315,187.881,116.495,183.189,111.816z"
      />
    </svg>
  );

  const [play, setPlay] = useState(playSVG);
  const [playStatus, setPlayStatus] = useState(true);

  function changePlay() {
    setPlayStatus(playStatus ? false : true);
    setPlay(playStatus ? pauseSVG : playSVG);
  }

  const audioPlayerContent = (
    <div className={styles.container}>
      <button className={styles.prevButton}>{prevSVG}</button>
      <button onClick={changePlay} className={styles.button}>
        {play}
      </button>
      {/* <button className={styles.pauseButton}>{pauseSVG}</button> */}
      <button className={styles.nextButton}>{nextSVG}</button>
    </div>
  );
  return audioPlayerContent;
}
