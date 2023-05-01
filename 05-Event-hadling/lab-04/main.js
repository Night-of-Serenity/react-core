function App() {
  const handleOnClick = (e) => {
    confirm("Leave for https://google.com") && location.assign("https://google.com");
  };
  return (
    <div className="container">
      <a onClick={handleOnClick}>Google</a>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
