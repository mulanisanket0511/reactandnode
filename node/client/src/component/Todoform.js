import React, { useState } from "react";

const Todoform = () => {
  const [input, setInput] = useState("");
  
  const handleclick = (e, input) => {
    e.preventDefault();
    console.log(input)
  };
  return (
    <div>
      <form className="todo-form text-center">
        <input
          className="input-todo"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="add a todo"
          name="text"
        />
        <button
          className="todo-button"
          type="submit"
          onClick={(e) => handleclick(e, input)}
        >
          add todo
        </button>
      </form>
    </div>
  );
};

export default Todoform;
