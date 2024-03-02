import styles from "./Home.module.scss";

const Home = ({ toggleModal }) => {
  return (
    <div className={styles.homeContainer}>
      <h3>Frontend Fundamentals Quiz</h3>
      <button onClick={toggleModal}>Start solving</button>
    </div>
  );
};

export default Home;
