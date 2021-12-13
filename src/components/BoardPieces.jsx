import { useState, useEffect } from "react";
import { matrixUpdate } from "../game/matrix-update";
import styles from "./BoardPieces.module.css";

const BoardPieces = () => {
  const [surc, setSurc] = useState([-1, -1]);
  const [dest, setDest] = useState([-1, -1]);
  const [step, setStep] = useState(1);
  const [playerTurn, setPlayerTurn] = useState(1);
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

  useEffect(() => {
    if (step === 3) {
      setPieces((prevState) => matrixUpdate(prevState, playerTurn, surc, dest));
      setStep(1);
      setSurc([-1, -1]);
      setDest([-1, -1]);
      setPlayerTurn((prevState) => (prevState === 1 ? 2 : 1));
    }
  }, [dest, playerTurn, step, surc]);

  const handleMove = (player, coords) => {
    console.log(`Player: ${player} clicked { ${coords[0]}, ${coords[1]} }`);
    if (player === playerTurn) {
      if (step === 1) {
        setSurc(coords);
        setStep(2);
      }
    }
    if (step === 2) {
      setDest(coords);
      setStep(3);
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
                  <div
                    className={styles.piece_container}
                    onClick={() => handleMove(piece, [i, j])}
                  >
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
