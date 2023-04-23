function ProductItem(productObj) {
  console.log(productObj);
  let { name, price, description } = productObj.product;
  return (
    <>
      <h1>name : {name}</h1>
      <h2>price : {price} B</h2>
      <p>{description}</p>
    </>
  );
}

function App() {
  let product = {
    name: "apple",
    price: 10,
    description: "Flesh apples from farm",
  };
  return (
    <div className="container">
      <ProductItem product={product} />
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
