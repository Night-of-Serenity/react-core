function GameBoard({ gameArray, setGameArray, player, setPlayer, winner, setWinner, countWinX, countWinO, setCountWinX, setCountWinO }) {
  function handleTick(e, indexX, indexY) {
    console.log("gameArray:", gameArray);
    if (gameArray[indexX][indexY] === "" && winner === null) {
      if (player === true) {
        const newArray = gameArray.slice();
        newArray[indexX][indexY] = "X";
        setGameArray(newArray);
        setPlayer(!player);
        const transformX = tranformMetrix(gameArray, "X");
        console.log("transformX:", transformX);
        if (checkWin(transformX)) {
          setWinner("X");
          setCountWinX(countWinX + 1);
        }
      } else {
        const newArray = gameArray.slice();
        newArray[indexX][indexY] = "O";
        setGameArray(newArray);
        setPlayer(!player);
        const transformO = tranformMetrix(gameArray, "O");
        console.log("transformO:", transformO);
        if (checkWin(transformO)) {
          setWinner("O");
          setCountWinO(countWinO + 1);
        }
      }
    }
  }
  return (
    <div className="boardgame">
      <h3>tic-tac-toe</h3>
      <div className="game-table">
        <div
          className="box-00"
          onClick={(e) => {
            handleTick(e, 0, 0);
          }}
        >
          {gameArray[0][0]}
        </div>
        <div
          className="box-01"
          onClick={(e) => {
            handleTick(e, 0, 1);
          }}
        >
          {gameArray[0][1]}
        </div>
        <div
          className="box-02"
          onClick={(e) => {
            handleTick(e, 0, 2);
          }}
        >
          {gameArray[0][2]}
        </div>
        <div
          className="box-03"
          onClick={(e) => {
            handleTick(e, 1, 0);
          }}
        >
          {gameArray[1][0]}
        </div>
        <div
          className="box-04"
          onClick={(e) => {
            handleTick(e, 1, 1);
          }}
        >
          {gameArray[1][1]}
        </div>
        <div
          className="box-05"
          onClick={(e) => {
            handleTick(e, 1, 2);
          }}
        >
          {gameArray[1][2]}
        </div>
        <div
          className="box-06"
          onClick={(e) => {
            handleTick(e, 2, 0);
          }}
        >
          {gameArray[2][0]}
        </div>
        <div
          className="box-07"
          onClick={(e) => {
            handleTick(e, 2, 1);
          }}
        >
          {gameArray[2][1]}
        </div>
        <div
          className="box-08"
          onClick={(e) => {
            handleTick(e, 2, 2);
          }}
        >
          {gameArray[2][2]}
        </div>
      </div>
    </div>
  );
}

function checkWin(metrix) {
  function sumArr(arr) {
    return arr.reduce((a, c) => a + c, 0);
  }

  function horizontalCheck(metrix) {
    for (let arr of metrix) {
      if (sumArr(arr) == arr.length) {
        return true;
      }
    }
    return false;
  }

  function verticalCheck(metrix) {
    for (let index in metrix[0]) {
      let vArr = [];
      for (let arr of metrix) {
        vArr.push(arr[index]);
      }
      if (sumArr(vArr) == metrix[0].length) {
        return true;
      }
    }
    return false;
  }

  function diagonalCheck(metrix) {
    let dArr1 = [];
    let dArr2 = [];
    for (let index in metrix[0]) {
      dArr1.push(metrix[index][index]);
      dArr2.push(metrix[index][metrix[0].length - index - 1]);
    }
    if (sumArr(dArr1) == metrix.length || sumArr(dArr2) == metrix.length) return true;
    return false;
  }
  if (horizontalCheck(metrix)) return true;
  if (verticalCheck(metrix)) return true;
  if (diagonalCheck(metrix)) return true;
  return false;
}

function tranformMetrix(userInput, user) {
  let tranformResult = [];
  for (let rowIndex in userInput) {
    let row = [];
    for (let columnIndex in userInput[0]) {
      if (userInput[rowIndex][columnIndex] == user) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    tranformResult.push(row);
  }
  return tranformResult;
}

function App() {
  const [winner, setWinner] = React.useState(null);
  const [countWinX, setCountWinX] = React.useState(0);
  const [countWinO, setCountWinO] = React.useState(0);

  const [gameArray, setGameArray] = React.useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = React.useState(true);

  function handleReset() {
    setGameArray([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
  }

  return (
    <div className="container">
      <GameBoard
        gameArray={gameArray}
        setGameArray={setGameArray}
        player={player}
        setPlayer={setPlayer}
        winner={winner}
        setWinner={setWinner}
        countWinX={countWinX}
        countWinO={countWinO}
        setCountWinX={setCountWinX}
        setCountWinO={setCountWinO}
      />
      <button onClick={handleReset}>Reset Game</button>
      <div className="game-status">
        <div className="winner">{winner === "X" ? "Winner is X" : winner === "O" ? "Winner is O" : "No Winner"}</div>
        <div style={{ color: player === true ? "red" : "blue" }} className="player-status">
          PLAYER {player === true ? "X" : "O"} TURN
        </div>
        <div className="wincount">
          <div className="wincount__left">X win : {countWinX}</div> <div className="wincount__right">O win : {countWinO}</div>
        </div>
      </div>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
