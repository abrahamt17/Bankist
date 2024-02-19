import React, {useEffect,useState, useRef } from 'react'
import './toggle.css'
import Consta from './toogleconst'
import { motion, useScroll, useTransform } from 'framer-motion'

import {  useSpring } from 'framer-motion'






const Single=({item})=>{
   const ref= useRef()

   const {scrollYprogress}=useScroll({
      target:ref,
      
      })

      
const y= useTransform(scrollYprogress, [0,1],  )
   return <section ref={ref} className='h-[40rem] text-white'>
      <motion.div >
   <img src={item.img} ></img>
   </motion.div>
   <div>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
   </div>
   </section>
}
const Toggle=() =>{
   const [show, handleshow]= useState([false])
   const stickynav=()=>{
     if (window.scrollY>200){
       handleshow(true)
     } 
     else{
       handleshow(false)
     }
   }
 
   useEffect(()=>{
     window.addEventListener("scroll", stickynav)
 return ()=>window.addEventListener("scroll", stickynav)
   })



   const ref= useRef();
const {scrollYprogress}=useScroll({
target:ref,
offset:["end end", "start start"]
})

const scaleX= useSpring(scrollYprogress, {
   stiffness:100,
   damping:30,
})



  return (
   
   <div className='relative  bg-teal-950' ref={ref}>

<div className={`navv text-[36px] text-center sticky  text-orange-500  font-bold  ${show && 'navblack'} `}>
<h1>Featured Works</h1>
<motion.div style={{ scaleX }} className='bg-white mt-10 h-[10px] '></motion.div>
</div>
{Consta.map((item)=>(
<Single item={item} key={item.id}/>
   
   
   ))}

   </div> 
    )
}

export default Toggle;
