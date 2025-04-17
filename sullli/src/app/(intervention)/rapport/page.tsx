 
  // "use client";

  // import React, { useState,useEffect } from 'react';
  // import { userapportData } from "../../components/fromcontextrapport";
 
  // export default function rapport() {
  //   const [mounted, setMounted] = useState(false);
  //   const[erreurdate,seterreurdate]=useState(true);
  //   const [erreurdates,  seterreurdates]=useState(true);
  //   const [today,settoday]=useState("")
  //   const isFormValid = () => {
 
  //     const isValid =
  //     rapportdata.essaisoutest ||
  //     (!rapportdata.essaisoutest && (rapportdata.réserver.trim() !== ""  ));
       
  //       return (
           
  //         ( !erreurdates &&
  //           !erreurdate &&
  //         isValid&&
  //          rapportdata.numero?.trim() &&
  //           rapportdata.datedébut?.trim() &&
  //           rapportdata.heuredébut?.trim() && 
  //           rapportdata.datefin?.trim() &&
  //           rapportdata.heurefin?.trim() &&
  //           rapportdata.numeroor?.trim() &&
  //           rapportdata.datedeprise?.trim() &&
  //           rapportdata.heuredeprise?.trim() &&
  //           rapportdata.naturedesessais?.trim() &&
  //           rapportdata.referencedocumente?.trim() && 
  //           rapportdata.datefinpermisdetravail?.trim() &&
  //           rapportdata.etablipar?.trim() &&
  //           rapportdata.verifiepar?.trim() &&
  //           rapportdata.validepar?.trim() &&
  //           rapportdata.nomintervenant?.trim() &&
  //           rapportdata.intervenant?.trim() &&
  //           rapportdata.dateintervenant?.trim() &&
  //           rapportdata.ResponsableMaintenance?.trim() &&
  //           rapportdata.nomresponsable?.trim() &&
  //           rapportdata.dateresponsable?.trim() &&
  //           rapportdata.demandeur?.trim() &&
  //           rapportdata.nomdemandeur?.trim() &&
  //           rapportdata.datedemandeur?.trim() &&
  //           rapportdata.dateapplication?.trim()
  //         )
          
  //       );
  //     };
  //   const handleNavigation = () => {
  //       if (isFormValid()) {
        
         
  //       } else {
  //         alert("Veuillez remplir tous les champs obligatoires.");
  //        console.log(rapportdata);
          
  //       }
  //     };
 
  //    const { rapportdata,setrapport} = userapportData();
  //       useEffect(() => {
  //         settoday(new Date().toISOString().split('T')[0]);
  //     setMounted(true);
  //     console.log(new Date().toISOString().split('T')[0]);
      
  //     setrapport('dateapplication', new Date().toISOString().split('T')[0]);
  //     const d1 = new Date(rapportdata.datefin);
  //     const d2 = new Date(rapportdata.datedébut);
       
      
  //     if (erreurdates && erreurdate) {
  //        const diffMs = d1 - d2;  
  //     const diffJours = diffMs / (1000 * 60 * 60 * 24);  
  //     setrapport("laduréedetravail",diffJours) ;
  //     console.log(rapportdata.laduréedetravail);
      
  //     }
    
  //   }, [rapportdata.laduréedetravail]);
  //   useEffect(() => {
  //     if (rapportdata.datedébut && rapportdata.datefin) {
  //       compareDates();
  //     }
  //   }, [rapportdata.datedébut, rapportdata.datefin]);
  //   useEffect(() => {
  //     if (rapportdata.datedébut && rapportdata.datedeprise) {
  //       compareDate();
  //     }
  //   }, [rapportdata.datedébut, rapportdata.datedeprise]);

  //   const compareDate = () => {
  //     const d1 = new Date(rapportdata.datedébut);
  //     const d3 = new Date(rapportdata.datedeprise);
     
  //     if (isNaN(d1.getTime()) || isNaN(d3.getTime())) {
        
  //       return;
  //     }
    
  //     if (d1< d3) {
         
  //       seterreurdates(true);
      
  //     } else {
        
        
  //       seterreurdates(false);
  //     }
  //   };
  //    const handlePermisChange = (value) => {
  //       const isOui = value === "oui";
  //       setrapport("essaisoutest", isOui);
        
  //     };
  //     const compareDates = () => {
  //       const d1 = new Date(rapportdata.datedébut);
  //       const d2 = new Date(rapportdata.datefin);
      
       
  //       if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
  //         console.log("Une des dates est invalide");
  //         return;
  //       }
      
  //       if (d2 < d1) {
          
  //         seterreurdate(true);
       
  //         setrapport((prev) => ({
  //           ...prev,
  //           datefin: '',
  //         }));
         
          
  //       } else {
  //         seterreurdate(false);
               
  //    if (!erreurdates &&  !erreurdate) {
  //       const diffMs = d2 - d1;  
  //    const diffJours = diffMs / (1000 * 60 * 60 * 24);  
  //    setrapport("laduréedetravail",diffJours) ;
  //    console.log(rapportdata.laduréedetravail);
     
  //       }else{
  //         setrapport("laduréedetravail","");
  //       }
  //    };
  //   }
  
 
  //   return (

  //       <div className=' flex justify-center   h-screen'>
  //        <div className=' py-[20px]  '>
  //           <table className='w-269  '>
  //               <thead>
  //                   <tr className='border-2 border-black  px-7 py-5 '>
  //                       <th className='border-2 border-black  p-0 w-60 h-[116px] overflow-hidden'>
  //                       <img src="/logo-naftal.png" alt="NAFTAL Logo" className='w-full h-full object-cover'  />
  //                            </th>
  //                       <th className='border-2 border-black  px-7 py-5 w-140 text-2xl'>
  //                           <h2>RAPPORT  D'INTERVENTION </h2>
  //                       </th>
  //                        <th className='border-2  border-black   py-5'>
  //                       <h4 className='border-b-2 border-black w-full text-center '>ER.NAF.MNT.20.V1</h4>
            
  //                       <label htmlFor="dapp" className='py-4'>Date application :</label>
  //                       <br />
  //                       <input type="date" id='dapp' name='dateapplication '
                  
  //                value={rapportdata.dateapplication|| ""} 
  //                readOnly
                 
  //                   />
  //                    </th>
                      
  //                   </tr> 
  //               </thead>
  //           </table>
  //        </div>
  //       <table className='table-auto border border-black h-60   w-278 mt-7 absolute top_25'>
  //           <thead>
  //               <tr className='border-2 border-black   px-7 py-5 h-7'>
  //               <th className='border-2 border-black py-[4px]  px-4 '>
  //                   <label htmlFor="N°" className='mt-[2px]'>N° :</label>
  //                   <input type="text" id='N°'onChange={(e) => setrapport("numero", e.target.value)}  
  //                     value={rapportdata.numero|| ""} 
  //                     className='px-4'
  //                     placeholder='...................................................' 
  //                     name='numero'
  //                   />        
                      
  //                      <h4>Structure Maintenance en charge des travaux :</h4>
  //                   <input type="text"  
  //                     value={ "sulli"} 
  //                      readOnly
  //                   />
  //               </th>
  //               <th className='border-2 border-black   px-7  overflow-hidden align-middle '>
  //                   <label htmlFor="">DI N° :</label>
               
  //                   <input type="text"  
  //                     value={ "  lisa"} 
  //                      readOnly
  //                   />
  //               </th>
  //             <th className='border-2 border-black   px-7  '>
  //               <h4>Appartenance du Bien</h4>
  //             </th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //           <tr className='border-2 border-black   px-7   h-1'>
  //               <td className='border-2 border-black   px-7  '>
  //               <h4>Date et heure début des travaux :</h4>
  //               <label htmlFor="ddt">   Le </label>
  //                   <input type="date" id='ddt' 
  //                onChange={(e) => setrapport("datedébut", e.target.value)}  
  //                value={rapportdata.datedébut|| ""} 
  //                max={today}
  //                name='datedébut'
  //                   />
  //                    <label htmlFor="hdt">   à    </label>
  //                   <input type="time" id='hdt' 
  //                onChange={(e) => setrapport("heuredébut", e.target.value)}  
  //                value={rapportdata.heuredébut|| ""} 
  //                name='heuredébut'
  //                   />
  //                    <br />
  //                   <span className='text-red-500 text-sm'>{erreurdates ? "la date de debut   doit etre sup a la date de la prise en charge" : ""}</span>    
  //               </td>
  //               <td className='border-2 border-black  px-2 py-5'>
  //                   <h4>Date et Heure de la panne ou de l'avarie :</h4>
  //                   <label htmlFor="dp">Le </label>
  //                   <input type="text" id='df' 
  //                     value={ "1/02/2025"} 
  //                      readOnly
  //                   />  
  //                 <label htmlFor="hp"> à </label>
  //                 <input type="time" id='hp' 
  //                     value={ "12:02"} 
  //                      readOnly
  //                   />  
  //               </td>
  //               <td className='border-2 border-black  px-7 py-5'>
  //                   <h4>District / Autre: </h4>
  //               <input type="text"  
  //                     value={ "lisa"} 
  //                      readOnly
  //                   />
  //               </td>  
  //            </tr>
            
  //           <tr className='border-2 border-black  px-7  '>
  //              <td className='border-2 border-black  px-7  '>
  //               <h4>Date et heure fin des travaux :</h4>
  //               <label htmlFor="dft">Le </label>
  //                   <input type="date" id='dft' 
  //                onChange={(e) => {setrapport("datefin", e.target.value);   }}  
  //                value={rapportdata.datefin|| ""} 
  //                 max={today}
  //                 name='datefin'
  //                   />
                   
  //                    <label htmlFor="hft">à </label>
  //                   <input type="time" id='hft' 
  //                onChange={(e) => {setrapport("heurefin", e.target.value); }}  
  //                value={rapportdata.heurefin|| ""} 
  //                name='heurefin'
  //                   />
  //                    <br />
  //                   <span className='text-red-500 text-sm py-[3px]'>{erreurdate ? " la date de fin doit etre supérieure a la date de debut " :" "}</span>
  //               </td>
  //               <td className='border-2 border-black  px-7 py-5'>
  //               <label htmlFor="or">OR N° : </label>
  //               <input type="text"id='or'
  //                      onChange={(e) => setrapport("numeroor", e.target.value)}  
  //                      value={rapportdata.numeroor|| ""} 
  //                      name='numeroor'
  //                      className='px-2'
  //                      placeholder ='........................................................................' 
  //               />
  //               </td>
  //               <td rowSpan="2"  className='border-2 border-black  px-7 py-5'>
  //               <h4>District / Autre: </h4>
  //               <input type="text"  
  //                     value={ "jennie"} 
  //                      readOnly
  //                   />
  //                    </td>
  //           </tr>
  //           <tr className='border-2 border-black  px-7 py-5'>
  //               <td className='border-2 border-black  px-7 py-5'>
  //                   <h4>Durée des travaux :</h4>
  //                   <input type="text" 
  //                   className='ml-35 mt-0.4' 
  //                     value={rapportdata.laduréedetravail   || ""} 
  //                      readOnly
  //                   /> 
  //               </td>
  //               <td className='border-2 border-black px-7  '>
  //               <h4>Date et heure de prise  en charge des travaux :</h4>
  //               <label htmlFor="ddp">Le </label>
  //                   <input type="date" id='ddp' 
  //                onChange={(e) => setrapport("datedeprise", e.target.value)}  
  //                value={rapportdata.datedeprise|| ""} 
  //                placeholder='................' 
  //                max={today}
  //                name='datedeprise'
  //                   />
  //                    <label htmlFor="hdp">à </label>
  //                   <input type="time" id='hdp' 
  //                onChange={(e) => setrapport("heuredeprise", e.target.value)}  
  //                value={rapportdata.heuredeprise|| ""} 
  //                placeholder='................' 
  //                name='heuredeprise'
  //                   />
  //                   <br />
  //                 <span></span>
  //               </td>
  //           </tr>
  //           </tbody>
  //       </table>
         
  //       <h4 className='mt-4 border-2 border-black   top-6_5  w-278 text-center absolute'>Essais et Tests de fonctionnement</h4>
         
  //      <table className='table-auto border border-black h-50 mt-7 w-278 top-8_8 absolute '>
  //       <tbody>
  //           <tr className='border-2 border-black  px-7 py-5'>
  //               <td className='border-2 border-black w-139 px-7 py-5'>
  //                   <label htmlFor="ndet">Nature des Essais et/ou tests de fonctionnement realisées (Description sommaire) : </label>
  //                   <br />
    
  //                   <textarea
  //           id="ndet"
  //           className="input    min-h-[120px]   w-125 border border-gray-400 mt-3   rounded-md px-3  py-1 text-sm flex-1" // Style textarea
        
  //           onChange={(e) => {
  //             setrapport("naturedesessais", e.target.value);
  //           }}
  //           value={rapportdata.naturedesessais  }
  //           name='naturedesessais'
  //           placeholder="Saisir la nature des essais ou/et tests de fonctionnement realisées..."
  //         ></textarea>
  //               </td>
  //          <td className='border-2 border-black  px-7 '>
  //           <div className='top-6_7'> 
  //           <h4>Essais et/ou tests concluant ? :</h4>
  //           <div className="flex gap-4 px-30 py-4.5  ">
  //              <div>
  //                <input
  //                  type="radio"
  //                  name="permisRadio"
  //                  id="permis-oui"
                   
  //                  checked={rapportdata.essaisoutest === true}
  //                  onChange={() =>  handlePermisChange("oui")}
  //                  className="mr-1 form-radio"
                  
  //                />
  //                <label htmlFor="permis-oui" className="text-sm">
  //                  Oui
  //                </label>
  //              </div>
  //              <div>
  //                <input
  //                  type="radio"
  //                  name="permisRadio"
  //                  id="permis-non"
                   
  //                  checked={rapportdata.essaisoutest === false}
  //                  onChange={() =>   handlePermisChange("non")}
  //                  className="mr-1 form-radio"
  //                />
  //                <label htmlFor="permis-non" className="text-sm">
  //                  Non
  //                </label>
  //              </div>             
  //            </div>
  //            </div>
  //            { mounted && rapportdata.essaisoutest === false && (
  //              <div className="mt-18   pl-4  ">
              
  //                <h5 className="text-md font-medium ">
  //                  Si non , Réserves :
  //                </h5>
  //                <input
  //                    type="text"
                     
  //                    placeholder="..........................................................."
  //                    value={rapportdata.réserver}
  //                    onChange={(e) =>{
  //                       setrapport("réserver", e.target.value);
  //                    }}
  //                    name='réserver'
  //                    className="input   min-w-[150px] h-8 border border-gray-400 rounded-md px-3  text-sm flex-1"
                      
  //                  />
  //              </div>
               
  //            )}
  //          </td>
  //           </tr>
  //           <tr className='border-2 border-black   px-7 py-6 h-7 ' >
  //        <td className='border-2 border-black w-139 px-7 py-5'>
  //           <label htmlFor="ref">La Référence (s) documentée (s) : </label>
  //           <input type="text" id="ref"
  //           placeholder='.............................................................
  //           ' 
            
  //           value={rapportdata.referencedocumente}
  //           onChange={(e) =>{
  //               setrapport("referencedocumente", e.target.value);
  //            }}
  //            name='referencedocumente'
  //           />
  //        </td>
  //        <td className='border-2 border-black w-139 px-7 py-5'>
  //        <label htmlFor="dfpt">Date fin permis de travail  : </label>
  //           <input type="date" id="ref"
  //           placeholder='.............................................................
  //           ' 
  //           value={rapportdata.datefinpermisdetravail}
  //           max={today}
  //           onChange={(e) =>{
  //               setrapport("datefinpermisdetravail", e.target.value);
  //            }}
  //            name='datefinpermisdetravail'
  //           /> 
  //        </td>
  //           </tr>
  //       </tbody>
  //      </table>
  //      <table className='table-auto border border-black h-50   w-278 mt-7 absolute top-2_11'>
  //       <thead className='py-[3px]'   >
  //       <tr className='border-2 border-black  px-1 '>
  //           <th className='border-2 border-black    '>
  //               <label htmlFor="etabli"> Etabli par :</label>
  //               <input type="text" id='etabli'onChange={(e) => setrapport("etablipar", e.target.value)}  
  //                     value={rapportdata.etablipar|| ""} 
  //                     className='w-[250px]'
  //                     name='etablipar'
  //                   />     
  //           </th>
  //           <th className='border-2 border-black   '>
  //           <label htmlFor="verifie">Vérifé par :</label>
  //               <input type="text" id='verifie'onChange={(e) => setrapport("verifiepar", e.target.value)}  
  //                     value={rapportdata.verifiepar|| ""} 
  //                     className='w-[290px] '
  //                    name='verifiepar' 
  //                   />   
  //           </th>
  //           <th className='border-2 border-black     '>
  //           <label htmlFor="valide">  Validé par :</label>
  //               <input type="text" id='valide'onChange={(e) => setrapport("validepar", e.target.value)}  
  //                     value={rapportdata.validepar|| ""} 
  //                     className='w-[240px]  '
  //                    name='validepar' 
  //                   /> 
  //           </th>
  //       </tr>
  //       </thead>
  //       <tbody>
  //           <tr className='border-2 border-black  px-7 py-5'>
  //           <td className='border-2 border-black  px-3 py-5'>
  //           <label htmlFor="intervenant">intervenant :</label>
  //               <input type="text" id='intervenant'onChange={(e) => setrapport("intervenant", e.target.value)}  
  //                     value={rapportdata.intervenant|| ""} 
  //                     className='px-4 '
  //                     name='intervenant'
  //                   /> 
  //                   <br />
  //                        <label htmlFor="nomintervenant"> Nom et Prénom  :</label>
  //               <input type="text" id='nomintervenant'onChange={(e) => setrapport("nomintervenant", e.target.value)}  
  //                     value={rapportdata.nomintervenant|| ""} 
  //                     className='px-4 '
  //                   name='nomintervenant'  
  //                   /> 
  //                    <br />

  //                        <label htmlFor="dateintervenant"> Date :</label>
  //               <input type="date" id='dateintervenant'onChange={(e) => setrapport("dateintervenant", e.target.value)}  
  //                     value={rapportdata.dateintervenant|| ""} 
  //                     className=' px-[1px]  '
  //                    max={today} 
  //                    name='dateintervenant'
  //                   /> 
  //               <br />
  //                   <label htmlFor="visa">Visa</label>
  //           </td>
  //            <td className='border-2 border-black  px-3 py-5'>
  //            <label htmlFor="responsable">Responsable Maintenance :</label>
  //               <input type="text" id='responsable'onChange={(e) => setrapport("ResponsableMaintenance", e.target.value)}  
  //                     value={rapportdata.ResponsableMaintenance|| ""} 
  //                     className=' px-[1px]   '
  //                   name='ResponsableMaintenance'  
  //                   /> 
  //                   <br />
  //                        <label htmlFor="nomresponsable"> Nom et Prénom  :</label>
  //               <input type="text" id='nomresponsable'onChange={(e) => setrapport("nomresponsable", e.target.value)}  
  //                     value={rapportdata.nomresponsable|| ""} 
  //                     className=' px-[1px]  '
  //                    name='nomresponsable' 
  //                   /> 
  //              <br />
  //                        <label htmlFor="dateresponsable"> Date :</label>
  //               <input type="date" id='dateresponsable'onChange={(e) => setrapport("dateresponsable", e.target.value)}  
  //                     value={rapportdata.dateresponsable|| ""} 
  //                     className='px-4  '
  //                     max={today}
  //                     name='dateresponsable'
  //                   /> 
  //               <br />
  //                   <label htmlFor="visaresponsable">Visa</label>
  //            </td>
  //           <td className='border-2 border-black  px-3 py-5'> 
  //           <label htmlFor="demandeur"> demandeur  :</label>
  //               <input type="text" id='demandeur'onChange={(e) => setrapport("demandeur", e.target.value)}  
  //                     value={rapportdata.demandeur|| ""} 
  //                     className='px-4'
  //                    name='demandeur' 
  //                   /> 
  //                 <br />
  //                        <label htmlFor="nomdemandeur"> Nom et Prénom  :</label>
  //               <input type="text" id='nomdemandeur'onChange={(e) => setrapport("nomdemandeur", e.target.value)}  
  //                     value={rapportdata.nomdemandeur|| ""} 
  //                     className='px-4'
  //                    name='nomdemandeur' 
  //                   /> 
                    
  //                   <br />
  //                        <label htmlFor="datedemandeur"> Date :</label>
  //               <input type="date" id='datedemandeur'onChange={(e) => setrapport("datedemandeur", e.target.value)}  
  //                     value={rapportdata.datedemandeur|| ""} 
  //                     className='px-4'
  //                     max={today}
  //                   name='datedemandeur'  
  //                   /> 
  //               <br />
  //                   <label htmlFor="visaresponsable">Visademandeur</label>
  //           </td>
  //          </tr>
  //       </tbody>
  //      </table>
  //      <div className=" top_100">
  //          <button
  //          className={
  //           isFormValid()
  //             ? " bg-yellow-500 hover:bg-yellow-600 h-[30px]   font-semibold mb-[30px] w-[200px] shadow transition"
  //             : "bg-gray-400     font-semibold h-[30px] mb-[30px] w-[250px]  rounded-lg shadow"
  //         }
  //         disabled={!isFormValid()}
              
  //            onClick={handleNavigation}
  //          >
  //                  {isFormValid() ? "validez " : "Veuillez remplir les champs"}
  //          </button>
  //          </div>
  //      </div>

  //   );
  // };
 

 
  "use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import { userapportData } from "../../components/fromcontextrapport";


 interface rapportdata { numero?: string; datedébut?: string; heuredébut?: string; datefin?: string; heurefin?: string; numeroor?: string; datedeprise?: string; heuredeprise?: string; naturedesessais?: string; referencedocumente?: string; datefinpermisdetravail?: string; etablipar?: string; verifiepar?: string; validepar?: string; nomintervenant?: string; intervenant?: string; dateintervenant?: string; ResponsableMaintenance?: string; nomresponsable?: string; dateresponsable?: string; demandeur?: string; nomdemandeur?: string; datedemandeur?: string; dateapplication?: string; essaisoutest?: boolean; réserver?: string; laduréedetravail?: number | string; }

