export function ListItem({ todos, onToggle, onDelete }) {
    return (
        <>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onToggle(todo.id, e.target.checked)}
                  />{" "}
                  {todo.name}{' '}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </>
    )
}