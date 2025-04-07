 import React, { useState } from 'react';
 import { useNavigate } from "react-router-dom";
 const stepss=["etape 1 ","etape 2 ", "etape 3","etape 4" ]
const Maintenance3 = () => {   
    const [diagnostic,setdiagnostic]=useState("")
    const navigator= useNavigate()
    const [stepp,setstepp]=useState(2)
    const next=()=>{ 
        navigator("/page2");           
    }
    const pre=()=>{   
      navigator("/Maintenance2");
         
     } 
    return (
        <div className="diagnostic">
        <div className="progress-bar1">
{stepss.map((label, index) => (
 <div key={index} className={`stepp ${index <= stepp  ? "active" : ""}`}>
      {label}
 </div>
))}
</div>
<label htmlFor="diagno" id="hiiiii">Diagnostic Préliminaire : </label>
<textarea   id="diagno" onChange={(e)=>setdiagnostic(e.target.value)}></textarea>
<button id="pree" onClick={()=>{ pre();localStorage.setItem("diagnostic", diagnostic)}}>Précedent</button>
<button id='APRESSSSS' onClick={()=>{next();localStorage.setItem("diagnostic",diagnostic)}}>Suivant </button>

</div>
    );
};

export default Maintenance3;