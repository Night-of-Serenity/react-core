let fullName = "Peerapat";
let birthYear = 2022;
let CURRENT_YEAR = 2023;

const App = (
  <>
    <h1>{fullName}</h1>
    <p>{CURRENT_YEAR - birthYear}</p>
    <img src="https://cdn.pixabay.com/photo/2023/04/02/11/19/portrait-7894415_960_720.jpg"></img>
  </>
);

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(App);
