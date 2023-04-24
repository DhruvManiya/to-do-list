import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { listActions } from "../store/listSlice.js";

const Form = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(listActions.addToList({data : inputRef.current.value}));
    inputRef.current.value = '';
  };

  return (
    <section className="flex flex-col items-center justify-center sm:m-[5rem] m-[1rem]">
      <h1 className="text-[#6C63FF] sm:text-[3rem] text-[1.75rem] sm:font-[600] font-[500] m-4">
        ADD YOUR TO DO LIST !!
      </h1>
      <input
        ref={inputRef}
        className=" outline-none border-[3px] border-[#adadad] focus:border-[#6C63FF] p-2 2xl:w-[55%] xl:w-[70%] lg:w-[85%] w-[94%] text-[1.25rem] rounded-xl m-4 shadow-lg text-slate-400"
        type="text"
        placeholder="Write yore next To Do"
      />
      <button
        className="text-[#fff] bg-[#bdbaff] hover:bg-[#6C63FF] py-3 px-8 my-2 rounded-xl hover:shadow-[0_0_8px_#6C63FF] transition-all hover:-translate-y-2 hover:scale-110 duration-300"
        onClick={() => addItem()}
      >
        ADD
      </button>
    </section>
  );
};

export default Form;
