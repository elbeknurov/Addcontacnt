import "./App.css";

function App() {
  const obj = [
    {
      id: 1,
      title: "Abdulloh",
      text: "   +998903236806",
    },
  ];
  return (
    <div className="App container">
      <div className="wrapper">
        <div className="top">
          <h2 className="nameItem">New contact add</h2>
          <form className="form">
            <div>
              <input className="input" type="text" placeholder="username" />
            </div>
            <div>
              <input className="input" type="text" placeholder="relation" />
            </div>
            <div>
              <input className="input" type="Tel" placeholder="tel" />
            </div>
            <button className="btn btn-primary ">Add Contact</button>
          </form>
        </div>
        <div className="down">
          <div className="cards">
            <div className="card">
              <h4 className="">{obj.title}</h4>
              <p className="text">friend</p>
              <a href="tel:+998903236806" className="tel">
                {obj.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
