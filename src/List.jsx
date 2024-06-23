import { ListItem } from './ListItem'

export function List({ todos, onToggle, onDelete }) {
    return (
      <ul>
            <ListItem todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </ul>
    );
}