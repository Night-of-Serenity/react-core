const App = (
  <div className="main">
    <div className="main__left">
      <img src="./banner.png" className="main__left--img"></img>
    </div>
    <div className="main__right">
      <div className="main__right--content">Discover</div>
    </div>
  </div>
);

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(App);
