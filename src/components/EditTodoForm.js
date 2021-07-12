import { useState } from "react"

const EditTodoForm = ({ setEditTodoTitle, editTodo, todo }) => {
  const [editedTodoText, setEditedToDoText] = useState(todo.title)

  const saveTodo = () => {
    let modifiedTodo = { ...todo, title: editedTodoText }
    editTodo(modifiedTodo)
    setEditTodoTitle(false)
  }
  return (
    <div>
      <label style={{ textAlign: "center" }}>Edit Todo</label>
      <br />
      <input
        className="todoInput"
        type="text"
        name="Todo text"
        value={editedTodoText}
        onChange={(event) => setEditedToDoText(event.target.value)}
      />
      <div>
        <button className="btn save-btn" onClick={saveTodo}>
          Save
        </button>
        <button
          onClick={() => setEditTodoTitle(false)}
          className="btn cancel-btn"
        >
          Cancel
        </button>
      </div>
      <hr />
    </div>
  )
}
export default EditTodoForm
