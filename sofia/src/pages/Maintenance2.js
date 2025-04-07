import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const stepss=["etape1 ","etape2 ", "etape3","etape 4" ]
const Maintenance2 = () => {
    const [description,setdescription]=useState("")
     const navigator= useNavigate()
     const [stepp,setstepp]=useState(1)
     const next=()=>{ 
        navigator("/Maintenance3");           
      }
      const pre=()=>{   
        navigator("/Maintenance1");
           
       } 
    return (
        <div className="description">
                 <div className="progress-bar1">
                {stepss.map((label, index) => (
                    <div key={index} className={`stepp ${index <= stepp  ? "active" : ""}`}>
                         {label}
                    </div>
                ))}
            </div>
        <label htmlFor="descri" id="hiiii">Description de la nature des travaux : </label>
        <textarea id="descri" onChange={(e)=>setdescription(e.target.value)}></textarea>
        <button   id="PREEE"onClick={()=>{ pre();localStorage.setItem("description", description)}}>Précedent</button>   
         <button  id="APRESSS"onClick={()=>{next();localStorage.setItem("description",description) }}>Suivant </button>
     
      
 
      </div>
    );
};

export default Maintenance2;