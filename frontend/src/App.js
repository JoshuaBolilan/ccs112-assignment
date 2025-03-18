import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div className="container">
      <h1>Task List</h1>
      
      {/* Table Layout for Better Labeling */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td className={task.completed ? "completed" : "pending"}>
                {task.completed ? "Completed" : "Pending"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
