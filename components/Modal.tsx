// 'use client'

import { useAddTaskMutation } from "@/app/Global Redux/ApiSlice";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface modalProps {
  setAddTaskModal: () => any;
  addTaskModal: boolean;
}

const Modal: React.FC<modalProps> = ({ addTaskModal, setAddTaskModal }) => {

  const [getTitleTask, setGetTitleTask]: string = useState("")
  const [selectCategori, setSelectCategori]: string = useState(null);
  const [currentTask, { isLoading }]: any = useAddTaskMutation()

  const canSave = [getTitleTask, selectCategori].every(Boolean) && !isLoading;



  const handleGetTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canSave) {
      try {
        await currentTask({
          id: uuidv4(),
          title: getTitleTask,
          categori: selectCategori
        }).unwarp()
        setGetTitleTask("");
        setSelectCategori("")
        setAddTaskModal(false)
      } catch (err) {
        console.log(err);

      }
    }

  }

  return (
    <>
      <dialog className={`modal w-96 mx-auto rounded-b-3xl ${addTaskModal ? "modal-open" : ""}`}>
        <div className="modal-box w-full">
          <button onClick={() => setAddTaskModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="my-4">Add Your Task</h3>
          <form onSubmit={handleGetTask} className="" method="dialog">
            <input value={getTitleTask} onChange={(e) => setGetTitleTask(e.currentTarget.value)} type="text" placeholder="set your title task" className="input input-bordered input-primary w-full max-w-xs" />
            <select
              value={selectCategori}
              onChange={(e)=>setSelectCategori(e.currentTarget.value)}
              className="select select-primary w-full max-w-xs my-3">
              <option disabled selected >Categori</option>
              <option value="personal">personal</option>
              <option value="friendly">friendly</option>
              <option value="recreational">recreational</option>
            </select>
            {/* <select className="select select-primary w-full max-w-xs">
              <option disabled selected>What is the best TV show?</option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select> */}
            <div className="w-full flex justify-center">
              <button disabled={selectCategori && getTitleTask ? false : true} type="submit" className="btn btn-outline btn-primary px-8">Add</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Modal;