type SetRapportType = <K extends keyof rapportdata>(key: K, value: rapportdata[K]) => void;

interface RapportContextValue { rapportdata: rapportdata; setrapport: SetRapportType; }

declare module "../../components/fromcontextrapport" { export function userapportdata(): RapportContextValue; }



export default function Rapport() {   const [mounted, setMounted] = useState(false); const [erreurdate, setErreurDate] = useState(true); const [erreurdates, setErreurDates] = useState(true); const [today, setToday] = useState("");

const { rapportdata, setrapport } = userapportData();

useEffect(() => { const todayStr = new Date().toISOString().split("T")[0]; setToday(todayStr); setMounted(true); setrapport("dateapplication", todayStr); }, []);

useEffect(() => { if (rapportdata.datedébut && rapportdata.datefin) compareDates(); }, [rapportdata.datedébut, rapportdata.datefin]);

useEffect(() => { if (rapportdata.datedébut && rapportdata.datedeprise) compareDate(); }, [rapportdata.datedébut, rapportdata.datedeprise]);

useEffect(() => { calculateDuration(); }, [rapportdata.datedébut, rapportdata.datefin, erreurdate, erreurdates]);

const calculateDuration = () => { const d1 = new Date(rapportdata.datedébut || ""); const d2 = new Date(rapportdata.datefin || ""); if (!isNaN(d1.getTime()) && !isNaN(d2.getTime()) && !erreurdate && !erreurdates) { const diffMs = d2.getTime() - d1.getTime(); const diffJours = diffMs / (1000 * 60 * 60 * 24); setrapport("laduréedetravail", diffJours >= 0 ? diffJours : 0); } else { setrapport("laduréedetravail", ""); } };

const compareDate = () => { const d1 = new Date(rapportdata.datedébut || ""); const d3 = new Date(rapportdata.datedeprise || ""); if (!isNaN(d1.getTime()) && !isNaN(d3.getTime())) { setErreurDates(d1 < d3); } };

const compareDates = () => { const d1 = new Date(rapportdata.datedébut || ""); const d2 = new Date(rapportdata.datefin || ""); if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) { if (d2 < d1) { setErreurDate(true); setrapport("datefin", ""); } else { setErreurDate(false); } } };

