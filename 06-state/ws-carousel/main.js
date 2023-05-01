// Render
function Carousel() {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];

  const [imageIndex, setImageIndex] = React.useState(0);

  const handleGoToLeft = () => {
    if (imageIndex === 0) setImageIndex(images.length - 1);
    else setImageIndex(imageIndex - 1);
  };
  const handleGoToRight = () => {
    if (imageIndex === images.length - 1) setImageIndex(0);
    else setImageIndex(imageIndex + 1);
  };

  return (
    <div className="carousel">
      <span onClick={handleGoToLeft}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>
      </span>
      <div>
        <img src={images[imageIndex]}></img>
      </div>
      <span onClick={handleGoToRight}>
        <i className="fa-sharp fa-solid fa-arrow-right"></i>
      </span>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Carousel />
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
