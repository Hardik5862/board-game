import styles from "./BoardBg.module.css";

const BoardBg = () => {
  const board = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  return (
    <div className={styles.main}>
      {board.map((row, i) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((cell, j) => {
              return <div className={styles.cell} key={j}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BoardBg;
