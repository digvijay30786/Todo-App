import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./input.css";
export default function Doinput({ addTodos }) {
  const [text, setText] = useState("");
  return (
    <div className="inp">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Enter Todo Name"
      />
      <button
        onClick={() => {
          const payloads = {
            id: uuidv4(),
            status: false,
            title: text
          };
          addTodos(payloads);
          setText("");
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
