// Render

function App() {
  const [phone, setPhone] = React.useState("");
  const [result, setResult] = React.useState("");

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
    setResult("");
  };

  const validatePhoneNumber = () => {
    if (phone.trim().length == 0) {
      setResult("Phone Number is required");
    } else if (isNaN(phone)) {
      setResult("Invalid Phone number");
    } else if (phone.trim().length !== 10) {
      setResult("Invalid length");
    } else {
      alert("You number is Valid");
    }
  };
  return (
    <div className="container">
      <div>
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={handleChangePhone}
        />
        <button onClick={validatePhoneNumber}>check</button>
      </div>
      <p>{result}</p>
    </div>
  );
}

const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
