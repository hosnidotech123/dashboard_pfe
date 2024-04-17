import React, { useState } from 'react'

function Pagination() {

    let [num,setNum]=useState(1)

    let [curr,setCurr]=useState(1)

    const pages=[
        {
            page:num
        },
        {
            page:num+1
        },
        {
            page:num+2
        },
        {
            page:num+3
        },
    ]

    const handleCurrentPage=(pg)=>{
        setCurr(pg)
    }
  return (
    <div >
        
        <ol className="flex justify-center gap-1 text-xs font-medium">
                {pages.map((pg,i)=>{return(
                    <li key={i}>
                    <a
                    onClick={()=>handleCurrentPage(pg.page)}
                    href="#"
                    className={`flex  justify-center items-center size-10 rounded text-[18px]   font-bold border border-blue-600 bg-white   text-blue-900 ${curr===pg.page && 'text-white bg-blue-400'} `}
                    >
                    {pg.page}
                    </a>
                </li>
                )})}
        </ol>

    </div>
  )
}

export default Pagination