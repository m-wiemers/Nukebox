import styles from "../styles/Greetings.module.css";
import ViewCount from "./ViewCounts";

type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <>
      <p>
        Hello, <span className={styles.name}>{props.name}</span>
      </p>
      <ViewCount />
    </>
  );
}
