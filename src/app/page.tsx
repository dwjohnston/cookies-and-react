import styles from "./page.module.css";
import UserProfile from "../components/UserProfile";
export default function Home() {
  return (
    <div className={styles.page}>
      <UserProfile/>
    </div>
  );
}
