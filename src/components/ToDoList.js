import React, { useState } from "react";
import ListItem from "./ListItem";
import ListForm from "./ListForm";

function ToDoList() {
  const [tasks, setTasks] = useState(["Dishes", "Laundry", "Other stuff"]);

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className={"list-container"}>
      <ListForm onAddTask={addTask} />
      <div className={"list-items-container"}>
        {tasks.map((task, index) => (
          <ListItem key={index} task={task} onRemove={removeTask} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
