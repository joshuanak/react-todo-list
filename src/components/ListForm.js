import { useState } from "react";

function ListForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className={"list-form-container"}>
      <h2>Add New Tasks</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default ListForm;
