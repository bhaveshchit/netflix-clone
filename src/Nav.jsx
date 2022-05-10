import React,{useState,useEffect} from 'react'
import "./nav.css"
const Nav = () => {
    const [show , handleShow] = useState([]);

   useEffect(()=>{
    
    window.addEventListener("scroll" , ()=>{
        if (window.scrollY > 100){
            handleShow(true);
        }else handleShow(false);
    });
        return () => {
            window.removeEventListener("scroll");
        }
   },[])
    

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" />
        <img className='nav_avtar' src="https://th.bing.com/th/id/OIP.mRVWwlJuuX-OdFt5NjyGYQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="avtar"/>
    </div>
  )
}

export default Nav


