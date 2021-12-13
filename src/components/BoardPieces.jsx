import { useState } from "react";
import styles from "./BoardPieces.module.css";

const BoardPieces = () => {
  // eslint-disable-next-line no-unused-vars
  const [pieces, setPieces] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2],
  ]);

  const playerPieceClassname = (player) => {
    if (player === 1) {
      return styles.player1;
    } else if (player === 2) {
      return styles.player2;
    }
  };

  return (
    <div className={styles.main}>
      {pieces.map((row, i) => {
        return (
          <div className={styles.row} key={i}>
            {row.map((piece, j) => {
              return (
                <div className={styles.piece} key={j}>
                  <div className={styles.piece_container}>
                    {piece !== 0 ? (
                      <span className={playerPieceClassname(piece)}>
                        {piece}
                      </span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BoardPieces;
