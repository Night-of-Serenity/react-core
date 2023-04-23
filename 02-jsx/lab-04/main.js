const App = (
  <div className="main">
    <div className="main__left">
      <img src="./banner.png" className="main__left__img"></img>
    </div>
    <div className="main__right">
      <div className="main__right__icons">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div className="main__right__content">
        <h1 className="main__right--title">
          Discover authentic Japanese cuisine in LA. Opening Soon!
        </h1>
        <div className="main__right__text">
          Welcome to Hensui, the newest addition to the vibrant Los Angeles
          dining scene! Our restaurant is dedicated to bringing you the most
          authentic and delicious Japanese cuisine. Stay tuned for our grand
          opening date, sign up with your e-mail address to get notified.
        </div>
        <div className="main__right__submit">
          <input type="text" placeholder="e-mail  "></input>
          <button type="submit">SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
);

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(App);
