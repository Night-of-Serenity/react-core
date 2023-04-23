function MyComponent({ title, age, isAdmin, children }) {
  return (
    <div>
      <p>{"sdfdsf"}</p>
      <h6>{title}</h6>
      <p>{age}</p>
      {isAdmin && <button>click for delete</button>}
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <MyComponent title="pavit" age={20} isAdmin={true}></MyComponent>
      <MyComponent title="max" age={23} isAdmin={false} />
      <MyComponent title="bung" age={27} isAdmin={false} />
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(App());
