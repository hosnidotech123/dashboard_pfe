import React, { useEffect, useState } from 'react'

function Pagination({ currentPage, setCurrentPage,totalPages }) {


  let pages = []


  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }


 

  



  return (
    <div >
      <ol className="flex justify-center gap-1 text-xs font-medium">
        {pages.map((pg, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => setCurrentPage(pg)}
                
                className={`flex  justify-center items-center size-10 rounded text-[18px]   font-bold border border-blue-600     ${currentPage === pg ? 'text-white bg-blue-400' : ' bg-white text-blue-900'} `}
              >
                {pg}
              </button>
            </li>
          )
        })}
      </ol>

    </div>
  )
}

export default Pagination