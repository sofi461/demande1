 import React, { startTransition, useEffect, useState } from 'react';
 import  {useNavigate} from "react-router-dom";
 const stepss=["etape 1 ","etape 2 ", "etape 3","etape 4" ]
const Maintenance1 = () => {
    const [natureprio,setNatureprio]=useState("")
    const [ouiounon,setOuiounon]=useState("")
    const [travail,setTravail]=useState("")
    const [datatravail,setDatatravail]=useState("")
     const navigator= useNavigate()
      const [stepp,setstep]=useState(0)
         
const next=()=>{
    
    navigator("/maintenance2");
          
       
  }
    return (
        
<div className="cote">
<div className="progress-bar1">
                {stepss.map((label, index) => (
                    <div key={index} className={`stepp ${index <= stepp  ? "active" : ""}`}>
                         {label}
                    </div>
                ))}
            </div>
            <br />
    <h4 id="qua">Qualification de l'intervention </h4>
 <div className="partieee">
  <div className="niveaux">
    <h4 id="nivv">Niveaux de priorisation :</h4>
   <input type="radio" name="alg"id='w' onChange={()=>setNatureprio(1)}/>
   <label htmlFor="w">(1)</label>
    
   <input type="radio"  name="alg" id='z' onChange={()=>setNatureprio(2)}/>
   <label htmlFor="z">(2)</label>
   
   <input type="radio"  name="alg" id='T' onChange={()=>setNatureprio(3)}/>
   <label htmlFor="T">(3)</label>
  </div>
  <div className="necessitent">
    <h4 id="nessi"> Nécessitent-t-ils un permis de travail ? :</h4>
    <input type="radio"  name="on"id='oui' onClick={()=>setOuiounon("oui")}/>
    <label htmlFor="oui">Oui</label>
    <input type="radio" name="on" id='non' onClick={()=>setOuiounon("non")}/>
    <label htmlFor="non">Non</label>
    <h4 id='sioui'>Si oui,s'agit-il d'un permis de travail ?</h4>
    <div className="ROUTIN">
    <input type="radio" name="rd" id='routin' onClick={()=>setTravail("routin")}/>
    <label htmlFor="routin">Routinier - PT Réf :</label>
    <br />
    <input type="text" id='routin' placeholder='.......................................' onChange={(e)=>setDatatravail(e.target.value)} />
  </div>
  <div className="DANGER">
   <input type="radio" name="rd" id='danger' onClick={()=>setTravail("danger")}/>
   <label htmlFor="danger">Dangereux - PT Réf :</label>
   <br />
   <input type="text" id='danger' placeholder='.......................................' onChange={(e)=>setDatatravail(e.target.value)}/>
</div>
  </div>
  </div>
  <button onClick={()=>{ next() ;localStorage.setItem("natureprio",natureprio); localStorage.setItem("ouiounon",ouiounon); localStorage.setItem("travail",travail); localStorage.setItem("datatravail",datatravail)}} id='m1'> suivant</button>
</div>
    );
};

export default Maintenance1;