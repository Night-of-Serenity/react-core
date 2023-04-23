function App() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="container">
      <h1>Event Handler</h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
