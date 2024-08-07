import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoHelpCircleSharp } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";
import { MdOutlineReport } from "react-icons/md";


import { FaChartLine } from "react-icons/fa";
import { useAppSelector } from '../features/store';




export default function Sidebar() {

  const navigate = useNavigate()

  let currentpage = window.location.pathname

  let user=useAppSelector(state=>state.user.user)


  useEffect(() => {
    // console.log(currentpage)
  }, [currentpage])

  return (
    <div className="sidebar">
      <div className="head">
        <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 504.127 504.127" xmlSpace="preserve">
          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1.5226" y1="624.2366" x2="-35.5594" y2="586.1046" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0403 4969.6519)">
            <stop offset="0.012" style={{ stopColor: '#E0B386' }} />
            <stop offset="0.519" style={{ stopColor: '#DA498C' }} />
            <stop offset="1" style={{ stopColor: '#961484' }} />
          </linearGradient>
          <path style={{ fill: 'url(#SVGID_1_)' }} d="M308.399,104.438c48.341-48.349,121.36-56.927,178.507-20.797
                    c-6.743-12.383-15.321-24.04-25.805-34.517c-58.825-58.833-154.199-58.833-213.024,0c-58.833,58.825-58.817,154.199,0,213.024
                    c10.476,10.476,22.126,19.062,34.517,25.797C251.481,225.814,260.051,152.779,308.399,104.438z" />
          <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="9.5784" y1="603.7798" x2="-1.6616" y2="631.3138" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0403 4969.6519)">
            <stop offset="0" style={{ stopColor: '#29D3DA' }} />
            <stop offset="0.519" style={{ stopColor: '#0077FF' }} />
            <stop offset="0.999" style={{ stopColor: '#064093' }} />
            <stop offset="1" style={{ stopColor: '#084698' }} />
          </linearGradient>
          <path style={{ fill: 'url(#SVGID_2_)' }} d="M429.31,142.507c26.002,26.002,30.625,65.284,13.887,96.02
                    c6.656-3.639,12.942-8.247,18.566-13.887c31.642-31.642,31.626-82.928,0-114.578c-31.657-31.642-82.936-31.642-114.578-0.008
                    c-5.632,5.64-10.256,11.91-13.879,18.566C364.05,111.898,403.308,116.506,429.31,142.507z" />
          <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.9007" y1="566.5469" x2="-18.1537" y2="587.043" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0403 4969.6519)">
            <stop offset="0.012" style={{ stopColor: '#E0B386' }} />
            <stop offset="0.519" style={{ stopColor: '#DA498C' }} />
            <stop offset="1" style={{ stopColor: '#961484' }} />
          </linearGradient>
          <path style={{ fill: 'url(#SVGID_3_)' }} d="M195.728,399.681C147.379,448.03,74.36,456.608,17.221,425.486
                    c6.743,12.383,15.328,24.04,25.797,34.517c58.833,58.833,154.207,58.833,213.031,0c58.825-58.825,58.825-154.191,0-213.023
                    c-10.476-10.468-22.134-19.054-34.517-25.797C252.646,278.305,244.076,351.34,195.728,399.681z" />
          <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="-38.0094" y1="594.0433" x2="-26.7684" y2="566.5123" gradientTransform="matrix(7.8769 0 0 -7.8769 364.0403 4969.6519)">
            <stop offset="0" style={{ stopColor: '#29D3DA' }} />
            <stop offset="0.519" style={{ stopColor: '#0077FF' }} />
            <stop offset="0.999" style={{ stopColor: '#064093' }} />
            <stop offset="1" style={{ stopColor: '#084698' }} />
          </linearGradient>
          <path style={{ fill: 'url(#SVGID_4_)' }} d="M74.809,361.62c-26.01-26.01-30.61-65.284-13.871-96.02
                    c-6.664,3.631-12.95,8.247-18.574,13.879c-31.642,31.634-31.634,82.936,0.008,114.578c31.642,31.634,82.928,31.634,114.57,0
                    c5.64-5.64,10.256-11.91,13.879-18.566C140.077,392.229,100.811,387.614,74.809,361.62z" />
        </svg>

        <h2 className='font-bold'>ogertel</h2>
      </div>
      <hr style={{ margin: '30px 0px' }} />
      <ul>
        <li className={`${user.roles.includes("admin")?"":"hidden"}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/')} className={`${currentpage === "/" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <IoHomeSharp style={{ margin: "5px" }} />
          Home
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"":"hidden"}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/clients')} className={`${currentpage === "/clients" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <IoPeopleSharp style={{ margin: "5px" }} />
          Clients
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"":"hidden"}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/claims')} className={`${currentpage === "/claims" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <TiWarning style={{ margin: "5px" }} />
          Réclamations
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"":"hidden"}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/notifications')} className={`${currentpage === "/notifications" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <IoNotificationsSharp style={{ margin: "5px" }} />
          Notifications
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"":"hidden"}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/statistics')} className={`${currentpage === "/statistics" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <FaChartLine style={{ margin: "5px" }} />
          Statistiques
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"hidden":""}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/')} className={`${currentpage === "/" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <IoNotificationsSharp style={{ margin: "5px" }} />
          Réclamations
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"hidden":""}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/sendclaim')} className={`${currentpage === "/sendclaim" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <MdOutlineReport style={{ margin: "5px" }} />
          Report
        </button>
        </li>

        <li className={`${user.roles.includes("admin")?"hidden":""}`}><button style={{ display: "flex", alignItems: "center", marginLeft: "10px" }} onClick={() => navigate('/mynotifications')} className={`${currentpage === "/mynotifications" ? "text-pink-300" : "text-white"} text-[20px]   font-bold w-[100%]`}>
          <IoNotificationsSharp style={{ margin: "5px" }} />
           Notifications 
        </button>
        </li>

        

      </ul>

    </div>

  )
}

