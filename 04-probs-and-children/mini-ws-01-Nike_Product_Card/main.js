function ItemCatalog({ children }) {
  return <div className="itemcards__container">{children}</div>;
}

function Itemcard({ resource, productName, description, price }) {
  return (
    <div className="itemcard">
      <div className="itemcard__img">
        <img style={{ width: "100%" }} src={resource} />
      </div>
      <div className="itemcard__content">
        <div className="itemcard__content-left">
          <h3>{productName}</h3>
          <p>{description}</p>
        </div>
        <div className="item__content-right">
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ItemCatalog>
        <Itemcard
          resource="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/bdb9af6b-24e3-40df-b843-4e7a51a33833/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%82%E0%B8%A3%E0%B9%89%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89-revolution-6-NC0P7k.png"
          productName="Nike Revolution 6"
          description="รองเท้าวิ่งโร้ดรันนิ่งผู้ชาย"
          price="฿2100"
        />
        <Itemcard
          resource="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/6bb1e869-114e-476e-96ff-c279778f7a06/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%82%E0%B8%A3%E0%B9%89%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AA%E0%B9%88-%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-pegasus-flyease-RlnnC7.png"
          productName="Nike Pegasus FlyEase"
          description="รองเท้าวิ่งโร้ดรันนิ่งผู้ชายใส่/ถอดง่าย"
          price="฿4,700"
        />
        <Itemcard
          resource="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/11fb2c7b-68ba-4ef8-824b-c334d55fa952/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-jordan-nu-retro-1-low-8294mJ.png"
          productName="Nike Revolution 6"
          description="รองเท้าวิ่งโร้ดรันนิ่งผู้ชาย"
          price="฿4,100"
        />
      </ItemCatalog>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
