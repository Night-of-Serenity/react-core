function GridTable({ gameMetrix, setGameMetrix, player, setPlayer, winner, setWinner, countWinX, countWinO, setCountWinX, setCountWinO }) {
  // Functin for handle event when click element inside game table
  function handleTick(e, indexX, indexY) {
    // When click on empty element inside table and there is no winner, take turn set string 'X' or 'O' depend on player state with that clicked element's 'index X' and 'index Y' inside gameMetrix
    console.log("gameMetrix:", gameMetrix);
    if (gameMetrix[indexX][indexY] === "" && winner === null) {
      if (player === true) {
        // player X turn
        const newArray = gameMetrix.slice();
        newArray[indexX][indexY] = "X";
        setGameMetrix(newArray);
        setPlayer(!player);
        const transformX = tranformMetrix(gameMetrix, "X");
        console.log("transformX:", transformX);
        if (checkWin(transformX)) {
          setWinner("X");
          setCountWinX(countWinX + 1);
        }
      } else {
        // player O turn
        const newArray = gameMetrix.slice();
        newArray[indexX][indexY] = "O";
        setGameMetrix(newArray);
        setPlayer(!player);
        const transformO = tranformMetrix(gameMetrix, "O");
        console.log("transformO:", transformO);
        if (checkWin(transformO)) {
          setWinner("O");
          setCountWinO(countWinO + 1);
        }
      }
    }
  }
  return (
    <div className="game-grid">
      <div
        className="box-00"
        onClick={(e) => {
          handleTick(e, 0, 0);
        }}
      >
        {gameMetrix[0][0]}
      </div>
      <div
        className="box-01"
        onClick={(e) => {
          handleTick(e, 0, 1);
        }}
      >
        {gameMetrix[0][1]}
      </div>
      <div
        className="box-02"
        onClick={(e) => {
          handleTick(e, 0, 2);
        }}
      >
        {gameMetrix[0][2]}
      </div>
      <div
        className="box-03"
        onClick={(e) => {
          handleTick(e, 1, 0);
        }}
      >
        {gameMetrix[1][0]}
      </div>
      <div
        className="box-04"
        onClick={(e) => {
          handleTick(e, 1, 1);
        }}
      >
        {gameMetrix[1][1]}
      </div>
      <div
        className="box-05"
        onClick={(e) => {
          handleTick(e, 1, 2);
        }}
      >
        {gameMetrix[1][2]}
      </div>
      <div
        className="box-06"
        onClick={(e) => {
          handleTick(e, 2, 0);
        }}
      >
        {gameMetrix[2][0]}
      </div>
      <div
        className="box-07"
        onClick={(e) => {
          handleTick(e, 2, 1);
        }}
      >
        {gameMetrix[2][1]}
      </div>
      <div
        className="box-08"
        onClick={(e) => {
          handleTick(e, 2, 2);
        }}
      >
        {gameMetrix[2][2]}
      </div>
    </div>
  );
}

// Function use for check if input of transformed matrix of numbers 1 satified win condition
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

// function for tranform matrix of string 'X' or 'O' into matrix of number 1
// 'userInput' parameter use for accept game matrix of 'X' and 'O', 'user' parameter can put string 'X' or 'O' as input
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
  const [winner, setWinner] = React.useState(null); // winner keep winner of game as 'X' or 'O', initialize as null
  const [countWinX, setCountWinX] = React.useState(0); // use for count how many times X win
  const [countWinO, setCountWinO] = React.useState(0); // use for count how many times O win

  const [gameMetrix, setGameMetrix] = React.useState([
    // table matrix of boardgame keep string 'X' or 'O' or empty '' inside matrix 3x3
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = React.useState(true); // use to classify 2 players, 'true' for player X and 'false' for player O

  function handleReset() {
    // event function for "reset button"
    setGameMetrix([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
  }

  return (
    <div className="container">
      <div className="boardgame">
        <h3>tic-tac-toe</h3>
        {/* component function use for generate grid table of game*/}
        <GridTable
          gameMetrix={gameMetrix}
          setGameMetrix={setGameMetrix}
          player={player}
          setPlayer={setPlayer}
          winner={winner}
          setWinner={setWinner}
          countWinX={countWinX}
          countWinO={countWinO}
          setCountWinX={setCountWinX}
          setCountWinO={setCountWinO}
        />
      </div>
      <button onClick={handleReset}>Reset Game</button>
      {/* display all status of game */}
      <div className="game-status">
        <div className="winner">{winner === "X" ? "Winner is X" : winner === "O" ? "Winner is O" : "No Winner"}</div>
        <div style={{ color: player === true ? "red" : "blue" }} className="player-status">
          PLAYER {player === true ? "X" : "O"} TURN
        </div>
        <div className="wincount">
          <div className="wincount__left">X score : {countWinX}</div> <div className="wincount__right">O score : {countWinO}</div>
        </div>
      </div>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
