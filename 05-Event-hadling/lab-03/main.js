function App() {
  const handleOnChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.checked);
  };

  return (
    <div className="container">
      <form>
        <input type="checkbox" id="Sumsung" name="Sumsung" value="sumsung" onChange={handleOnChange} />
        <label htmlFor="Sumsung"> Sumsung</label>
        <br></br>
        <input type="checkbox" id="Iphone" name="Iphone" value="iphone" onChange={handleOnChange} />
        <label htmlFor="Iphone"> Iphone</label>
        <br></br>
        <input type="checkbox" id="Oppo" name="Oppo" value="oppo" onChange={handleOnChange} />
        <label htmlFor="Oppo"> Oppo</label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
