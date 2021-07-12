import Todo from "./Todo"

const Todos = ({ todosList, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <>
      {todosList.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </>
  )
}

export default Todos
