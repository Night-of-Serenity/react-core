function Lists({ title, itemsList }) {
  console.log(title, itemsList);
  let listArray = itemsList.map((item, index) => (
    <li key={`item-${index}`}>
      <a>{item}</a>
    </li>
  ));
  return (
    <div className="itemslists__container">
      <h4 className="itemslists__title">{title}</h4>
      <ul className="itemslists__list">{listArray}</ul>
    </div>
  );
}

function App() {
  let list1 = {
    title: "ใหม่และโดดเด่น",
    itemsList: [
      "สินค้ามาใหม่",
      "รองเท้ารุ่นใหม่ล่าสุด",
      "เสื้อผ้าสไตล์ใหม่ล่าสุด",
      "ปฏิทินเปิดตัว SNKRS",
      "เป็นเจ้าของได้แล้วที่ SNKRS",
      "ออกแบบเองกับ Nike By You",
      "พิเศษเฉพาะบน Nike App",
      "สินค้าขายดี",
      "พิเศษสำหรับ Member",
      "ใหม่และโดดเด่น",
    ],
  };
  let list2 = {
    title: "ซื้อสินค้าไอคอน",
    itemsList: [
      "Air Jordan 1",
      "Air Max",
      "Air Force 1",
      "Dunk",
      "Blazer",
      "Pegasus",
    ],
  };
  let list3 = {
    title: "สินค้าใหม่สำหรับผู้ชาย",
    itemsList: [
      "รองเท้า",
      "เสื้อผ้า",
      "อุปกรณ์และอุปกรณ์เสริม",
      "ซื้อสินค้ามาใหม่ทั้งหมด",
    ],
  };
  let list4 = {
    title: "สินค้าใหม่สำหรับผู้หญิง",
    itemsList: [
      "รองเท้า",
      "เสื้อผ้า",
      "อุปกรณ์และอุปกรณ์เสริม",
      "ซื้อสินค้ามาใหม่ทั้งหมด",
    ],
  };
  let list5 = {
    title: "สินค้าใหม่สำหรับเด็ก",
    itemsList: [
      "รองเท้า",
      "เสื้อผ้า",
      "อุปกรณ์และอุปกรณ์เสริม",
      "ซื้อสินค้ามาใหม่ทั้งหมด",
    ],
  };
  // console.log("list1:", list1);
  // console.log("list2:", list2);
  // console.log("list3:", list3);
  // console.log("list4:", list4);
  // console.log("list5:", list5);
  return (
    <div className="container">
      <Lists {...list1}></Lists>
      <Lists {...list2}></Lists>
      <Lists {...list3}></Lists>
      <Lists {...list4}></Lists>
      <Lists {...list5}></Lists>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
