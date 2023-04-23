function ProductItem({ name, price, description }) {
  return (
    <>
      <h1>name : {name}</h1>
      <h2>price : {price} B</h2>
      <p>{description}</p>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <ProductItem
        name="apple"
        price={10}
        description="Flesh apples from farm"
      />
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
