import Consta from "./toogleconst";

import React, { useState } from 'react'

function Services() {
const [selected, setselected]= useState(0)
const length= Consta.length

  return (
    <section className="h-[40rem]  text-white bg-gray-900">
        <div className="whole flex  flex-row items-center justify-around">

            <div className="left w-[30rem] bg-slate-500">
                <div className="text">
<h2>Our Services</h2>
<span> What Do U Expect From us?</span>
</div>
<div>
<h1>{Consta[selected].title}</h1>
</div>
<div className="p ">
<p className="truncate ">{Consta[selected].desc}</p>

</div>
</div>

<div className="right items-center flex justify-center ">

<div className="rounded-2xl  w-[20rem]"><img className=" rounded-[20%] object-contain overflow-hidden" src= {Consta[selected].img}></img>
</div>
</div>



        </div>

    </section>
  )
}

export default Services