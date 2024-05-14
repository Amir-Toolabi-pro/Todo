'use client'

import React, { useState } from "react";
import { taskFace } from "../app/models";
import { GoStarFill } from "react-icons/go";
import { RiDeleteBinFill, RiEditBoxFill } from "react-icons/ri";
import { useDeleteTaskMutation } from "@/app/Global Redux/ApiSlice";


interface accordionProps {
 taskArray:taskFace[];
}

const AccordionTasks: React.FC<accordionProps> = ({taskArray}) => {

 const [deleteTask] = useDeleteTaskMutation()




 const taskUi = taskArray.map((accordion: taskFace, i: any) => (
  <li className="w-full h-14 flex justify-between items-center bg-slate-600 rounded-md px-2 hover:scale-105 transition-all ease-in-out duration-200 " key={accordion.id} >
   <div>
    <p className="text" >{accordion.title}</p>
    <span>time is here</span>
   </div>
   <div className="flex gap-1 ">
   <GoStarFill className="w-4 cursor-pointer" />
   <RiEditBoxFill className="w-4 cursor-pointer" />
   <RiDeleteBinFill onClick={async()=>await deleteTask(accordion.id)} className="w-4 cursor-pointer" />
   </div>
  </li>
 ))

 return (
  <>
   <section className='w-full pb-16'>
    <h3 className='text-textDark text-sm font-bold'>All Tasks</h3>
    <ul className="w-full mt-2 mx-auto flex flex-col justify-center items-center gap-1">
     {taskUi}
    </ul>
   </section>
  </>
 )
}

export default AccordionTasks;