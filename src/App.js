import { useState } from "react";
import Dell from "./Dell.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [phone, setPhone] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Abdulloh",
      text: "Friend",
      number: "   +998903236806",
    },
  ]);
  const addContanct = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random().toString(),
      title: name,
      text: relation,
      number: phone,
    };
    setTodo([...todo, newTodo]);
    setName("");
    setRelation("");
    setPhone("");
  };
  const deleteTodoHandler = (id) => {
    const result = todo.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodo(result);
  };
  return (
    <div className="App container">
      <div className="wrapper">
        <div className="top">
          <h2 className="nameItem">New contact add</h2>
          <form className="form">
            <div>
              <input
                className="input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                placeholder="username"
              />
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  setRelation(e.target.value);
                }}
                value={relation}
                type="text"
                placeholder="relation"
              />
            </div>
            <div>
              <input
                className="input"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
                type="number"
                placeholder="tel"
              />
            </div>
            <button onClick={addContanct} className="btn btn-primary ">
              Add Contact
            </button>
          </form>
        </div>
        <div className="down">
          <div className="cards">
            {todo.map((item) => {
              return (
                <div className="card">
                  <h4 className="">{item.title}</h4>
                  <p className="text">{item.text}</p>
                  <a href="tel:+998903236806" className="tel">
                    {item.number}
                  </a>
                  <br />
                  <a href="#" onClick={() => deleteTodoHandler(item.id)}>
                    <img src={Dell} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
