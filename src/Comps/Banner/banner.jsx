import React, { useEffect, useState } from 'react'
import { Col, Container, Row  } from 'react-bootstrap'
//  import Col from 'react-bootstrap'
import phone from './Assets/banking/phone.png'
import { motion } from 'framer-motion'
 import './banner.css'
import Styles from '../../styles';
import Add from '../Additional/add';





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

const textvariants2={
  initial2:{
    x:500,
    opacity:0,
  },
  animate2:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
  
}


const Banner=()=> {
  const [loopnum, setloopnum]=useState(0);
    const [isdeleting, setisdeleting]= useState(false);
    const torotate= [ 'Housing' ,'and','Building' ];
    // const torotatee= [ 'Housing' ,"Building",'housing' ];
    // const [texte, settexte]= useState('');
    const [text, settext]= useState('');
    const [delta, setdelta] = useState(300-Math.random()*100);
    const period= 200;
    // const [scrolled, setscrolled]= useState(false);
    useEffect(()=>{
      let ticker=setInterval(() => {
        tick()
      }, delta);
   return ()=> {clearInterval(ticker)};},[text])

      

    const tick = () => {
      // let i = loopnum % torotatee.length;
      let j = loopnum % torotate.length;
      // let fulltexte = torotatee[i];
      let fulltext = torotate[j];
      
      let updatedtext = isdeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1);
      settext(updatedtext);
      // If we're in the deleting phase and there's nothing left to delete, switch to the typing phase
    if (isdeleting){
    setdelta(prevDelta=>prevDelta/2)
    }
    
    if (isdeleting && updatedtext === '') {
        setisdeleting(true);
        setdelta(period);
    }
    else if(isdeleting)
{
  setisdeleting(true)
        setloopnum(loopnum+1);
        setdelta(500)
        // if (text===torotate[2]){
        //   setdelta(0);
        // }
      }
      // If we're in the typing phase and there's nothing left to type, switch to the deleting phase
     
      
      
      
      
      // Update the texts
      // let updatedetext = isdeleting ? fulltexte.substring(0, texte.length - 1) : fulltexte.substring(0, texte.length + 1);
      // settexte(updatedetext);
     };
  return (






  <section className={`banner flex md:flex-row h-[40rem] flex-col ${Styles.paddingY} `} id='home'>
   <div className={`flex-1 ${Styles.flexstart} justify-between flex-row xl:px-0 sm-px-16 px-6`}>
  
     
    
   
   
      
   <motion.div variants={textvariants} initial="initial" animate="animate" className='ml-10'>
        <Col className='title '>
      <motion.div variants={textvariants} initial="initial" animate="animate" className='tagline '> KEEP YOUR MONEY SAFE ! </motion.div>
      <motion.div>
      <motion.h1 variants={textvariants} className= {Styles.heading1}>Best Crypto<span className='animate-pulse  h-[5rem] rounded bg-red-600'>investment</span> platform  for your <span className='bg-red-600 height mt-10  rounded animate-pulse'>future</span></motion.h1>  
     {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptates autem eaque reprehenderit sed, aspernatur ea eveniet quaerat possimus voluptas quibusdam minima numquam ipsum! Neque officia inventore cum veritatis ut?</p> */}
     </motion.div>
   
    </Col>
      <Col className='Profiles'>
    <motion.button variants={textvariants} onClick ={()=> console.log('connect')}>hey there</motion.button>
      <motion.div variants={textvariants} className='profile'> 168k+</motion.div>
    </Col> 

    <profiles/>
    <stats/>
    </motion.div>
    <motion.img variants={textvariants2} initial='initial2' animate= 'animate2' src={phone} className='w-100px -mt-20 ml-20  h-100px flex justify-center align-start '></motion.img>
    <div className=' w-[50px]'>
    <div className='absolute z-[0] w-[40%] h-[35%] top-0  pink_gradient '/>
  <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradient ' />
      <div   className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue_gradient'/>
      </div>
    </div>
  </section> 

  )
}

export default Banner