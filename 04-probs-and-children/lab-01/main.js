function Profile({ fullName, age }) {
  // console.log(probs);
  // console.log(probs.s);
  return (
    <>
      <h1>FullName: {fullName}</h1>
      <h2>Age : {age}</h2>
    </>
  );
}

function App() {
  let user1 = { name: "John Doe", age: 27 };
  let user2 = { name: "Mark Ruffalo", age: 30 };
  let user3 = { name: "Chuwit K", age: 40 };
  return (
    <div className="container">
      <Profile {...user1}></Profile>
      <Profile {...user2}></Profile>
      <Profile {...user3}></Profile>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
