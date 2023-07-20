import React from 'react'
import "./helpus.css"
import { helpus } from '../Data'


function Helpus() {
    const listItems = helpus.map(detail =>
        <div className='container_cards'>
        <div class="card max-w-sm rounded overflow-hidden shadow-lg">
            <div className='number'>{detail.number}</div>
            <img src={detail.image} style={{marginTop:"1rem",marginLeft:"1rem"}}/>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{detail.heading}</div>
            <p class="text-gray-700 text-base">
            {detail.description}
            </p>
        </div>
        </div>
        </div>
      );
  return (
    <div className='helpus_container'>
    <h1 className='helpus_heading'>نحن هنا <span style={{color: "#37ABDE"}}>لمساعدتك</span></h1>
    <p className='helpus_description'>تعرف علي خطوات العمل علي اي مشروع</p>
    {/* <div className='circle-container'>
        <div className='circle'>
            <div className='child-circle'></div>
        </div>
    </div> */}
    <div className='grid grid-cols-3 gap-y-8 mt-8'>
        {listItems}
    </div>
    </div>
  )
}

export default Helpus