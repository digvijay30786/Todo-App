import Todolist from "./toDolist";
import Complete1 from "./complete";
import "./items.css";
export default function Todoitem({ addlistitem, seletitem, complete }) {
  return (
    <>
      <h2>Not Completed Todo List</h2>
      {addlistitem.map((e, index) => (
        <Todolist key={index} id={index} item={e} finalValue={seletitem} />
      ))}
      <h2>Completed Todo List</h2>
      {complete.map((e, index) => (
        <Complete1 key={index} item={e} />
      ))}
    </>
  );
}
