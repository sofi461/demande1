
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
 import '../styles/dem.css';
 import { useEffect } from "react"
 const Vehicule = () => {
     
       const navigator= useNavigate()
      const next=()=>{
      
          navigator("/maintenance1");
                
             
        }
      useEffect(() => {
          document.body.classList.add("h");
  
          return () => {
              document.body.classList.remove("h");
          };
      }, []);
      return (
          <div className="pagestyle">
             <div className="par1">
               <label htmlFor="code" id="CODE">Code :    </label>
               <input type="text" id='code' placeholder='          ..................'/>
               </div>
               <div className="par2">
               <label htmlFor="marque" id="MARQUE">Marque :    </label>
               <input type="text" id='marque' placeholder='          ..................'/>
               </div>
               <div className="par3">
               <label htmlFor="type" id='TYPE'>Type :    </label>
               <input type="text"id='type'placeholder='          ..................' />
               </div>
               <div className="par4">
                  <label htmlFor="genre" id='GENRE'>Genre :    </label>
                  <input type="text" id='genre' placeholder='          ..................'/>
                  </div>
                  <div className="par5">
                  <label htmlFor="km" id='KM'>Km et/ou Heure de fonctionnement :   </label>
                  <input type="text" id='km' value={"hiiiii"} placeholder='          ...............................................................'/>
               </div>
              <button id='SUIVAN' onClick={()=> {next();} }>suivant</button>
          </div>
      );
   };
  
 
 export default Vehicule;