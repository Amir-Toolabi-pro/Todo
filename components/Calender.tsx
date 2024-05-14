
const Calender = () => {

 const date = new Date();
 let daysOfWeek: string[] = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
 const currentDayOfWeek: string = daysOfWeek[date.getDay()];
 const currentDayOfMonth: number = date.getDay();
 console.log(currentDayOfWeek);
 console.log(currentDayOfMonth);


 switch (currentDayOfWeek) {
  case 'sun':
   daysOfWeek = ['Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed']
   break;
  case 'Mon':
   daysOfWeek = ['Fri', 'Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thur']
   break;
  case 'Tues':
   daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri']
   break;
  case 'Wed':
   daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
   break;
  case 'Thur':
   daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
   break;
  case 'Fri':
   daysOfWeek = ['Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon']
   break;
  case 'Sat':
   daysOfWeek = ['Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tues']
   break;
 }

 return (
  <>
   <div className="w-full flex justify-around" >

    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-6 h-6 flex justify-center text-xs items-center rounded-full bg-slate-600 text-white" >{currentDayOfMonth}</p>
     <span className="text-white text-xs " >{daysOfWeek[0]}</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-6 h-6 flex justify-center text-xs items-center rounded-full bg-slate-600 text-white" >{currentDayOfMonth}</p>
     <span className="text-white text-xs " >{daysOfWeek[1]}</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-6 h-6 flex justify-center text-xs items-center rounded-full bg-slate-600 text-white" >{currentDayOfMonth}</p>
     <span className="text-white text-xs " >{daysOfWeek[2]}</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-8 h-8 flex justify-center text-sm items-center rounded-full font-bold bg-orange-400 text-white" >{currentDayOfMonth}</p>
     <span className="text-orange-400 text-sm font-bold" >{currentDayOfWeek}</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-6 h-6 flex justify-center text-xs items-center rounded-full bg-slate-600 text-white" >{currentDayOfMonth}</p>
     <span className="text-white text-xs " >{daysOfWeek[4]}</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-6 h-6 flex justify-center  text-xs items-center rounded-full bg-slate-600 text-white" >{currentDayOfMonth}</p>
     <span className="text-white text-xs " >{daysOfWeek[5]}</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-2">
     <p className="w-6 h-6 flex justify-center text-xs items-center rounded-full bg-slate-600 text-white" >{currentDayOfMonth}</p>
     <span className="text-white text-xs " >{daysOfWeek[6]}</span>
    </div>

   </div>
  </>
 );
}

export default Calender;