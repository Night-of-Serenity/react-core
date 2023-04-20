let linkEl = React.createElement(
  "a",
  { className: "card__link", href: "https://www.google.com" },
  "More Information..."
);
let header = React.createElement(
  "h1",
  { className: "card__content" },
  "Example Domain"
);
let text =
  "This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.";
let content = React.createElement("p", { className: "card__content" }, text);

//Parent
const card = React.createElement(
  "div",
  { className: "card" },
  header,
  content,
  linkEl
);

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);

root.render(card);
