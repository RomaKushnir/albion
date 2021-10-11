import styles from "./Main.module.scss";
import ReloadButton from "./components/ReloadButton";
import PageWrapper from "components/PageWrapper/PageWrapper";

const Main = () => (
  <PageWrapper>
    <h1>ALBION ONLINE LEADERBOARDS</h1>
    <h2>{`Best bow players within this week by total kill fame`}</h2>
    <div className={styles.actionBlock}>
      <ReloadButton />
    </div>
  </PageWrapper>
);

export default Main;
