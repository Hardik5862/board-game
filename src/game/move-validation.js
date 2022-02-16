export const isMoveValid = (player, surc, dest, mat) => {
  if (player === 1) {
    return isMoveValidP1(surc, dest, mat);
  } else if (player === 2) {
    return isMoveValidP2(surc, dest, mat);
  }
};

const isMoveValidP1 = (surc, dest, mat) => {
  if (mat[dest[0]][dest[1]] === 1) {
    return false;
  }

  const temp = surc[0] + surc[1];
  if (temp % 2 === 0) {
    if (
      dest[0] === surc[0] + 1 &&
      (dest[1] === surc[1] ||
        dest[1] === surc[1] + 1 ||
        dest[1] === surc[1] - 1)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (dest[0] === surc[0] + 1 && dest[1] === surc[1]) {
      return true;
    } else {
      return false;
    }
  }
};

const isMoveValidP2 = (surc, dest, mat) => {
  if (mat[dest[0]][dest[1]] === 2) {
    return false;
  }

  const temp = surc[0] + surc[1];
  if (temp % 2 === 0) {
    if (
      dest[0] === surc[0] - 1 &&
      (dest[1] === surc[1] ||
        dest[1] === surc[1] + 1 ||
        dest[1] === surc[1] - 1)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (dest[0] === surc[0] - 1 && dest[1] === surc[1]) {
      return true;
    } else {
      return false;
    }
  }
};
