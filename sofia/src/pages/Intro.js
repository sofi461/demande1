import React, { startTransition, useEffect, useState } from 'react';
import  {useNavigate} from "react-router-dom";
 
 
const Intro = () => {
    const[v,setv]=useState("")
    const [f,setf]=useState("")
    const [a,seta]=useState("")
    const navigator= useNavigate()
   const [date, setDate] = useState(new Date());  

    
    
    
   
    
  
    return (
        <div className="introo">  
       
              <div className="intro">
        <div className="i"></div>
        <div className="n"><h5>DEMANDE D'INTERVENTION</h5></div>
        <div className="t">
            <div className="t1"><h2>ER.NAF.MNT.09.V2</h2></div>
            <div className="t2">
                <label htmlFor="i">Date d'application</label>
     <input type="text" id='i'   />
            </div>
        </div>
      </div>
<div className="p2">
<div className="ndt">
<div className="N">
    <label htmlFor="num">N°:  </label>
    <input type="text" id='num'    readOnly/>
</div>
<div className="dh">
    <h4>Date Heure de la panne ou de l'avarie :</h4>
    <br />
    <label htmlFor="le">Le </label>
    <input type="date" id='le' value={localStorage.getItem("datep")} readOnly />
    <label htmlFor="a">à </label>
    <input type="time"id='a' value={localStorage.getItem("dateh")} readOnly />
</div>
</div>
<div className="dis">
<div className="d1">
 <label htmlFor="di">District/Autre :</label>
 <input type="text" id='di' />
</div>
<div className="d2">
<label htmlFor="cds">CDS/Autre:</label>
<input type="text" id='cds' />
</div>
</div>
<div className="str">
<h4>Structure Maintenance Destinataire</h4>
{localStorage.getItem("a")==="a" ?  <input type="checkbox"  id='CDS' checked disabled/>   : <input type="checkbox"  id='CDS'disabled/>}
 <label htmlFor="CDS">CDS</label>
 {localStorage.getItem("a")==="a" ?  <input type="text"  id='CDS'  value={localStorage.getItem("data") } readOnly/>: <input type="text"  id='CDS'   readOnly/>}
 
 <br />
 {localStorage.getItem("a")==="b" ?<input type="checkbox"  id='G' checked disabled/>:<input type="checkbox"  id='G' disabled/>}
 <label htmlFor="G">Garage secondaire /Atelier Réseau </label>
{localStorage.getItem("a")==="b" ? <input type="text"  id='G' value={localStorage.getItem("data")} readOnly /> : <input type="text"  id='G'  readOnly/> }

 <br />
 {localStorage.getItem("a")==="c" ?<input type="checkbox"  id='UNM'  checked disabled/>:<input type="checkbox"  id='UNM' disabled/>}
 
 <label htmlFor="UNM">UNM / District</label>
 {localStorage.getItem("a")==="c" ?  <input type="text"  id='UNM' value={localStorage.getItem("data")} readOnly />: <input type="text"  id='UNM' readOnly />}
 
 <br />
 {localStorage.getItem("a")==="d" ? <input type="checkbox"  id='un' checked disabled/>: <input type="checkbox"  id='un' disabled/>}
 <label htmlFor="un">Unité canalisation</label>
 {localStorage.getItem("a")==="d" ?<input type="text"  id='un' value={localStorage.getItem("data")} readOnly/>:<input type="text"  id='un' readOnly/> }
  
 <br />
 {localStorage.getItem("a")==="e" ? <input type="checkbox"  id='pre'checked disabled/>: <input type="checkbox"  id='pre' disabled/>}
 <label htmlFor="pre">Prestataire Externe</label>
 {localStorage.getItem("a")==="e" ?  <input type="text"  id='pre' value={localStorage.getItem("data")} readOnly/>: <input type="text"  id='pre' readOnly/>}
 
 <br />
</div>
</div>
<div className="p3">
    <div className="activ">
    <h4>Activité:</h4>
    <input type="checkbox" id="in" disabled/>
    <label htmlFor="in" >Maintenance installation fixe </label>
    <br />
    <input type="checkbox" id="r" checked disabled/>
    <label htmlFor="r" >Maintenance Roulant </label>
    <br />
    <input type="checkbox" id="N" disabled/>
    <label htmlFor="N"  >Navire</label>
    <br />
    <input type="checkbox" id="a" disabled/>
    <label htmlFor="a"  >Autre* </label>
    <br />
    </div>
    <div className="ntrpa">
        <h4>Nature de panne </h4>
        <br />
        {localStorage.getItem("nature")==="m" ? <input type="checkbox" id="mec" checked disabled />:  <input type="checkbox" id="mec"disabled />}
  
    <label htmlFor="mec" > Mécanique</label>
    <br />
    {localStorage.getItem("nature")==="e" ? <input type="checkbox" id="é" checked disabled/>: <input type="checkbox" id="é" disabled/>}
    <label htmlFor="é" >Electrique</label> 
    <br />
    {localStorage.getItem("nature")==="a"? <input type="checkbox" id="au" checked disabled/>:<input type="checkbox" id="au" disabled/>}
     
    <label htmlFor="au" >Autre*</label>
    <br />
    </div>
</div>
<div className="p6">
    <div className="activt">
    <h4>Nature des travaux :</h4>
    <br />
    <input type="checkbox"  id="mc" checked disabled />
    <label htmlFor="mc">Maintenance corrective</label>
    <br />
    <input type="checkbox"  id="mp" disabled/>
    <label htmlFor="mp">Maintenance préventive</label>
    <br />
    <input type="checkbox"  id="tn" disabled/>
    <label htmlFor="tn">Travaux neufs</label>
    <br />
    <input type="checkbox"  id="mod" disabled/>
    <label htmlFor="mod">Modification</label>
    <br />
    <input type="checkbox"  id="ex"disabled />
    <label htmlFor="ex"> Expertise</label>
    <br />
    <input type="checkbox"  id="vr" disabled />
    <label htmlFor="vr">Vérification Métrologique</label>
    <br />
    <input type="checkbox"  id="cr" disabled/>
    <label htmlFor="cr"> Controle réglementaire</label>
    <br />
     </div>
     <div className="ntrpat">    
               <h4>Degré d'urgence :</h4>
               {localStorage.getItem("degre")==="1" ? <input type="checkbox" id="1" checked disabled/>: <input type="checkbox" id="1" disabled/>}
            
            <label htmlFor="1">(1)</label>
            <br />
            {localStorage.getItem("degre")==="2" ? <input type="checkbox" id="2" checked disabled/>: <input type="checkbox" id="2" disabled/>}
             
            <label htmlFor="2">(2)</label>
            <br />
            {localStorage.getItem("degre")==="3" ? <input type="checkbox" id="3" checked disabled/>: <input type="checkbox" id="3" disabled/>}
 
            <label htmlFor="3">(3)</label>
            </div>
 
        
</div>
 
 <button id="apres" onClick={()=> navigator("/Partie2" )}>Suivant</button>
 
 </div>
    );
};

export default Intro;