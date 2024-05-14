"use client"

//React Hooks
import { useState } from "react";
//Components
import AccordionTasks from "@/components/AccordionTasks";
import Spiner from "@/components/Spiner";
import NavBar from "@/components/NavBar";
import Calender from "@/components/Calender";
import ButtonBar from "@/components/ButtonBar";
import SearchBox from "@/components/SearchBox";
import Modal from "@/components/Modal";
//Query
import { useGetTasksQuery } from "./Global Redux/ApiSlice";



const home = () => {

  const [addTaskModal, setAddTaskModal]: boolean = useState(false);



  const {
    data: taskArray = [],
    isLoading,
    isSuccess,
    isError
  } = useGetTasksQuery()
  useGetTasksQuery()


  let showTasks;

  if (isLoading) {
    showTasks = <Spiner />
  } else if (isSuccess) {
    showTasks = <AccordionTasks taskArray={taskArray} />
  } else if (isError) {
    showTasks = <h3>مشکلی از سمت سرور رخ داده است. </h3>
  }

  return (
    <main className="w-screen h-full overflow-hidden">
      <section className={`home_holder ${addTaskModal? 'stop_scrol' : ''} relative w-96 h-screen rounded-b-3xl overflow-x-hidden mx-auto bg-black`} >
        <div className="w-11/12 h-screen relative mx-auto" >
          <NavBar />
          <Calender />
          <SearchBox />
          {showTasks}
        </div>
        <ButtonBar setAddTaskModal={setAddTaskModal} />
      </section>
      <Modal addTaskModal={addTaskModal} setAddTaskModal={setAddTaskModal} />
    </main>
  );
}
export default home;
