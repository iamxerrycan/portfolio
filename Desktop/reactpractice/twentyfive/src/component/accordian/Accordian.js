import React from "react";
import data from "./Data";
import { useState } from "react";
import './Accordian.css'

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multi , setmulti] = useState([])
  const [enableMultisec , setenableMultisec]= useState(false) // button 
  


  const handleSingleSelection = (dataId) => {
    console.log(dataId);
    setSelected(dataId === selected ? null :dataId);
  };

  const handleMultisel=(dataId)=>{
     let copyMulti = [...multi]
     const findIndexofCurrentId = copyMulti.indexOf(dataId)
     console.log(findIndexofCurrentId);
     if(findIndexofCurrentId=== -1) copyMulti.push(dataId)
     else copyMulti.splice(findIndexofCurrentId ,1)
    setmulti(copyMulti) 
  }
  console.log(multi);

  return (
    <div className="wrapper">

        <button onClick={()=>setenableMultisec(!enableMultisec)}> Multi Selection </button>
      <div className="accordiam">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={ enableMultisec ? ()=> handleMultisel(dataItem.id):() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h1>{dataItem.question}</h1>
                <span>+</span>
                
              </div>
              {selected === dataItem.id || multi.indexOf(dataItem.id) !== -1 ?( <div >{dataItem.answer}</div>) : null}
            </div>
          ))
        ) : (
          <div> no data found </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
