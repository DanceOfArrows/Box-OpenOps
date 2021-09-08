import { useState } from "react";
import randomColor from "randomcolor";

import Box from "./Box";

const App = () => {
  /* Create the initial matrix (10 x 10) and fill with random colors */
  let initialMatrix: string[][] = [];
  for (let i = 0; i < 10; i++) {
    initialMatrix[i] = Array.from({ length: 10 }, () => randomColor());
  }
  const [boxMatrix, setBoxMatrix] = useState([...initialMatrix]);

  const handleClick = (indices: number[]) => {
    const [rowNum, columnNum] = indices;
    let shallowCopy = [...boxMatrix];

    /* Change color of the box that was clicked */
    shallowCopy[rowNum][columnNum] = randomColor();

    /* I was unsure whether diagonals were counted as neighbors and whether or not it was to change all neighbors or to update one at random */

    /* Randomly update one box around the box that was clicked */
    let neighborArr = [];
    /* Add the top or bottom indices as possible tiles to change */
    if (rowNum === 0) {
      neighborArr.push([rowNum + 1, columnNum]);
    } else if (rowNum === 9) {
      neighborArr.push([rowNum - 1, columnNum]);
    } else {
      neighborArr.push([rowNum + 1, columnNum]);
      neighborArr.push([rowNum - 1, columnNum]);
    }

    // /* Add the left or right indices as possible tiles to change */
    if (columnNum === 0) {
      neighborArr.push([rowNum, columnNum + 1]);
    } else if (columnNum === 9) {
      neighborArr.push([rowNum, columnNum - 1]);
    } else {
      neighborArr.push([rowNum, columnNum + 1]);
      neighborArr.push([rowNum, columnNum - 1]);
    }

    const boxToChange =
      neighborArr[Math.floor(Math.random() * neighborArr.length)];
    shallowCopy[boxToChange[0]][boxToChange[1]] = randomColor();

    /* Update all boxes around the center tile (excluding diagonals) */
    /* Change color on top and / or bottom */
    // if (rowNum === 0) {
    //   shallowCopy[rowNum + 1][columnNum] = randomColor();
    // } else if (rowNum === 9) {
    //   shallowCopy[rowNum - 1][columnNum] = randomColor();
    // } else {
    //   shallowCopy[rowNum + 1][columnNum] = randomColor();
    //   shallowCopy[rowNum - 1][columnNum] = randomColor();
    // }

    /* Change color on left and / or right */
    // if (columnNum === 0) {
    //   shallowCopy[rowNum][columnNum + 1] = randomColor();
    // } else if (columnNum === 9) {
    //   shallowCopy[rowNum][columnNum - 1] = randomColor();
    // } else {
    //   shallowCopy[rowNum][columnNum + 1] = randomColor();
    //   shallowCopy[rowNum][columnNum - 1] = randomColor();
    // }

    /* Did not implement diagonals, but if I were to do so, I would add more if statements -> same idea as above */

    setBoxMatrix(shallowCopy);
  };

  return (
    <div className="box-container">
      {boxMatrix.map((row, rowIndex) => {
        return row.map((box: string, columnIndex: number) => (
          <Box
            key={`${rowIndex}-${columnIndex}`}
            bgColor={box}
            indices={[rowIndex, columnIndex]}
            clickHandler={handleClick}
          />
        ));
      })}
    </div>
  );
};

export default App;
