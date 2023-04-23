function App() {
  return (
    <div className="container  ">
      <div className="calculator">
        <div className="display">Display</div>
        <KeyPress content="C" addonClass="btn--grey"/>
        <KeyPress content="+/-" addonClass="btn--grey"/>
        <KeyPress content="%" addonClass="btn--grey"/>
        <KeyPress content="/" addonClass="btn--orange"/>
        <KeyPress content="7" addonClass="btn--grey"/>
        <KeyPress content="8" addonClass="btn--grey"/>
        <KeyPress content="9" addonClass="btn--grey"/>
        <KeyPress content="x" addonClass="btn--orange"/>
        <KeyPress content="4" addonClass="btn--grey"/>
        <KeyPress content="5" addonClass="btn--grey"/>
        <KeyPress content="6" addonClass="btn--grey"/>
        <KeyPress content="-" addonClass="btn--orange"/>
        <KeyPress content="3" addonClass="btn--grey"/>
        <KeyPress content="2" addonClass="btn--grey"/>
        <KeyPress content="1" addonClass="btn--grey"/>
        <KeyPress content="+" addonClass="btn--orange"/>
        <KeyPress content="0" addonClass="btn--grey"/>
        <KeyPress content="." addonClass="btn--grey"/>
        <KeyPress content="<=" addonClass="btn--grey"/>
        <KeyPress content="=" addonClass="btn--orange"/>
    </div>
  );
}

function PressKey({ content, addonClass }) {
  return <div className={`keypress ${addonClass}`}>{content}</div>;
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
