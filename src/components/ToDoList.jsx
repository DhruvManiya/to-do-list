import React from "react";
import ToDoCard from "./ToDoCard";
import { useSelector } from "react-redux";

const ToDoList = () => {
  const list = useSelector((state) => state.list.listProducts);
  console.log(list);
  return (
    <section className="flex flex-col items-center justify-center m-[5rem]">
      <h1 className="text-[#6C63FF] text-[3rem] font-[600] m-4">TO DO LIST</h1>
      {list.length === 0 ? (
        <h1 className="text-[#6C63FF] text-[1.5rem] font-[400] m-4">
          Add your first TO DO
        </h1>
      ) : (
        list.map((item, index) => <ToDoCard item={item} index={index} />)
      )}
    </section>
  );
};

export default ToDoList;
