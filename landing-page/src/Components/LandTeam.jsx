import React, { useState } from 'react'
import Team from '../assets/Team.png'
import Data from '../data.json'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

const LandTeam = () => {

  const [images,setImage]=useState(Data)
  console.log(Data)
  const [filter,setFilter]= useState("all")
  const HandelJobfilter=(job) =>{
        setFilter(job)
  }
  const filteredImages =
    filter === "all"
      ? images
      : images.filter((image) => image.job === filter);

  return (
      

<div class="content w-[100%] p-0 m-0 justify-center   ">
  <div class="container-Landing">
    <div class="head">
      <h1 class="text-center pt-20 text-5xl font-bold">فريق العمل</h1>
    </div>
    <div class="header pt-8 text-center">
      <ul class="flex flex-wrap justify-center">
        <li class="p-3 rounded-lg">
          <button  onClick={() =>HandelJobfilter("Back-End")} class="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg  font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white">قواعد البيانات</button>
        </li>
        <li class="p-3 rounded-lg">
          <button onClick={() =>HandelJobfilter("Owner")} class="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white "> المدير</button>
        </li>
        <li class="p-3 rounded-lg">
          <button  onClick={() =>HandelJobfilter("UI-UX")} class="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg text-[14px] font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white">  مصمم الوجهات</button>
        </li>
        <li class="p-3 rounded-lg">
          <button onClick={() =>HandelJobfilter("Flutter")} class="border border-[#37ABDE] p-2 text-center w-40 text-[14px] bg-white text-[#9D9D9D] rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white">مطور تطبيقات الهاتف</button>
        </li>
        <li class="p-3 rounded-lg">
          <button onClick={() =>HandelJobfilter("Frontend")} class="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D] rounded-lg  font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white "> مطورالويب</button>
        </li>
        <li class="p-3 rounded-lg">
          <button onClick={() =>HandelJobfilter("all")} class="border border-[#37ABDE] p-2 text-center w-32 bg-white text-[#9D9D9D]   rounded-lg font-custom transition duration-300 ease-in-out transform hover:bg-[#37ABDE] hover:text-white active:bg-[#37ABDE] active:text-white"> الكل</button>
        </li>
      </ul>
    </div>

   

    <div className="image grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] text-center gap-10 w-[100%]">
      {filteredImages.map((data) => {
            return (
              <div  className="w-64 bg-white rounded-lg shadow-md p-4 m-4 flex flex-col items-center justify-center " key={data.id}>
              <img src={data.link} alt="" className="w-full h-40 object-cover mb-4 rounded-[50%]   " />
              <div>
                <h3 className="text-xl font-semibold mb-2">{data.Name}</h3>
                <p className="text-gray-600 mb-4"> {data.job}</p>
                <div className="flex space-x-4 justify-center">
                  <a href={data.Linked} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='rounded-full text-[#37ABDE] bg-[#fff]'/>
                  </a>
                  <a href={data.github} target="_blank" rel="noopener noreferrer">
                     <FaGithub className='rounded-full text-[#37ABDE] bg-[#fff]'/>
                  </a>
                  <a href='' target="_blank" rel="noopener noreferrer">
                    <FaBehance className='rounded-full text-[#37ABDE] bg-[#fff]'/>
            
                   
                  </a>
                </div>
              </div>
            </div>
            
           
            );
          })}

      </div>


    {/* <div  className="w-64 bg-white rounded-lg shadow-md p-4 m-4 flex flex-col items-center justify-center ">
  <img src={Team} alt="" className="w-full h-40 object-cover mb-4 rounded-[50%]   " />
  <div>
    <h3 className="text-xl font-semibold mb-2">ahmed mohamed</h3>
    <p className="text-gray-600 mb-4"> Head of Web Development</p>
    <div className="flex space-x-4 justify-center">
      <a href='https://www.linkedin.com/feed/?trk=404_page' target="_blank" rel="noopener noreferrer">
      <FaLinkedin className='rounded-full text-[#37ABDE] bg-[#fff]'/>
      </a>
      <a href='https://github.com/FatimaOElfar' target="_blank" rel="noopener noreferrer">
         <FaGithub className='rounded-full text-[#37ABDE] bg-[#fff]'/>
      </a>
      <a href='' target="_blank" rel="noopener noreferrer">
        <FaBehance className='rounded-full text-[#37ABDE] bg-[#fff]'/>

       
      </a>
    </div>
  </div>
</div> */}



  </div>
</div>

    
  )
}

export default LandTeam
