import { layout } from "../../styles";
import Styles from "../../styles";
import boy from './boy.png'


import React from 'react'

const  Add=()=> (
<section id='product' className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
    <img src={boy} alt='boy' className="w-[100%] h-[100%] relative z-[5]"/>
    <div className='absolute z-[0] w-[40%] h-[35%] top-0  pink_gradient '/>
  <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradient ' />
      <div   className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue_gradient'/>
    
    <div className="left-[17rem]  mt-[27rem] w-[20rem] h-[2.5rem] bg-white flex justify-center items-center text-[#020617] absolute  rounded">welcome to the digital world!</div>
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient"> </div>
<hr/>
</div>
<div className={layout.sectionInfo}>
    <h2 className={Styles.heading2}>Easily Explore <span className={Styles.heading1}> our services </span> with our  interactive online platform</h2>
    <p className={`${Styles.paragraph} max-w-470px mt-5`}>the best credit cards offersome taking it to combine of promom and info  Some quick example text to build on the card title and make up the
            bulk of the card's content. </p>
    </div>


</section>

    )
  


export default Add


