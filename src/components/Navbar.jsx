import React from "react";
import { BrainCircuit } from 'lucide-react';
const Navbar = () => {
  return (
    <>
       <div className="nav flex items-center justify-between px-[150px] h-[90px] bg-zinc-900 ">
        <div classname="logo">
        <BrainCircuit />
        </div>
      </div>
    </>
    
  );
};

export default Navbar;