const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { const { name, value } = e.target; setrapport(name as keyof rapportdata, value); };

const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => { const { name, value } = e.target; setrapport(name as keyof rapportdata, value); };

const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => { const { name, value } = e.target; setrapport(name as keyof rapportdata, value); };

const handlePermisChange = (value: string) => { const isOui = value === "oui"; setrapport("essaisoutest", isOui); if (isOui) setrapport("réserver", ""); };

const isFormValid = () => { const isReserveValid = rapportdata.essaisoutest === true || (rapportdata.essaisoutest === false && (rapportdata.réserver?.trim() ?? '') !== "");

if (!isReserveValid || erreurdate || erreurdates) return false;

const requiredFields: (keyof rapportdata)[] = [
  "numero", "datedébut", "heuredébut", "datefin", "heurefin", "numeroor",
  "datedeprise", "heuredeprise", "naturedesessais", "referencedocumente",
  "datefinpermisdetravail", "etablipar", "verifiepar", "validepar",
  "nomintervenant", "intervenant", "dateintervenant", "ResponsableMaintenance",
  "nomresponsable", "dateresponsable", "demandeur", "nomdemandeur",
  "datedemandeur", "dateapplication"
];

return requiredFields.every(
  (field) => (rapportdata[field]?.toString().trim() ?? "") !== ""
);

};

