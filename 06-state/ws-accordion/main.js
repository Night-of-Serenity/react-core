// Render
function Accordion() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    // isOpen = !isOpen
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h2>Title</h2>
      <button onClick={handleClick}>click</button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam ea impedit dicta tenetur veniam commodi architecto blanditiis cupiditate
          dolorum!
        </p>
      )}
    </>
  );
}
function App() {
  return (
    <div className="container">
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
