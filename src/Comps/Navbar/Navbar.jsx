import { useEffect, useState } from 'react';

// import { Container} from 'react-bootstrap';
import './bootstrap-5.3.2-dist/css/bootstrap.min.css'
import  { Container, NavDropdown,Nav,  NavbarBrand, NavbarCollapse, NavbarToggle, Button} from 'react-bootstrap'
// import { motion } from 'framer-motion';
import { Navbar } from 'react-bootstrap';
  



        
    
        
        const NavBar=()=> {


          const  [activelink, setactivelink]= useState('home');
          
          const  [sticky, setsticky]= useState(false);
useEffect(()=>{
  const onscroll=()=>{
if (window.scrollY>50){
  setsticky(true);
}
else{
  setsticky(false)
}
  }

  window.addEventListener('scroll', onscroll)
  return()=> window.removeEventListener('scroll', onscroll);

}, [])

const onupdatedactivelink= (value)=>{
  setactivelink(value);
  
}



          return (
            <Navbar expand="lg" className={sticky? "sticky": ""}>
            <Container>
              <Navbar.Brand href="#home" className='font-bold text-4xl text-red-600'>
         Bankist.
              </Navbar.Brand>

             
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                
                  <Nav.Link href="#home" className= {activelink==="home"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('home')}>Home</Nav.Link>
                 
                  <Nav.Link href="#about" className={activelink==="About"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('About')}>About</Nav.Link>
                  <Nav.Link href="#service" className={activelink==="service"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('Service')}>Service</Nav.Link>
                  <Nav.Link href="#whatsnew" className={activelink==="whatsnew"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('whatsnew')}>Whatsnew?</Nav.Link>
                  

                  {/* dropdown */}

               
                  <NavDropdown title="Plans" id="basic-nav-dropdown"  className={activelink==="plans"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('plans')}>
                    <NavDropdown.Item href="#action/3.1" className={activelink==="action/3.1"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('action/3.1')}>Free</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"  className={activelink==="action/3.2"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('action/3.2')}>
                     Premium
                    </NavDropdown.Item>
                    <NavDropdown.Divider></NavDropdown.Divider>
                    <NavDropdown.Item href="#action/3.3"  className={activelink==="action/3.3"? 'active navbar-link': 'navbar-link'} onClick={()=>onupdatedactivelink('action/3.3')}>Platinium</NavDropdown.Item>

                  </NavDropdown>
               
</Nav> <Nav className=''>
                  <span className='navbar-text'>
                    
                    <Button  className='button' onClick={()=> console.log("HeyThere")}>Explore now </Button>
                  </span>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          

          )
        }
        
        export default NavBar;
 