const handleNavigation = () => { if (isFormValid()) { console.log("Formulaire valide", rapportdata);}} // Ajouter la logique de soumission ou navigation ici } else { alert("Veuillez remplir tous les champs obligatoires et corriger les erreurs."); } };

 return ( 
         <div className=' flex justify-center   h-screen'>
         <div className=' py-[20px]  '>
            <table className='w-269  '>
                <thead>
                    <tr className='border-2 border-black  px-7 py-5 '>
                        <th className='border-2 border-black  p-0 w-60 h-[116px] overflow-hidden'>
                        <img src="/logo-naftal.png" alt="NAFTAL Logo" className='w-full h-full object-cover'  />
                             </th>
                        <th className='border-2 border-black  px-7 py-5 w-140 text-2xl'>
                            <h2>RAPPORT  D'INTERVENTION </h2>
                        </th>
                         <th className='border-2  border-black   py-5'>
                        <h4 className='border-b-2 border-black w-full text-center '>ER.NAF.MNT.20.V1</h4>
            
                        <label htmlFor="dapp" className='py-4'>Date application :</label>
                        <br />
                        <input type="date" id='dapp' name='dateapplication '
                  
                 value={rapportdata.dateapplication|| ""} 
                 readOnly
                 
                    />
                     </th>
                      
                    </tr> 
                </thead>
            </table>
         </div>
        <table className='table-auto border border-black h-60   w-278 mt-7 absolute top_25'>
            <thead>
                <tr className='border-2 border-black   px-7 py-5 h-7'>
                <th className='border-2 border-black py-[4px]  px-4 '>
                    <label htmlFor="N°" className='mt-[2px]'>N° :</label>
                    <input type="text" id='N°'onChange={(e) => setrapport("numero", e.target.value)}  
                      value={rapportdata.numero|| ""} 
                      className='px-4'
                      placeholder='...................................................' 
                      name='numero'
                    />        
                      
                       <h4>Structure Maintenance en charge des travaux :</h4>
                    <input type="text"  
                      value={ "sulli"} 
                       readOnly
                    />
                </th>
                <th className='border-2 border-black   px-7  overflow-hidden align-middle '>
                    <label htmlFor="">DI N° :</label>
               
                    <input type="text"  
                      value={ "  lisa"} 
                       readOnly
                    />
                </th>
              <th className='border-2 border-black   px-7  '>
                <h4>Appartenance du Bien</h4>
              </th>
              </tr>
            </thead>
            <tbody>
            <tr className='border-2 border-black   px-7   h-1'>
                <td className='border-2 border-black   px-7  '>
                <h4>Date et heure début des travaux :</h4>
                <label htmlFor="ddt">   Le </label>
                    <input type="date" id='ddt' 
                 onChange={(e) => setrapport("datedébut", e.target.value)}  
                 value={rapportdata.datedébut|| ""} 
                 max={today}
                 name='datedébut'
                    />
                     <label htmlFor="hdt">   à    </label>
                    <input type="time" id='hdt' 
                 onChange={(e) => setrapport("heuredébut", e.target.value)}  
                 value={rapportdata.heuredébut|| ""} 
                 name='heuredébut'
                    />
                     <br />
                    <span className='text-red-500 text-sm'>{erreurdates ? "la date de debut   doit etre sup a la date de la prise en charge" : ""}</span>    
                </td>
                <td className='border-2 border-black  px-2 py-5'>
                    <h4>Date et Heure de la panne ou de l'avarie :</h4>
                    <label htmlFor="dp">Le </label>
                    <input type="text" id='df' 
                      value={ "1/02/2025"} 
                       readOnly
                    />  
                  <label htmlFor="hp"> à </label>
                  <input type="time" id='hp' 
                      value={ "12:02"} 
                       readOnly
                    />  
                </td>
                <td className='border-2 border-black  px-7 py-5'>
                    <h4>District / Autre: </h4>
                <input type="text"  
                      value={ "lisa"} 
                       readOnly
                    />
                </td>  
             </tr>
            
            <tr className='border-2 border-black  px-7  '>
               <td className='border-2 border-black  px-7  '>
                <h4>Date et heure fin des travaux :</h4>
                <label htmlFor="dft">Le </label>
                    <input type="date" id='dft' 
                 onChange={(e) => {setrapport("datefin", e.target.value);   }}  
                 value={rapportdata.datefin|| ""} 
                  max={today}
                  name='datefin'
                    />
                   
                     <label htmlFor="hft">à </label>
                    <input type="time" id='hft' 
                 onChange={(e) => {setrapport("heurefin", e.target.value); }}  
                 value={rapportdata.heurefin|| ""} 
                 name='heurefin'
                    />
                     <br />
                    <span className='text-red-500 text-sm py-[3px]'>{erreurdate ? " la date de fin doit etre supérieure a la date de debut " :" "}</span>
                </td>
                <td className='border-2 border-black  px-7 py-5'>
                <label htmlFor="or">OR N° : </label>
                <input type="text"id='or'
                       onChange={(e) => setrapport("numeroor", e.target.value)}  
                       value={rapportdata.numeroor|| ""} 
                       name='numeroor'
                       className='px-2'
                       placeholder ='........................................................................' 
                />
                </td>
                <td rowSpan={2}className='border-2 border-black  px-7 py-5'>
                <h4>District / Autre: </h4>
                <input type="text"  
                      value={ "jennie"} 
                       readOnly
                    />
                     </td>
            </tr>
            <tr className='border-2 border-black  px-7 py-5'>
                <td className='border-2 border-black  px-7 py-5'>
                    <h4>Durée des travaux :</h4>
                    <input type="text" 
                    className='ml-35 mt-0.4' 
                      value={rapportdata.laduréedetravail   || ""} 
                       readOnly
                    /> 
                </td>
                <td className='border-2 border-black px-7  '>
                <h4>Date et heure de prise  en charge des travaux :</h4>
                <label htmlFor="ddp">Le </label>
                    <input type="date" id='ddp' 
                 onChange={(e) => setrapport("datedeprise", e.target.value)}  
                 value={rapportdata.datedeprise|| ""} 
                 placeholder='................' 
                 max={today}
                 name='datedeprise'
                    />
                     <label htmlFor="hdp">à </label>
                    <input type="time" id='hdp' 
                 onChange={(e) => setrapport("heuredeprise", e.target.value)}  
                 value={rapportdata.heuredeprise|| ""} 
                 placeholder='................' 
                 name='heuredeprise'
                    />
                    <br />
                  <span></span>
                </td>
            </tr>
            </tbody>
        </table>
         
        <h4 className='mt-4 border-2 border-black   top-6_5  w-278 text-center absolute'>Essais et Tests de fonctionnement</h4>
         
       <table className='table-auto border border-black h-50 mt-7 w-278 top-8_8 absolute '>
        <tbody>
            <tr className='border-2 border-black  px-7 py-5'>
                <td className='border-2 border-black w-139 px-7 py-5'>
                    <label htmlFor="ndet">Nature des Essais et/ou tests de fonctionnement realisées (Description sommaire) : </label>
                    <br />
    
                    <textarea
            id="ndet"
            className="input    min-h-[120px]   w-125 border border-gray-400 mt-3   rounded-md px-3  py-1 text-sm flex-1" // Style textarea
        
            onChange={(e) => {
              setrapport("naturedesessais", e.target.value);
            }}
            value={rapportdata.naturedesessais  }
            name='naturedesessais'
            placeholder="Saisir la nature des essais ou/et tests de fonctionnement realisées..."
          ></textarea>
                </td>
           <td className='border-2 border-black  px-7 '>
            <div className='top-6_7'> 
            <h4>Essais et/ou tests concluant ? :</h4>
            <div className="flex gap-4 px-30 py-4.5  ">
               <div>
                 <input
                   type="radio"
                   name="permisRadio"
                   id="permis-oui"
                   
                   checked={rapportdata.essaisoutest === true}
                   onChange={() =>  handlePermisChange("oui")}
                   className="mr-1 form-radio"
                  
                 />
                 <label htmlFor="permis-oui" className="text-sm">
                   Oui
                 </label>
               </div>
               <div>
                 <input
                   type="radio"
                   name="permisRadio"
                   id="permis-non"
                   
                   checked={rapportdata.essaisoutest === false}
                   onChange={() =>   handlePermisChange("non")}
                   className="mr-1 form-radio"
                 />
                 <label htmlFor="permis-non" className="text-sm">
                   Non
                 </label>
               </div>             
             </div>
             </div>
             { mounted && rapportdata.essaisoutest === false && (
               <div className="mt-18   pl-4  ">
              
                 <h5 className="text-md font-medium ">
                   Si non , Réserves :
                 </h5>
                 <input
                     type="text"
                     
                     placeholder="..........................................................."
                     value={rapportdata.réserver}
                     onChange={(e) =>{
                        setrapport("réserver", e.target.value);
                     }}
                     name='réserver'
                     className="input   min-w-[150px] h-8 border border-gray-400 rounded-md px-3  text-sm flex-1"
                      
                   />
               </div>
               
             )}
           </td>
            </tr>
            <tr className='border-2 border-black   px-7 py-6 h-7 ' >
         <td className='border-2 border-black w-139 px-7 py-5'>
            <label htmlFor="ref">La Référence (s) documentée (s) : </label>
            <input type="text" id="ref"
            placeholder='.............................................................
            ' 
            
            value={rapportdata.referencedocumente}
            onChange={(e) =>{
                setrapport("referencedocumente", e.target.value);
             }}
             name='referencedocumente'
            />
         </td>
         <td className='border-2 border-black w-139 px-7 py-5'>
         <label htmlFor="dfpt">Date fin permis de travail  : </label>
            <input type="date" id="ref"
            placeholder='.............................................................
            ' 
            value={rapportdata.datefinpermisdetravail}
            max={today}
            onChange={(e) =>{
                setrapport("datefinpermisdetravail", e.target.value);
             }}
             name='datefinpermisdetravail'
            /> 
         </td>
            </tr>
        </tbody>
       </table>
       <table className='table-auto border border-black h-50   w-278 mt-7 absolute top-2_11'>
        <thead className='py-[3px]'   >
        <tr className='border-2 border-black  px-1 '>
            <th className='border-2 border-black    '>
                <label htmlFor="etabli"> Etabli par :</label>
                <input type="text" id='etabli'onChange={(e) => setrapport("etablipar", e.target.value)}  
                      value={rapportdata.etablipar|| ""} 
                      className='w-[250px]'
                      name='etablipar'
                    />     
            </th>
            <th className='border-2 border-black   '>
            <label htmlFor="verifie">Vérifé par :</label>
                <input type="text" id='verifie'onChange={(e) => setrapport("verifiepar", e.target.value)}  
                      value={rapportdata.verifiepar|| ""} 
                      className='w-[290px] '
                     name='verifiepar' 
                    />   
            </th>
            <th className='border-2 border-black     '>
            <label htmlFor="valide">  Validé par :</label>
                <input type="text" id='valide'onChange={(e) => setrapport("validepar", e.target.value)}  
                      value={rapportdata.validepar|| ""} 
                      className='w-[240px]  '
                     name='validepar' 
                    /> 
            </th>
        </tr>
        </thead>
        <tbody>
            <tr className='border-2 border-black  px-7 py-5'>
            <td className='border-2 border-black  px-3 py-5'>
            <label htmlFor="intervenant">intervenant :</label>
                <input type="text" id='intervenant'onChange={(e) => setrapport("intervenant", e.target.value)}  
                      value={rapportdata.intervenant|| ""} 
                      className='px-4 '
                      name='intervenant'
                    /> 
                    <br />
                         <label htmlFor="nomintervenant"> Nom et Prénom  :</label>
                <input type="text" id='nomintervenant'onChange={(e) => setrapport("nomintervenant", e.target.value)}  
                      value={rapportdata.nomintervenant|| ""} 
                      className='px-4 '
                    name='nomintervenant'  
                    /> 
                     <br />

                         <label htmlFor="dateintervenant"> Date :</label>
                <input type="date" id='dateintervenant'onChange={(e) => setrapport("dateintervenant", e.target.value)}  
                      value={rapportdata.dateintervenant|| ""} 
                      className=' px-[1px]  '
                     max={today} 
                     name='dateintervenant'
                    /> 
                <br />
                    <label htmlFor="visa">Visa</label>
            </td>
             <td className='border-2 border-black  px-3 py-5'>
             <label htmlFor="responsable">Responsable Maintenance :</label>
                <input type="text" id='responsable'onChange={(e) => setrapport("ResponsableMaintenance", e.target.value)}  
                      value={rapportdata.ResponsableMaintenance|| ""} 
                      className=' px-[1px]   '
                    name='ResponsableMaintenance'  
                    /> 
                    <br />
                         <label htmlFor="nomresponsable"> Nom et Prénom  :</label>
                <input type="text" id='nomresponsable'onChange={(e) => setrapport("nomresponsable", e.target.value)}  
                      value={rapportdata.nomresponsable|| ""} 
                      className=' px-[1px]  '
                     name='nomresponsable' 
                    /> 
               <br />
                         <label htmlFor="dateresponsable"> Date :</label>
                <input type="date" id='dateresponsable'onChange={(e) => setrapport("dateresponsable", e.target.value)}  
                      value={rapportdata.dateresponsable|| ""} 
                      className='px-4  '
                      max={today}
                      name='dateresponsable'
                    /> 
                <br />
                    <label htmlFor="visaresponsable">Visa</label>
             </td>
            <td className='border-2 border-black  px-3 py-5'> 
            <label htmlFor="demandeur"> demandeur  :</label>
                <input type="text" id='demandeur'onChange={(e) => setrapport("demandeur", e.target.value)}  
                      value={rapportdata.demandeur|| ""} 
                      className='px-4'
                     name='demandeur' 
                    /> 
                  <br />
                         <label htmlFor="nomdemandeur"> Nom et Prénom  :</label>
                <input type="text" id='nomdemandeur'onChange={(e) => setrapport("nomdemandeur", e.target.value)}  
                      value={rapportdata.nomdemandeur|| ""} 
                      className='px-4'
                     name='nomdemandeur' 
                    /> 
                    
                    <br />
                         <label htmlFor="datedemandeur"> Date :</label>
                <input type="date" id='datedemandeur'onChange={(e) => setrapport("datedemandeur", e.target.value)}  
                      value={rapportdata.datedemandeur|| ""} 
                      className='px-4'
                      max={today}
                    name='datedemandeur'  
                    /> 
                <br />
                    <label htmlFor="visaresponsable">Visademandeur</label>
            </td>
           </tr>
        </tbody>
       </table>
       <div className=" top_100">
           <button
           className={
            isFormValid()
              ? " bg-yellow-500 hover:bg-yellow-600 h-[30px]   font-semibold mb-[30px] w-[200px] shadow transition"
              : "bg-gray-400     font-semibold h-[30px] mb-[30px] w-[250px]  rounded-lg shadow"
          }
          disabled={!isFormValid()}
              
             onClick={handleNavigation}
           >
                   {isFormValid() ? "validez " : "Veuillez remplir les champs"}
           </button>
           </div>
       </div>

    );
  };
 


  