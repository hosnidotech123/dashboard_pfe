import React, { useState } from 'react'
import Pagination from './Pagination'
import NotifTable from './NotifTable'


function Notifications() {
  
  
  const [tab,setTab]=useState(1)

  const boards = [
    {
      id: 1,
      content: (
        <NotifTable backgroundColor="bg-gradient-to-r  from-myskyblue to-blue-700"/>
      )
    },
    {
      id: 2,
      content: (
        <NotifTable backgroundColor="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
      )
    },
    {
      id: 3,
      content: (
        <NotifTable backgroundColor="bg-gradient-to-r  from-mypurple to-myblue"/>
      )
    }
  ]

  return (
  <div className='mt-[16px]'>
    
    <div className='mb-[40px]'>
      <Pagination setTab={setTab} items={boards}/>
    </div>
    {boards.map((item,index)=>{return(
      <div className={`${item.id===tab?"":"hidden"}`} key={index}>
        {item.content}
      </div>
    )})}
  </div>
   
  )
}

export default Notifications