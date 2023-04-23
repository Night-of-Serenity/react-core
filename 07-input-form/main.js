function App() {
  const [range, setRange] = React.useState(50);
  const [option, setOption] = React.useState();
  const handleChange = (e) => {
    console.log(e.target.value);
    setRange(Number(e.target.value));
  };
  const handleSelect = (e) => {};
  return (
    <div className="container">
      <div>
        <input type="range" onChange={handleChange} value={range} />
      </div>
      <select onChange={handleSelect} value={option}>
        <option value="op-1">Option-1</option>
        <option value="op-1">Option-1</option>
        <option value="op-1">Option-1</option>
      </select>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
