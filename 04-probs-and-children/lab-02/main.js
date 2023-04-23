// โค้ดในบรรทัดที่มี * ให้ผลลัพธ์เป็นอะไรและเพราะอะไร
function Car(props) {
  console.log(props.brand); // * "Honda"
  console.log(props.price); // ** "1000000"
  console.log(props.color); // *** undefined
  return <div>Car</div>;
}
ReactDOM.render(
  <Car brand="Honda" price="1000000" />,
  document.getElementById("root")
);
