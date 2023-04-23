function App() {
  return (
    <div className="container  ">
      <div className="calculator">
        <CalComponent content="0" addonClass="display" />
        <CalComponent content="C" addonClass="btn--dimgray " />
        <CalComponent content="+/-" addonClass="btn--dimgray " />
        <CalComponent content="%" addonClass="btn--dimgray " />
        <CalComponent content="/" addonClass="btn--orange" />
        <CalComponent content="7" addonClass="btn--grey" />
        <CalComponent content="8" addonClass="btn--grey" />
        <CalComponent content="9" addonClass="btn--grey" />
        <CalComponent content="x" addonClass="btn--orange" />
        <CalComponent content="4" addonClass="btn--grey" />
        <CalComponent content="5" addonClass="btn--grey" />
        <CalComponent content="6" addonClass="btn--grey" />
        <CalComponent content="-" addonClass="btn--orange" />
        <CalComponent content="3" addonClass="btn--grey" />
        <CalComponent content="2" addonClass="btn--grey" />
        <CalComponent content="1" addonClass="btn--grey" />
        <CalComponent content="+" addonClass="btn--orange" />
        <CalComponent content="0" addonClass="btn--grey btn--leftbottom" />
        <CalComponent content="." addonClass="btn--grey" />
        <CalComponent content="<=" addonClass="btn--grey" />
        <CalComponent content="=" addonClass="btn--orange btn--rightbottom " />
      </div>
    </div>
  );
}

function CalComponent({ content, addonClass }) {
  return <div className={`component ${addonClass}`}>{content}</div>;
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
