"use client";
import React from "react";

export default function TaskCard({ taskName, task, handleDelete, handleToggleDone }) {
  console.log(task);
  return (
    <>
      {task.done && (
        <div className="flex space-x-3 items-center">
          <p className="text-green-500">{taskName}</p>
          <button
            className="bg-white/10 p-2 rounded-md"
            onClick={() => {
              handleToggleDone(task.id)
            }}
          >
            Toggle Done
          </button>
          <button
            className="bg-white/10 p-2 rounded-md"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
      {!task.done && (
        <div className="flex space-x-3 items-center">
          <p>{taskName}</p>
          <button
            className="bg-white/10 p-2 rounded-md"
            onClick={() => {
                handleToggleDone(task.id)
              }}
          >
            Toggle Done
          </button>
          <button
            className="bg-white/10 p-2 rounded-md"
            onClick={() => {
              handleDelete(task.id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
