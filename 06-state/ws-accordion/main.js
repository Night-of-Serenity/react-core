function Accordion() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <h2>Title</h2>
      <button onClick={(e) => setIsOpen(!isOpen)}>click</button>
      {isOpen ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          tenetur vel sint eos eaque quisquam architecto dolorem vero id.
          Doloremque!
        </p>
      ) : (
        ""
      )}
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Accordion />
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
