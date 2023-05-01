// Render
function Modal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && <button onClick={handleClickOpen}>open</button>}
      {isOpen && (
        <div style={{ textAlign: "center" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam ea impedit dicta tenetur veniam commodi architecto blanditiis cupiditate
            dolorum!
          </p>
          <button onClick={handleClickClose}>close</button>
        </div>
      )}
    </>
  );
}
function App() {
  return (
    <div className="container">
      <Modal />
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
