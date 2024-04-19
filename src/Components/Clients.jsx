import React ,{useState}from 'react'
import Pagination from './Pagination'

import Table from "./Table"


function Clients() {


  const boards = [
    {
      id: 1,
      content: (
        <Table backgroundColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
      )
    },
    {
      id: 2,
      content: (
        <Table backgroundColor="bg-gradient-to-r  from-myskyblue to-blue-700"/>
      )
    },
    {
      id: 3,
      content: (
        <Table backgroundColor="bg-gradient-to-r  from-mypurple to-myblue"/>
      )
    }
  ]



  let [num, setNum] = useState(1)

  let [curr, setCurr] = useState(1)

  const pages = [...boards]

  const handleCurrentPage = (pg) => {
    setCurr(pg)
    console.log(pg)
  }


  return (



    <div className="overflow-x-auto mt-[16px]  rounded-[10px] ">
      <div className='mb-[40px]'>
        <div >
          <ol className="flex justify-center gap-1 text-xs font-medium">

            {pages.map((pg, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={() => handleCurrentPage(pg.id)}
                    to={`${pg.id}`}
                    className={`flex  justify-center items-center size-10 rounded text-[18px]   font-bold border border-blue-600     ${curr === pg.id ? 'text-white bg-blue-400' : ' bg-white text-blue-900'} `}
                  >
                    {pg.id}
                  </button>
                </li>
              )
            })}
          </ol>

        </div>
      </div>
      {boards.map((item,index)=>{
        return(
          <div key={index} className={`${curr===item.id?"":"hidden"}`}>
          {item.content}
          </ div>
        )
      })}
        





    </div>

  )
}

export default Clients

