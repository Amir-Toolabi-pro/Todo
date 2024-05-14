import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
 return (
  <>
   <div className="search_box w-full h-9 flex mb-5 mt-2 justify-start items-center gap-2 rounded-3xl bg-white text-orange-600 pl-3" >
    <div>
     <IoSearchOutline className="w-4 h-4 " />
    </div>
    <input
     className="search_input w-10/12 h-full bg-transparent mb-0.5"
     type="text"
     placeholder="Search"
    />
   </div>
  </>
 );
}

export default SearchBox;