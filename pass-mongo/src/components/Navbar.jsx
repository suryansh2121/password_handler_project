import React from 'react'
const Navbar = () => {
  return (
    <nav className='bg-violet-900 text-white fixed z w-full'>
      <div className="myconatiner  flex justify-between items-center px-4 h-16 py-5 ">
        <div className="logo font-bold text-white text-2xl ">
          <span className='text-green-800'><sup>**</sup></span>Pass
          <span className='text-violet-500'>
            Handle
          </span>
          <span className='text-green-800'><sup>**</sup></span>
        </div>
        <button >
        </button>
        <button className=" hover:bg-slate-800 hover:text-white flex justify-between items-center rounded-2xl my-5 gap-2 text-green-800 font-bold px-1 py-1">
          <img className="invert p-1 w-10 " src="/icons/github.svg" alt="git logo" />
          <span className="-ml-1 -pl-1">Github</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
