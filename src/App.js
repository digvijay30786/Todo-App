import { useState } from "react";
import "./styles.css";
import Doinput from "/src/Todo/toDoInput.jsx";
import Todoitem from "/src/Todo/toDoitems.jsx";
export default function App() {
  const [todo, setTodo] = useState([]);
  const [comp, setComp] = useState([]);
  const handleTodo = (item) => {
    setTodo([...todo, item]);
  };
  const as = (id) => {
    setTodo((todo) => {
      return todo.filter((arr, i) => {
        if (i !== id) {
          return arr;
        } else {
          arr.status = true;
          setComp([...comp, arr]);
        }
      });
    });
  };
  console.log(comp);
  return (
    <div className="App">
      <Doinput addTodos={handleTodo} />
      <Todoitem addlistitem={todo} seletitem={as} complete={comp} />
    </div>
  );
}
