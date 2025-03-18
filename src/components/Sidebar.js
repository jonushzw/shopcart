import React, { useContext } from "react";
import { SideBarContext } from "../contexts/SideBarContext";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => { 
    const { sideBar, handleClose } = useContext(SideBarContext);
    return (
        <div className={`fixed top-0 h-full shadow-2xl bg-white z-20 px-4 lg:px-[35px] transition-transform duration-300 ${sideBar ? 'translate-x-0' : 'translate-x-full'} w-full md:w-[35vw] xl:max-w-[30vw]`}>
            <button onClick={handleClose} className="absolute top-4 right-4">
                <IoMdArrowForward className="text-4xl" />
            </button>
            <div>
                <div className="flex items-center justify-between py-6 border-b border-gray-200">
                    <div className="text-lg font-semibold uppercase">Shopping Bag (0)</div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;