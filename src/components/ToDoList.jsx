import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoList = () => {
  return (
    <section className="flex flex-col items-center justify-center m-[5rem]">
      <h1 className="text-[#6C63FF] text-[3rem] font-[600] m-4">
        TO DO LIST
      </h1>
      <ToDoCard />
    </section>
  );
};

export default ToDoList;
