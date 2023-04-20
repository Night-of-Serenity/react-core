// Nav
let nav = React.createElement("nav", null, "LEARN REACT >");

// Header
let headerTitle = React.createElement("h1", null, "Quick Start");
let headerContent = React.createElement(
  "p",
  null,
  "Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis."
);
let header = React.createElement("header", null, headerTitle, headerContent);

// Main-title
let mainTitle = React.createElement("h2", null, "You will learn");

// Main-Lists
let list1 = React.createElement(
  "li",
  null,
  "How to create and nest components"
);
let list2 = React.createElement("li", null, "How to add markup and styles");
let list3 = React.createElement("li", null, "How to display data");
let list4 = React.createElement(
  "li",
  null,
  "How to render conditions and lists"
);
let list5 = React.createElement(
  "li",
  null,
  "How to respond to events and update the screen"
);
let list6 = React.createElement(
  "li",
  null,
  "How to share data between components"
);
let mainLists = React.createElement(
  "ul",
  null,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6
);

// Main-parent
let main = React.createElement("main", null, mainTitle, mainLists);

// Parent
let container = React.createElement(
  "div",
  { className: "container" },
  nav,
  header,
  main
);

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(container);
