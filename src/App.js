import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [checkList, setcheckList] = useState([]);

  function changeText(e) {
    setText(e.target.value);
  }

  function addToDo() {
    setTask([...task,{text:text,isChecked:false}]);
    setcheckList([...checkList, false]);
    setText("");
  }

  function checked(e, index) {
    let list = task;

    list[index].isChecked = !list[index].isChecked;
    setTask([...list]);
    console.log(list);

  }

  return (
    <div className="App">
      <h1>To-do List App</h1>
      <input
        type="text"
        onChange={(e) => changeText(e)}
        className="input"
        value={text}
        placeholder="Enter your task to be done"
      ></input>
      <button onClick={addToDo} className="click">
        Add
      </button>
      <div className="container">
        {task.map((item, index) => {
          return (
            <div className={task[index].isChecked ? "done" : "tobedone"}>
              <div>
                <input
                  type="checkbox"
                  className="checkBox"
                  value={task[index].isChecked}
                  checked={task[index].isChecked}
                  onChange={(e) => checked(e, index)}
                  
                ></input>
              </div>
              <div className={task[index].isChecked ? "checked" : "unchecked"}>
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
