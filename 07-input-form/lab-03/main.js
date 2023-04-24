// Render

const DATA = [
  {
    id: 1,
    province: "Bangkok",
    province_normalize: "bangkok",
    districts: [
      { id: 1, district: "Patumwan" },
      { id: 2, district: "Sathon" },
      { id: 3, district: "Bangrak" },
    ],
  },
  {
    id: 2,
    province: "Nonthaburi",
    province_normalize: "nonthaburi",
    districts: [
      { id: 1, district: "Bangkrauy" },
      { id: 2, district: "Pakkred" },
      { id: 3, district: "BangYai" },
    ],
  },
  {
    id: 3,
    province: "Phathumthani",
    province_normalize: "phatumthani",
    districts: [
      { id: 1, district: "Thanyaburi" },
      { id: 2, district: "Lumlukka" },
      { id: 3, district: "Klong-luang" },
    ],
  },
];

function App() {
  const [selectedProvince, setSelectedProvince] = React.useState(
    DATA[0].province_normalize
  );
  const [districts, setDistricts] = React.useState(DATA[0].districts);
  const [selectedDistrict, setSelectedDistrict] = React.useState("");
  console.log("Run");
  const handleSelectProvince = (e) => {
    let province = e.target.value;
    // console.log(province);
    setSelectedProvince(province);

    // เอา province ที่ user เลือก, ไปหา province Obj ใน Data
    const selectedProv = DATA.find(
      (provObj) => provObj.province_normalize === province
    );
    let districtArray = selectedProv.districts;
    // console.log(districtArray);
    setDistricts(districtArray);
  };

  const handleSelectDistrict = (e) => {
    console.log(e.target.value);
    setSelectedDistrict(e.target.value);
  };
  return (
    <div className="container">
      <div>
        <label>Province</label>
        <select onChange={handleSelectProvince} value={selectedProvince}>
          {DATA.map((provObj) => (
            <option key={provObj.id} value={provObj.province_normalize}>
              {provObj.province}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>District</label>
        <select onChange={handleSelectDistrict}>
          {districts.map((d) => (
            <option key={d.id} value={d.district.toLowerCase()}>
              {d.district}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
