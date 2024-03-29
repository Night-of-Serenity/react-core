function App() {
  const handleChangeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <h1>Event Handler</h1>
      <input onChange={handleChangeInput} type="text"></input>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
