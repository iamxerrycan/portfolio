import React from 'react'
import './MyworkPage.css'
import Mywork from '../../component/myWork/Mywork';
import MyworkData from '../../assets/data/MyworkData';

const  MyworkPage=()=>{
  return (
    <div className='myworkpage'>
        <Mywork projects={MyworkData}/>
    </div>
  )
}

export default MyworkPage;