import React from 'react'
import './footer.css';

const Footer = () => {

    const handleScrollClick =() =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    };
  return (


    <>
    <div className='footerDiv'>
    {/* <p onClick={handleScrollClick}>^</p> */}
        <p>All Rights Protected &copy; Aghori Inc 2023 </p>
    </div>
    
    </>
  )
}

export default Footer