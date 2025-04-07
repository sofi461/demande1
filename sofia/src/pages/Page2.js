import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
  
const stepss=["etape 1 ","etape 2 ", "etape 3","etape 4" ]

const Page2 = () => {   
     const[consta,setconsta]=useState("")
  const navigator= useNavigate()
      const [stepp,setstepp]=useState(3)
  
     const pre=()=>{   
         navigator("/maintenance3");
            
        } 
    
  
     
    return (
        <div className="page2">
             <div className="progress-bar1">
{stepss.map((label, index) => (
 <div key={index} className={`stepp ${index <= stepp  ? "active" : ""}`}>
      {label}
 </div>
))}
</div>
           <div class="constat"><h4 id='hii'>Constat de la panne </h4></div>
           <br />
           <textarea  id="ES" onChange={(e)=>setconsta(e.target.value)}></textarea>
           <button id="APRESS" onClick={()=> {   localStorage.setItem("consta",consta)
            }}>SUIVANT </button>
                    <button id="PRE" onClick={()=> {   pre();localStorage.setItem("consta", consta)
            }}>AVANT</button>   
        </div>
    );
};

export default Page2;