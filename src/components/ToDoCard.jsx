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
      className={`w-[55%] min-h-[8rem] ${
        !checked
          ? "bg-[#e9e8ff] border-[#a9a4ff]"
          : "bg-[#e7e7e7] border-[#838383]"
      } border-2 border-[#a9a4ff] rounded-xl shadow-lg flex justify-center items-center my-4`}
    >
      <div className="w-[10%] flex justify-center">
        <input
          type="checkbox"
          className="h-5 w-5"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <div className="w-[70%]">
        {edit && !checked && <CardForm index={index} />}
        {checked ? (
          <del
            className={`italic text-[2rem] font-500 ${
              !checked ? "text-[#a9a4ff]" : "text-[#a8a8a8]"
            }`}
          >
            {item.data}
          </del>
        ) : (
          <>
            <p className="text-[2.25rem] font-700 text-[#a9a4ff] m-2">
              {item.data}
            </p>
          </>
        )}
      </div>
      <div className="w-[20%] flex justify-center gap-4">
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
