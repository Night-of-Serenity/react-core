// React == creat UI
// const header = React.createElement(
//   "h1",
//   { className: "text-red" },
//   "Hello from React"
// );
// // console.log(header);

// ReactDOM == Manipulate DOM,render
// const domRoot = document.querySelector("#root");
// const root = ReactDOM.createRoot(domRoot);

// root.render(header);
// console.log(domRoot);
// console.log(root);

let list1 = React.createElement("li", null, "item-1");
let list2 = React.createElement("li", null, "item-2");
let list3 = React.createElement("li", null, "item-3");
let lists = React.createElement("ul", null, list1, list2, list3);
let card = React.createElement("h2", null, "My List", lists);

// ReactDOM == Manipulate DOM,render
const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);

root.render(card);
