import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "../store/listSlice.js";

const CardForm = ({ index }) => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.list.listProducts);
    const inputRef = useRef('');

    useEffect(() => {
        inputRef.current.value = list[index].data
    },[list])

  const updateItem = () => {
    dispatch(
      listActions.replaceToList({
        index,
        data: { data: inputRef.current.value },
      })
    );
    inputRef.current.value = '';
  };

  return (
    <div className="sm:m-4 mx-4 flex items-center">
      <input
        ref={inputRef}
        className=" outline-none border-[2px] border-[#adadad] focus:border-[#6C63FF] p-2 w-[85%] text-[1.15rem] rounded-xl sm:m-4 mx-4 shadow-lg text-slate-400"
        type="text"
        placeholder="Edit To Do here ..."
      />
      <button
        className="text-[#fff] bg-[#bdbaff] hover:bg-[#6C63FF] sm:px-8 px-4 py-2 sm:h-[3rem] rounded-xl hover:shadow-[0_0_8px_#6C63FF] transition-all hover:-translate-y-2 hover:scale-110 duration-300"
        onClick={() => updateItem()}
      >
        SAVE
      </button>
    </div>
  );
};

export default CardForm;
