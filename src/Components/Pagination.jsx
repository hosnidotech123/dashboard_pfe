import React from 'react'

function Pagination() {
  return (
    <div >
        
        <ol className="flex justify-center gap-1 text-xs font-medium">
            

            <li>
                <a
                href="#"
                className="block size-10 rounded text-[18px] font-bold border border-blue-600 bg-white text-center leading-8 text-blue-900"
                >
                1
                </a>
            </li>

            <li className="block size-10 text-[18px] font-bold rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                <a href="#">2</a>
            </li>

            <li>
                <a
                href="#"
                className="block size-10 rounded text-[18px] font-bold border border-blue-600 bg-white text-center leading-8 text-blue-900"
                >
                3
                </a>
            </li>

            <li>
                <a
                href="#"
                className="block size-10 rounded text-[18px] font-bold border border-blue-600 bg-white text-center leading-8 text-blue-900"
                >
                4
                </a>
            </li>

            
        </ol>

    </div>
  )
}

export default Pagination