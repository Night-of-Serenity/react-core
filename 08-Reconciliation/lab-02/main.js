function App() {
  let postArray = [
    {
      id: 1,
      message: "some message1",
      postDate: "22/04/23",
      posterName: "Guy1",
    },
    {
      id: 2,
      message: "some message2",
      postDate: "23/04/23",
      posterName: "Guy2",
    },
    {
      id: 3,
      message: "some message3",
      postDate: "24/04/23",
      posterName: "Guy3",
    },
  ];
  return (
    <div className="container">
      <ul>
        {postArray.map((post) => {
          return (
            <li key={post.id}>
              Name: {post.posterName}, post-date: {post.postDate}, message:
              {`"${post.message}"`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const domRoot = document.querySelector("#root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
