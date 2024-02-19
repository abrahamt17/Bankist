import React from 'react'
import './more.css'
import Styles from '../../styles'

function More() {
  return (
    <section className='more flex items-center justify-between flex-row h-[40rem] w-full relative '>
      <div className=' w-[50rem] text-gray-500  ml-10 tracking-wide  relative  items-center flex h-[30rem]'>
<div className= 'bg-dimblue   font-semibold mt-[18rem] ml-5 absolute  w-48  h-48 justify-start justify-between items-center flex-col flex  rounded-lg'>
<div className='mt-4 text-gray-800'>
    <h1 className='font-semibold text-gray-500'>Average Rate</h1>
<p className='text-red-500 font-extrabold'>| $12.52 USD</p>
<p className='text-gray-500'>45.66 %</p>
</div>
<div className='rounded-full mb-2 justify-center text-xs h-6 w-16  flex items-center  text-gray-300 text-lg font-normal bg-red-500'>
<button className='font-extrabold'>Decline</button></div>
</div>
<div className={` ${Styles.flexCenter} bg-dimblue -mt-[20rem]  font-bold justify-center ml-10   w-90  h-20 items-center flex-col flex  rounded-lg`}>
<div className='ml-4 text-gray-800 '>
    
<p className='text-red-500 font-extrabold'>| $14.52 USD</p>
<p className='text-xs text-gray-500 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

</div>
<div className=' bg-dimblue font-bold mt-[6rem] ml-5 justify-center w-90  h-20 items-center flex-col flex   rounded-lg'>
<div className='ml-4 text-gray-800 '>
    
<p className='text-red-500 font-extrabold'>| $12.52 USD</p>
<p className='text-xs text-gray-500  tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>


</div>

      
<div className='absolute z-[0] w-[40%] h-[35%] top-0  pink_gradient '/>
  <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradient ' />
      <div   className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue_gradient'/>
      </div>





<div className=' w-[40rem]  mt-40 ml-10 h-[30rem]'>
<div className='font-bold ml-10'>
<div className=' mt-20  ml-10'>
<h1 className=' py-2 font-semibold text-2xl text-white'>Online way of <span className={Styles.red}>Investment</span><br/> anytime & anywhere</h1>
<p className='py-2 text-gray-400'>⭐⭐⭐⭐⭐</p>


<p className='text-gray-500 font-normal'>Lorem ipsum dolor sit <span className='text-white'>service amet consectetur</span> <br/>adipisicing elit. Neque, tenetur <br/>inventore <span className='text-white'>aperiam</span>    ducimus dolor <br/>sit est, mollitia ad adipisci sapiente <br/>recusandae <span className='text-white'> voluptatem! Molestiae.</span></p>
</div>
<div className=' flex-row mt-4 ml-10 flex'>
<div className='bg-red-500 tracking-tighter w-[8rem] font-normal font-sans flex justify-center text-white rounded'>
  <button className='tracking-wide w-full'>Learn More -{'>'} </button>
</div>
  <p className='ml-4 tracking-tighter'> Ask Question?</p>
  </div>
</div>




    </div>  
    
    
    
    
      </section>
  )
}

export default More
