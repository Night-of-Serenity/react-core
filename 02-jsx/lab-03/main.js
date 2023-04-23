let input = (
  <input
    className="username"
    id="username"
    name="username"
    autoFocus
    placeholder="username"
  />
);
function MyTitle() {
  return <h1>My Title</h1>;
  // return 2 + 3;
}
let label = <label htmlFor={input.props.id}>Username</label>;
let container = (
  <>
    {/* <MyTitle /> */}
    {MyTitle()}
    {label}
    {input}
  </>
);

console.log(input);

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(container);
