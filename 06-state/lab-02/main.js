function App() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClickToHide = () => {
    setIsShow(false);
  };

  // if (isShow) {
  //   return (
  //     <div className="container">
  //       <div>
  //         <button onClick={handleClickToHide}>Click to Hide me</button>
  //       </div>
  //       <p>Text</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="container">
  //       <div>
  //         <button>Click me </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <div>
        <button onClick={handleClickToHide}>Click to Hide me</button>
      </div>
      {isShow && <p>Text</p>}
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
