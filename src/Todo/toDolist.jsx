import "./list.css";
export default function Todolist({ item, finalValue, id }) {
  return (
    <div>
      <h3
        onClick={() => {
          finalValue(id);
        }}
      >
        {item.title}
      </h3>
    </div>
  );
}
