import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const addNew = () => {
    if (title !== "") {
      addTodo(title);
      setTitle("");
    } else {
      alert("Please enter todo title");
    }
  };

  return (
    <>
      <input
        className="todoInput"
        type="text"
        placeholder="Todo title"
        name="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <input type='date' /> */}
      <button className="btn addButton" onClick={addNew}>
        Add
      </button>
      <br />
    </>
  );
};

export default AddTodo;
