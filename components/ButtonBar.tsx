import { BsInfoCircle } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlinePlus } from "react-icons/hi";
import { IoCalendarClearOutline, IoNotificationsOutline } from "react-icons/io5";

interface ButtonBarProps{
  setAddTaskModal: ()=> any;
}

const ButtonBar:React.FC<ButtonBarProps> = ({setAddTaskModal}) => {
 return ( 
  <>
   <div className="w-96 z-40 bg-white rounded-3xl mx-auto flex justify-around items-center py-2 fixed bottom-0 ">
    <div className=" cursor-pointer rounded-full hover:bg-slate-200 transition-all ease-in-out duration-200 p-2 flex justify-center items-center " ><IoNotificationsOutline className="w-6 h-6 text-orange-600"/></div>
    <div className=" cursor-pointer rounded-full hover:bg-slate-200 transition-all ease-in-out duration-200 p-2 flex justify-center items-center " ><IoCalendarClearOutline className="w-6 h-6 text-orange-600"/></div>
    <button onClick={()=>setAddTaskModal(true)} className=" p-4 absolute -top-7 rounded-full bg-orange-500 flex justify-center items-center " ><HiOutlinePlus className="w-6 h-6 text-white" /></button>
    <div className=" cursor-pointer rounded-full hover:bg-slate-200 transition-all ease-in-out duration-200 p-2 flex justify-center items-center " ><GrAppsRounded className="w-6 h-6 text-orange-600" /></div>
    <div className=" cursor-pointer rounded-full hover:bg-slate-200 transition-all ease-in-out duration-200 p-2 flex justify-center items-center " ><BsInfoCircle className="w-6 h-6 text-orange-600"/></div>
   </div>
  </>
  );
}
 
export default ButtonBar;