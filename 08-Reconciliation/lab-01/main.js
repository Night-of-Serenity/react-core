function App() {
  let friendsArray = ["guy1", "guy2", "guy3", "guy4", "guy5"];

  return (
    <div className="container">
      <ul>
        {friendsArray.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
