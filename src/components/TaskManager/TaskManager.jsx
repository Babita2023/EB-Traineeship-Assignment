import React, { useState, useEffect } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!input.trim()) {
      setMessage("⚠️ Please enter a task.");
      return;
    }

    const newTask = {
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
    setMessage("✅ Task added successfully!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setMessage("🗑️ Task deleted!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleToggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <section className="w-full">
      <div className="bg-[#F1F0FF] px-4 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-2">
            Task Manager
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Your daily to-do list
          </p>

          {message && (
            <div className="mb-6 text-sm text-blue-600">{message}</div>
          )}

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-7 w-full max-w-2xl mx-auto">
            {/* Task List */}
            <ul className="space-y-4 text-left">
              {tasks.length === 0 ? (
                <li className="text-gray-500 italic">No tasks added yet.</li>
              ) : (
                tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between rounded-lg px-4 py-2 bg-gray-50"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-5 w-5 text-purple-600"
                        checked={task.completed}
                        onChange={() => handleToggleComplete(index)}
                      />
                      <span
                        className={`text-sm ${
                          task.completed
                            ? "text-gray-400 line-through"
                            : "text-gray-800"
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      ❌ Delete
                    </button>
                  </li>
                ))
              )}
            </ul>

            {/* Input Area */}
            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Add new task"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                onClick={handleAddTask}
                className="w-1/4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TaskManager;
