// const header = React.createElement("h1", null, "Hi from React");

// UI from JSX: Javascript Syntax Extention
const header = <h1>Hi from JSX {`${[1, 2, 3, 4, 5]}`}</h1>;

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(header);
