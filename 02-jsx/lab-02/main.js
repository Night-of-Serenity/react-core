let height = 160;
let weight = 67;
const calBMI = (height, weight) => weight / (height / 100) ** 2;

let display = <h1>BMI : {calBMI(height, weight)}</h1>;

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(display);
