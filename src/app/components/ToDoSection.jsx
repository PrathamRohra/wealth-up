"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import TaskCard from "./TaskCard";

export default function ToDoSection() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Task 1", done: false },
    { id: 2, task: "Task 2", done: false },
    { id: 3, task: "Task 3", done: false },
  ]);
  const [addTask, setAddTask] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addTask) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, task: addTask, done: false },
      ]);
    }
    setAddTask("");
  };
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((task) => task.id !== id));
  };
  const handleToggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };
  return (
    <div className="p-20 w-full min-h-screen mt-10">
      <h1 className="font-bold text-5xl">WEALTHUP TO DO LIST</h1>

      <div className="flex space-x-4">
        <form className="mt-20" onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <input
              value={addTask}
              onChange={(e) => {
                setAddTask(e.target.value);
              }}
              placeholder="Add Task"
              className="active:outline-none focus:outline-none bg-white/10 h-10 p-2 rounded-md text-xs w-80"
            />
            <button type="submit">Add Task</button>
          </div>
        </form>

        <form className="mt-20">
          <div className="flex space-x-2">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              placeholder="Search Task"
              className="active:outline-none focus:outline-none bg-white/10 h-10 p-2 rounded-md text-xs w-80"
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>

      <div className="mt-10 flex flex-col space-y-4 h-10">
        {!searchTerm &&
          todos.map((task) => (
            <div className="flex flex-col space-y-8" key={task.id}>
              <TaskCard
                taskName={task.task}
                task={task}
                handleDelete={handleDelete}
                handleToggleDone={handleToggleDone}
              />
            </div>
          ))}
        {searchTerm &&
          todos
            .filter((task) => task.task.includes(searchTerm))
            .map((task) => (
              <div className="flex flex-col space-y-8" key={task.id}>
                <TaskCard
                  taskName={task.task}
                  task={task}
                  handleDelete={handleDelete}
                  handleToggleDone={handleToggleDone}
                />
              </div>
            ))}
      </div>
    </div>
  );
}
