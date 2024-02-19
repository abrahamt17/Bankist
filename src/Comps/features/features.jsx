import React from 'react'
// import './features.css'
import {AiOutlineHome} from 'react-icons/ai'
import { features } from '../../constants';
import   { layout  } from '../../styles';
import {motion} from 'framer-motion'
import Styles from '../../styles';



const textvariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
  
}


const Featurecard=({id, title, content , index})=>(
<div className={`mt-1  w-[30rem]   flex flex-row rounded-[20px] ${index!==Features.length - 1? "mb-6" :"mb-0"} `}>
  <div className={`w-[70px] h-[70px] rounded-full ${Styles.flexCenter} bg-dimblue`}>
  <AiOutlineHome className='text-red-500 text-2xl'/>
  </div>
<div className='flex-1 flex flex-col ml-3'>
  
  <div>
  <h4 className='font-Arial font-semibold  text-white text-[18px] leading-[23px] mt-0'>
    {title}
  </h4>
  <p className={`  text-gray-600 font-Arial overflow-hidden font-normal  text-[16px] leading-[24px] mb-0`}>{content}</p>
</div>
</div>



</div> 
)
const  Features=()=> {
  return (
    <section id='features' className={layout.section}>
      <div className={`flex flex-col ml-10 {layout.sectionInfo}`}>
        <h2 className={Styles.heading2}> your trusted one<br/><span className={Styles.heading1}>we'll </span>Handle The <span className={Styles.heading1}> Money. </span></h2>
        <p className={`${Styles.paragraph} max-w-[470px] mt-5`}>My academic achievements reflect my strong work ethic
        and determination to excel in my studies. 
        I am particularly skilled in subject1 and subject2,
        which I believe will be beneficial in my future studies and 
        career goals.</p>
      
     
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index)=>(
          <Featurecard key={features.id} {...features} index={index}/>
        ))}
          </div>

       

    
    </section>
    
  )
}

export default Features;
