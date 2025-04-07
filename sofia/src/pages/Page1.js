import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
 
 const steps=["etape1 ","etape2 ", ]

 

const Page1 = () => {
     const navigator= useNavigate()
    const [step,setstep]=useState(0)
    const[num,setnum]=useState("")
    const [nature,setnature]=useState("")
    const [degre,setdegre]=useState("")
    const[datep,setdatep]=useState("")
    const[dateh,setdateh]=useState("")
   const [a,seta]=useState("")
   const [data,setdata]=useState("")
   
 
    return (
    <div className="page"> 
   
          <div className="dhp">
 
            <h4 id='y'>Date Heure de la panne ou de l'avarie :</h4>
            <div className="lea">   <label htmlFor="LE ">Le </label>
    <input type="date" id='LE' onChange={(e)=>setdatep(e.target.value)} value={datep || dateh}/>
    <label htmlFor="A "> à </label>
    <input type="time"id='A' onChange={(e)=>{setdateh(e.target.value)}}/></div>
 
    <h4 id='y'>Nature de panne</h4>
    
    <input type="checkbox" id="mecanique"  onChange={()=> setnature("m")} />
    <label htmlFor="mecanique" > Mécanique</label>
    <br />
    <input type="checkbox" id="électrique" onChange={()=> setnature("e")}/>
    <label htmlFor="électrique" >Electrique</label>
    <br />
    <input type="checkbox" id="autre" onChange={()=> setnature("a")} />
    <label htmlFor="autre" >Autre*</label>
    <br />
    <h4 id='so'>Degré d'urgence :</h4>
             <input type="radio" id="uno" name="type"onChange={()=> setdegre("1") }/>
            <label htmlFor="uno">(1)</label>
             
            <input type="radio" id="deux"  name="type" onChange={()=> setdegre("2") }/>
            <label htmlFor="deux">(2)</label>
           
            <input type="radio" id="trois"   name="type" onChange={()=> setdegre("3") }/>
            <label htmlFor="trois">(3)</label>
            </div>  
            <div className="smd">
            <h4 id='y'>Structure Maintenance Destinataire</h4>
            <div className="a"> <input type="radio" name='hi'  id='C'  onChange={()=>seta("a")}/>
 <label htmlFor="C">CDS</label>
 <input type="text"  id='Ce' onChange={(e)=>{setdata(e.target.value); seta("a")}} /></div>

  <div className="b"> <input   type="radio" name='hi'  id='garage' onChange={()=>seta("b")}/>
 <label htmlFor="garage">Garage secondaire /Atelier Réseau </label>
 <input type="text"  id='garagee' placeholder={data} onChange={(e)=>{setdata(e.target.value); seta("b")}}  /></div>

 <div className="cb"> <input   type="radio" name='hi' id='unm' onChange={()=>seta("c")}/>
 <label htmlFor="unm">UNM / District</label>
 <input type="text" id='unme' onChange={(e)=>{setdata(e.target.value); seta("c")}}  /></div>

 
 
 
 <input   type="radio" name='hi'  id='prestataire' onChange={()=>seta("e")}/>
 <label htmlFor="prestataire">Prestataire Externe</label>
 <input type="text"  id='prestatairee' onChange={(e)=>{setdata(e.target.value); seta("e")}} />
 <br />
            </div>
            <button id="APRES" onClick={()=> {     localStorage.setItem("nature",nature);localStorage.setItem("degre",degre);
           localStorage.setItem("datep",datep); localStorage.setItem("dateh",dateh);localStorage.setItem("a",a);localStorage.setItem("data",data)
           }}>envoyer</button>
        </div>
    );
};

export default Page1;