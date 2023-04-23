// Reuse ?
// 1. reuse-value by variable
// 2. reuse-logic,process sometimes generate a value (return <value>)

function add(x, y) {
  let result = x + y;
  return result;
}
let result = 5;
// console.log(result);
// console.log(result);
// console.log(result);
// console.log(result);
// console.log(result);
// console.log(add(5, 10));
// console.log(add(5, 6));
// console.log(add(100, 6));

// React : Reuse UI value : keep JXS as a variable
const input = <input />; // JSX == React Element == JS-plain object
console.log(input);

//React : Reuse UI : keep JSX as Function (generate)Component
function MyTitle(props) {
  let count = 5;
  return <h1 className="text-blue">My-Name</h1>;
}

function MyComponent() {
  return <h3>MyComponent</h3>;
}
// console.log(MyTitle);
// console.log(MyTitle());
console.log(<MyTitle />);

class MyClassComponent extends React.PureComponent {
  // # Zone-1 : Do Logic,other method

  // # Zone-2 : RenderUI
  render() {
    return <h1>My Class Component</h1>;
  }
}

// const App = (
//     <div className='container'>
//         Reuseable UI
//         {[input, input, input, input]}
//         {add(4, 5)}
//         {MyTitle()}
//         {MyTitle()}
//         <MyTitle />
//         {/* Mytitle({className:"aaa"}) */}
//         {/* <MyTitle></MyTitle>
//         <MyComponent /> */}
//         <MyClassComponent />
//     </div>
// );

function App() {
  // FUNCTION-BODY

  //
  return (
    <div className="container">
      Reuseable UI:From FC
      {[input, input, input, input]}
      {add(4, 5)}
      {MyTitle()}
      {MyTitle()}
      <MyTitle firstArgument="aaa" />
      {/* MyTitle({firstArgument: 'aaaa'}) */}
      <MyClassComponent />
    </div>
  );
}

// let a = <App />;
// Render
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
