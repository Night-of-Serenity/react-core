// Render
let num = 0;
function App() {
  // # Logic
  // const myState = React.useState(0); // [a,b]
  // let currentState = myState[0]; // a
  // let updateFunction = myState[1]; // b

  const [count, setCount] = React.useState(0);

  let countJs = 0;
  const handleClick = () => {
    countJs += 1;
    // console.log(count);
    num++;
    console.log("num", num);
    let newState = count + 1;
    setCount(newState);
  };

  // #UI
  return (
    <div className="container">
      State
      <button onClick={handleClick}>Click me</button>
      <p>
        num :{num} count: {count} countJS: {countJs}
      </p>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
