import React from 'react'

function Navbar() {
  return (
    <div>

<nav
  className="relative flex mt-4 w-full flex-wrap items-center justify-between bg-neutral-300 py-2 text-neutral-500 shadow-xl shadow-gray-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div>
      <a
        className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#">
        <img
          className="mr-2 "
          src=".\ongc_logo.png"
          style={{height: "80px"}}
          alt=""
          loading="lazy" />
        <span className="text-3xl font-bold dark:text-neutral-200 ">Environment Day Quiz</span>
      </a>
    </div>
    <div className="flex mt-2">
      <img src=".\nav_bg.jpg"
      style={{height: "100px", width:"51vw"}}
      />
    </div>
    <div className="flex-column">
    <div className="flex">
        <div className="text-xl font-bold dark:text-neutral-400 items-center mr-2">Candidate Name:</div><div className="text-xl dark:text-neutral-200 items-center">Simardeep Kaur</div>
    </div>
    <div className="flex">
        <div className="text-xl font-bold dark:text-neutral-200 items-center mr-2">CFI ID:</div><div className="text-xl dark:text-neutral-200 items-center">XYZ-123</div>
    </div>
    <div className="flex">
        <div className="text-xl font-bold dark:text-neutral-200 items-center mr-2">Remaining Time:</div><div className="text-xl dark:text-neutral-200 items-center" id="timer"></div>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
