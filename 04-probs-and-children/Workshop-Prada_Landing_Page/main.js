// Header
function Header() {
  return (
    <header className="header">
      <div style={{ visibility: "hidden", marginLeft: "10%" }}>
        Lorem ipsum dolor sit ametasdas.
      </div>
      <p className="header__title">SHOP THE SALE COLLECTION</p>
      <ul className="header__navbar">
        <li className="header__navleft">
          <a className="header__signin">Sign in</a>
          <p> / </p>
          <a className="header__register">Register</a>
        </li>
        <li className="header__navcenter">
          <i className="fa-regular fa-heart"></i>
        </li>
        <li className="header__navright">
          <i className="fa-solid fa-bag-shopping"></i>
          <p>bag</p>
        </li>
      </ul>
    </header>
  );
}

// Navbar
function Navbar({ navClass = "navbar", children }) {
  return <ul className={navClass}>{children}</ul>;
}

// Fullimage box
function FullImage({ source, children }) {
  // console.log(source);
  return (
    <div className="fullimage-container">
      <img style={{ width: "100%" }} src={source}></img>
      {children}
    </div>
  );
}

// Button content box
function ButtonContentBox({
  title,
  content,
  buttonName,
  fontSize = "14px",
  addonClass,
}) {
  return (
    <div
      style={{ fontSize: fontSize }}
      className={`buttonContent-container ${addonClass ?? ""}`}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <button>{buttonName}</button>
    </div>
  );
}

// Cardbox Title
function CardBox({ title, children }) {
  return (
    <div className="cardbox__container">
      <h1 className="cardbox__title">{title}</h1>
      <div className="cardbox__contents">{children}</div>
    </div>
  );
}

function ImgCard({ source, colors, content }) {
  return (
    <div className="cardbox__item">
      <div className="card__imagebox">
        <img style={{ width: "100%" }} src={source} />
      </div>
      <div className="card__content">
        <p>{colors} colors</p>
        <h5>{content}</h5>
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      <div className="footer__top">
        <div className="footer__left">
          <div className="footer__company">
            <h3>COMPANY</h3>
            <List>
              <li>Fondazione Prada</li>
              <li>Prada Group</li>
              <li>Luna Rossa</li>
              <li>Sustainability</li>
              <li>Work with us</li>
            </List>
          </div>
          <div className="footer__legalterms">
            <h3>LEGAL TERMS AND CONDITIONS</h3>
            <List>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Sitemap </li>
            </List>
          </div>
        </div>
        <div className="footer__right">
          <h3>FOLLOW US</h3>
          <List>
            <li>
              <i className="fa-brands fa-square-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-youtube"></i>
            </li>
          </List>
        </div>
      </div>
      <div className="footer__bottom">
        <i className="fa-solid fa-location-dot"></i>
        <p>Store Locator</p>
      </div>
    </footer>
  );
}

// List
function List({ children }) {
  return <ul className={`footer__list`}>{children}</ul>;
}

function App() {
  return (
    <div className="container">
      <Header></Header>
      <h1 className="logo">PRADA</h1>
      <Navbar>
        <li>Woman</li>
        <li>Man</li>
        <li>Children</li>
        <li>Sale</li>
        <li>New In</li>
        <li>Home collection</li>
      </Navbar>
      <FullImage source="./sources/sexy-woman.png" />
      <ButtonContentBox
        title="SUMMER 2021"
        content="Explore sports-inspired ready-to-wear and bold accessories from the latest collection."
        buttonName="NEW IN FOR HER"
        fontSize={"14px"}
      />
      <CardBox title="NEW ARRIVALS">
        <ImgCard
          source="./sources/terrybag.png"
          colors={4}
          content="Terry tote bag"
        ></ImgCard>
        <ImgCard
          source="./sources/buckethat.png"
          colors={8}
          content="Re-Nylon bucket hat"
        ></ImgCard>
        <ImgCard
          source="./sources/sunglass.png"
          colors={1}
          content="Prada Symbole sunglasses"
        ></ImgCard>
      </CardBox>
      <div className="buttoncontent-and-card__container">
        <ButtonContentBox
          title="LIGHT LAYERS"
          content="The Pre-Fall 2021 womenswear collections lightweight jackets in relaxed fits."
          buttonName="SHOP NOW"
          fontSize={"10px"}
        />
        <FullImage source="./sources/woman_onchair.png" />
      </div>
      <CardBox title="NEW ARRIVALS FOR HIM">
        <ImgCard
          source="./sources/cotton_tshirt.png"
          colors={2}
          content="Cotton pique T-shirt"
        ></ImgCard>
        <ImgCard
          source="./sources/cottonrobe.png"
          colors={1}
          content="Cotton robe"
        ></ImgCard>
        <ImgCard
          source="./sources/yellow_shirt.png"
          colors={2}
          content="Prada Symbole sunglasses"
        ></ImgCard>
      </CardBox>
      <FullImage source="./sources/girl-swimming-pool.png">
        <div className="text-on-image">
          <h1>LA PRADINA</h1>
          <h3>EVERYTHING FOR HER</h3>
        </div>
      </FullImage>
      <Footer></Footer>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
