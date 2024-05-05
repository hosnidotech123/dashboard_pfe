import React,{useState,useEffect} from 'react'
import SideBar from './Components/SideBar'

import "./App.css"

import Main from './Components/Main'

import { addDonestatistics, addPendingstatistics } from './features/statisticsSlice';
import { useAppDispatch } from './features/store';

import {Claim} from "./model/Claim.model"

import axios from 'axios';





function App() {

  const [claims, setClaims] = useState<Claim[]>([])

  let dispatch=useAppDispatch()



  let done: number = 0
  let pending: number = 0

  for (let claim of claims) {
    if (claim.status === "done") {
      done = done + 1
    }
    else {
      pending = pending + 1
    }
  }


  dispatch(addDonestatistics({d:done}))
  dispatch(addPendingstatistics({p:pending}))



  function getClaims(): void {
    axios.get(`http://localhost:3000/claims`)
      .then((response) => {
        setClaims(response.data)




      })
      .catch((err) => {
        console.log(err)
      }
      )

  }


  useEffect(() => {
    

    getClaims()





  }, [])

  return (
    <div className='App'>
      <SideBar/>
      <Main/>


    </div>
  )
}

export default App