import { useState } from "react";

export function Form({ addTodos }) {
    const [newItem, setNewItem] = useState("");
 function handleAdd(e) {
   e.preventDefault();
    addTodos(newItem);
   setNewItem("");
 }

    return (
        <form onSubmit={handleAdd}>
        <div className="col-4 d-flex flex-column">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            id="item"
          />
          <button className="btn btn-info">Add Item</button>
        </div>
    </form>
    )
    
    
}