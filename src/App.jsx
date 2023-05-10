import { useState, useEffect } from "react";

import styles from "./todo.module.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");

  function handleChange(e) {
    const inputText = e.target.value;

    setText(inputText);
  }

  function addToDo() {
    const newTodo = {
      value: text,
      isDone: false,
    };
    setToDos([...toDos, newTodo]);
    setText("");
  }

  function removeToDo(indexToRemove) {
    const newToDos = toDos.filter(function (item, index) {
      return indexToRemove !== index;
    });

    setToDos(newToDos);
  }

  function changeToDoIsDone(indexToChange) {
    const newToDos = toDos;
    newToDos[indexToChange].isDone = true;

    setToDos([...newToDos]);
  }

  useEffect(
    function () {
      console.log(toDos);
    },
    [toDos]
  );

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={addToDo}>Adicionar</button>
      <ul>
        {toDos.map(function (todo, index) {
          return (
            <li key={todo.value}>
              <span>{todo.value}</span>
              <span>{todo.isDone ? " teste" : " A Fazer"}</span>
              <button
                onClick={function () {
                  removeToDo(index);
                }}
              >
                Excluir
              </button>
              {todo.isDone ? (
                ""
              ) : (
                <button
                  onClick={function () {
                    changeToDoIsDone(index);
                  }}
                >
                  Fazer
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
