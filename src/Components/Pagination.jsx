import React, { useState } from 'react'

function Pagination({setTab,items}) {

    let [num,setNum]=useState(1)

    let [curr,setCurr]=useState(1)

    const pages=[...items]

    const handleCurrentPage=(pg)=>{
        setCurr(pg)
        console.log(pg)
        setTab(pg)
    }
  return (
    <div >
        <ol  className="flex justify-center gap-1 text-xs font-medium">
                 
                {pages.map((pg,i)=>{return(
                    <li key={i}>
                    <button
                    onClick={()=>handleCurrentPage(pg.id)}
                    to={`${pg.id}`}
                    className={`flex  justify-center items-center size-10 rounded text-[18px]   font-bold border border-blue-600     ${curr===pg.id?'text-white bg-blue-400':' bg-white text-blue-900'} `}
                    >
                    {pg.id}
                    </button>
                </li>
                )})}
        </ol>

    </div>
  )
}

export default Pagination