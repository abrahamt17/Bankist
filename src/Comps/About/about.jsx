import Card from 'react-bootstrap/Card';
 import   './about.css'

import {Styles ,layout } from '../../styles';

function BorderExample() {
  return (
    
    <section className=' section justify-content-between bg-inherit' >
      <div className='mt-20'>
<div className='fonts items-center w-[70rem] h-[6rem] mt-10 justify-center animate-pulse   flex flex-col justify-between  '>
      <div className=' flex justify-between  justify-self-start' >
        <h1>your trusted  partner <span className={`bg-red-500 &&{Styles.heading1}`}>of banking</span> system<span>?</span></h1>
      </div>
      <div>
        <p className='text-gray-500 mt-4 font-sans font-semibold'> Some quick example text to build on the card title and make up the
            bulk <br></br> <span className='ml-20'> of the card's content.Some quick example</span> </p>
      </div>

      </div>    
      
        <div className={`${layout.section} font-sans -mt-20 pt-0`}>
     
      <Card id='three' className={'card ll bg-dimblue font-bold mt-[6rem] ml-5 justify-center w-90  h-20  flex-col flex   rounded-lg   hover:bg-red-500 '}   style={{ width: '18rem' }}>
        <Card.Header className='font-extrabold text-red-500 '>01</Card.Header>
        <Card.Body>
          <Card.Title className='text-white '>Primary Card Title</Card.Title>
          <Card.Text className='text-gray-400'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    
      <Card id='two'
      className='bg-red-600/90 animate-pulse text-black ' style={{ width: '18rem' }}>
        <Card.Header className='text-black font-extrabold'>02</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text className='text-gray-900 font-sans' >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card id='three' className='ll  bg-dimblue font-bold mt-[6rem] ml-5 justify-center w-90  h-20  flex-col flex   rounded-lg ' border="transparent" style={{ width: '18rem' }}>
        <Card.Header className='font-extrabold  flex text-red-500'>03</Card.Header>
        <Card.Body>
          <Card.Title className='text-white'>Success Card Title</Card.Title>
          <Card.Text className='text-gray-400'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
   
      
      </Card>
     
      <br />
      </div>
      
      </div>
    
     
      </section>
 
 )
}

export default BorderExample;