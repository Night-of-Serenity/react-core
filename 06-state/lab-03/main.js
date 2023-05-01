function App() {
  const [isShow, setIsShow] = React.useState(true);

  const handleClickToToggle = () => {
    setIsShow(!isShow);
  };

  // if (isShow) {
  //   return (
  //     <div className="container">
  //       <div>
  //         <button onClick={handleClickToToggle}>Click to Hide me</button>
  //       </div>
  //       <p>Text</p>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="container">
  //       <div>
  //         <button onClick={handleClickToToggle}>Click to Show me </button>
  //       </div>
  //     </div>
  //   );
  // }

  let text = `${isShow ? "Hide" : "Show"}`;

  return (
    <div className="container">
      <div>
        <button onClick={handleClickToToggle}>{text}</button>
        {isShow && <p>Text</p>}
      </div>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
