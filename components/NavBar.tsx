
const NavBar = () => {
 return (
  <>
   <div className="w-full flex justify-between items-center my-6">
    <div className="flex flex-col gap-2">
     <img
      className=" w-16 h-16 rounded-full object-cover"
      src="https://www.alucoildesign.com/assets/pages/media/profile/profile_user.jpg"
      alt=""
     />
     <span className="text-xs" >good morning mr.Amir</span>
    </div>
    <div className="flex justify-center gap-1">
     <span className="lg:tooltip w-4 h-4 rounded-full bg-green-800" data-tip="personal" ></span>
     <span className="lg:tooltip w-4 h-4 rounded-full bg-orange-800" data-tip="personal" ></span>
     <span className="tooltip tooltip-left w-4 h-4 rounded-full bg-blue-800" data-tip="personal" ></span>
    </div>
   </div>
  </>
 );
}

export default NavBar;