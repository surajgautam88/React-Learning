import React from "react";
import delImg from '../assets/del.png';

function Todo() {
  return (
    <div className="w-full h-[10vh]  flex justify-center  ">
      <div className=" manageContainer w-[55%] h-full flex bg-gray-200 rounded-2xl   ">

        <div className=" left-side w-[80%]  flex items-center gap-2 pl-5 ">
          <div className="  ">
            <input type="checkbox" name="" id="" />
            <input type="text" hidden />
            <span className=" pl-2 pr-2 ">"learn React "</span>
          </div>
        </div>

        <div className=" right-side w-[20%] bg-amber-200 flex ">
            <button className=" bg-red-500 text-white h-[60%] rounded p-1" ><img src="../assets/del.png" alt="" /></button>
            <button className=" bg-gray-900 text-white h-[60%] rounded p-1">Delete</button>


        </div>
      </div>
    </div>
  );
}

export default Todo;
