const DOLLARPERBAHT = 30;
function App() {
  const [num, setNum] = React.useState(0);
  const handleChangDollar = (e) => {
    return setNum(e.target.value * DOLLARPERBAHT);
  };
  return (
    <div className="container">
      <div className="dollarbox">
        <label htmlFor="dollar">Enter Dollor:</label>
        <input id="dollar" type="text" onChange={handleChangDollar} />
      </div>
      <div>
        <p>
          Convert to Baht: <span>{num}</span>
        </p>
      </div>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
