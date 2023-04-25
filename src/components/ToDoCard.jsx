import React, { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import CardForm from "./CardForm";
import { listActions } from "../store/listSlice.js";
import { useDispatch } from "react-redux";

const ToDoCard = ({ item, index }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [edit, setEdit] = useState(false);

  const deleteItem = () => {
    dispatch(listActions.removeItem(index));
  };

  return (
    <section
      className={`2xl:w-[55%] xl:w-[70%] lg:w-[85%] w-[94%] min-h-[8rem] ${
        !checked
          ? "bg-[#e9e8ff] border-[#a9a4ff]"
          : "bg-[#e7e7e7] border-[#838383]"
      } border-2 border-[#a9a4ff] rounded-xl shadow-lg flex flex-col sm:flex-row justify-center items-center my-4`}
    >
      <div className="w-[10%] my-4 flex justify-center">
        <input
          type="checkbox"
          className="h-5 w-5"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <div className="sm:w-[70%] w-full my-4 sm:block flex flex-col justify-center items-center">
        {edit && !checked && <CardForm index={index} />}
        {checked ? (
          <div className="w-[100%] overflow-x-scroll">
            <del
              className={`italic text-[2rem] pb-2 font-500 pl-3 ${
                !checked ? "text-[#a9a4ff]" : "text-[#a8a8a8]"
              }`}
            >
              {item.data}
            </del>
          </div>
        ) : (
          <>
            <p className="text-[2.25rem] pb-2 font-700 text-[#a9a4ff] pl-3 m-2 max-w-[100%] overflow-x-scroll">
              {item.data}
            </p>
          </>
        )}
      </div>
      <div className="w-[20%] flex my-4 justify-center gap-4">
        <div
          className="text-[#2d963b93] hover:text-[#2d963b] cursor-pointer"
          onClick={() => (!checked ? setEdit(!edit) : setEdit(edit))}
        >
          <EditNoteIcon fontSize="large" />
        </div>
        <div
          className="text-[#dd3f3f5b] hover:text-[#dd3f3fa2] cursor-pointer"
          onClick={() => deleteItem()}
        >
          <DeleteIcon fontSize="large" />
        </div>
      </div>
    </section>
  );
};

export default ToDoCard;
