function App() {
  const displaySelect = (e) => {
    console.log(e);
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <select onChange={displaySelect} name="nation" id="nation">
        <option value="Thailand">Thailand</option>
        <option value="USA">USA</option>
        <option value="China">China</option>
        <option value="Japan">Japan</option>
        <option value="United State">United State</option>
      </select>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
