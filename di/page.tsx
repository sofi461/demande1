 
  "use client";

  import React, { useState,useEffect } from 'react';
  import { userdemandeData } from "../../components/fromcontextrapport";
   
  export default function rapport() {
     
   
     const {FormValue,SetFormValue} = userdemandeData();
    
   
   const handleRadioTravailClick = (type) => {
    
    if (type === "routin") {
      SetFormValue("dangereux_ref", "");  

    } else if (type === "danger") {
      SetFormValue("routinier_ref", "");  
    }
  
  };
    

   
   

  const handlePermisChange = (v) => {
    const isOui = v === "oui";
    SetFormValue("necess_permis", isOui);
    
     
     
    if (!isOui) {
      SetFormValue("routinier_ref", "");
      SetFormValue("dangereux_ref", "");
    }   
  };

  const handleTravailTypeChange = (type, refValue = "") => {
    // Met à jour la référence correspondante quand on tape dans l'input
    if (type === "routin") {
      SetFormValue("routinier_ref", refValue);
      // Si on tape dans Routinier, on s'assure que Dangereux est vide (car un seul peut être actif)
      if (refValue.trim() !== "" && FormValue.dangereux_ref.trim() !== "") {
        SetFormValue("dangereux_ref", "");
      }
    } else if (type === "danger") {
      SetFormValue("dangereux_ref", refValue);
      // Si on tape dans Dangereux, on s'assure que Routinier est vide
      if (refValue.trim() !== "" && FormValue.routinier_ref.trim() !== "") {
        SetFormValue("routinier_ref", "");
      }
    }
  };

  
  const prioriteOptions = [
    { value: "1", label: "(1)" },
    { value: "2", label: "(2)" },
    { value: "3", label: "(3)" },
  ];
    const structureOptions = [
      { value: "cds", label: "CDS" },
      { value: "garage", label: "Garage secondaire / Atelier Réseau" },
      { value: "unm", label: "UNM / District" },
      { value: "canalisation", label: "Unité canalisation" },
      { value: "externe", label: "Prestataire Externe" },
    ];
    const handleSubmit =() => {

    }
     
     
    return (

   
 
  <div className=' flex justify-center   h-screen'>
  <div className=' py-[20px]  '>
     <table className='w-[67.25rem]  '>
         <thead className=' '>
             <tr className='border-2 border-black  px-7' >
                 <th className='border-2 border-black  p-0 w-60 h-[5.8rem] overflow-hidden'>
                 <img src="/logo-naftal.png" alt="NAFTAL Logo" className='w-full  h-full object-cover'  />
                      </th>
                 <th className='border-2 border-black  px-7 py-5 w-140 text-2xl'>
                     <h2>DEMANDE  D'INTERVENTION </h2>
                 </th>
                  <th className='border-2  border-black   py-5'>
                 <h4 className='border-b-2 border-black w-full text-center '>ER.NAF.MNT.20.V1</h4>
     
                 <label htmlFor="dapp" className='py-4'>Date application :</label>
                 <br />
                 <span></span>
              </th>
               
             </tr> 
         </thead>
     </table>
  </div>
  <table className='table-auto border border-black h-[18.5rem]  w-[72.5rem] mt-[1.75rem]absolute top_25'>
     <tbody>
       <tr className='border-2 border-black   py-5  '>
         <td className='border-2 border-black  pl-3   text-l w-[20rem]  py-5 '>
        <label htmlFor="numerodemande" className='font-bold'>N° :</label>
         <span></span>
         </td>
         <td className='border-2 border-black   px-3 py-5  '>
        <h6 className='pb-2 font-bold'>District / Autre :</h6>
        <h6 className='pl-7' > sulli</h6>
         </td>
         <td className='border-2 border-black   px-7 w-[38rem]  ' rowSpan={2}>
           <h5 className='pb-4 pt-2 font-bold text-center'>Structure Maintenance Destinataire </h5>
           <div className="space-y-4">
   {structureOptions.map((option) => (
     <div className="flex items-center gap-3" key={option.value}>
       <span></span>
       <label
         htmlFor={`struct-${option.value}`}
         className="w-48 flex-shrink-0"
       >
         {option.label}
       </label>
       {(option.value === "cds" ||
         option.value === "unm" ||
         option.value === "garage" ||
         option.value === "externe" ||
         option.value === "canalisation") && (  
         <span className="  border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"></span>
 
       )}
     </div>
   ))}
 </div>
         </td>
       </tr>
       <tr className='border-2 border-black   '>
         <td className='border-2 border-black  px-2   '>
         <h4 className=" font-bold pt-0 pb-2">
   Date & Heure de la panne ou de l'avarie
 </h4>
 
   <label
     htmlFor="datePanne"
     className="text-sm  font-bold"
   >
     Le :
   </label>
   <span className="  text-sm"></span>
  
   <label
     htmlFor="heurePanne"
     className="text-sm font-bold"
   >
     à :
   </label>
    <span className="  text-sm"></span>
         </td>
         <td>
           <h6 className='font-bold pl-2'>CDS / Autre :</h6>
           <h6 className='pl-7'> jennie</h6>
         </td>
       </tr>
     </tbody>
 </table>
<table className='table-auto border border-black  h-[ 41.42rem]  w-290 mt-7 absolute top-[28.14rem]'>
  <tbody> 
   <tr className="border-2 border-black  ">
     <td className="border-2 border-black  w-[38rem] px-3">
     <h5 className="font-bold px-[9px] py-[4px]">
   Activité :
 </h5>
    <span className='mr-[3px]'></span>
    <label htmlFor="activite">Maintenence Installation fixe</label>
     <br />
     <span className='mr-[3px]'></span>
    <label htmlFor="MaterielRoulant">Materiel Roulant</label>
     <br />
     <span className='mr-[3px]'></span>
    <label htmlFor="Navire"> Navire</label>
     <br />
      <span className='mr-[3px]'></span>
    <label htmlFor="autreactivité">Autres* </label>
     <br />
     </td>
     <td className="border-2 border-black  w-[38rem] px-3">
     <h5 className="font-bold px-[9px]    ">
       Nature de la panne : 
       </h5>
     <span className='mr-[3px] mt-[10px]'></span>
    <label htmlFor="mecanique">Mécanique </label>
     <br />
     <span className='mr-[3px] mt-[12px]'></span>
    <label htmlFor="electrique"> Elecrique </label>
     <br />
    <span className='mr-[3px] mt-[12px]'></span>
    <label htmlFor="autrenaturedepanne">Autres* </label>
     <br />
     </td>
   </tr>
    <tr className="border-2 border-black">
     <td className="border-2 border-black  px-3" >
       <h5 className="font-bold px-[9px] py-[4px]">Nature des travaux :</h5>
        <span className='mr-[3px] '></span>
        <label htmlFor="maintenance_corrective"> Maintenance Corrective </label>
        <br />
        <span className='mr-[3px] '></span>
        <label htmlFor="maintenance_preventive">maintenance Preventive </label>
        <br />
     <span className='mr-[3px] '></span>
        <label htmlFor="travaux_neufs"> Travaux Neufs</label>
        <br />
  <span className='mr-[3px] '></span>
        <label htmlFor="modification"> Modification </label>
        <br />
         <span className='mr-[3px] '></span>
        <label htmlFor="expertise"> Expertise </label>
        <br />
        <span className='mr-[3px] '></span>
        <label htmlFor="verification_reglementaire"> Verification Reglementaire</label>
        <br />
        <span className='mr-[3px] '></span>
        <label htmlFor="controle_reglementaire"> Controle Reglementaire</label>
        <br />
     </td>
     <td className="border-2 border-black relative px-3">
       <h5 className="font-bold px-[9px] py-[4px] absolute top-[1px]"> Degré d'urgence :</h5>
      <div className='absolute top-[50px]'>
   <span className='mb-[20px] mr-[5px] '></span>
       <label htmlFor="degre_urgence1">(1)</label>
       <br />
      <span  className='mb-[20px] mr-[5px] '></span>
       <label htmlFor="degre_urgence2">(2)</label>
       <br />
  <span  className='mb-[20px] mr-[5px] ' ></span>
       <label htmlFor="degre_urgence3">(3)</label>
       <br />
       </div>
     </td>
    </tr>
   </tbody>
</table>
<table className='table-auto border border-black     w-290 mt-7 absolute top-[48.85rem]'>
<thead>
<tr className="border-2 border-black ">
<th className='pl-[400px]'>  <h4 className='tracking-wide'>Identification du bien </h4> </th>
</tr>
</thead>
<tbody>
<tr className="border-2 border-black ">
<td className="border-2 border-black pl-[5px] w-[36rem] ">
<label className='mr-[3px font-bold]' > Code:</label>
<label>jennie </label>
</td>
<td className="border-2 border-black pl-[5px] w-[36rem]">
<label  > Genre:</label>
<label>jennie </label>
</td>
</tr>
<tr className="border-2 border-black ">
<td className="border-2 border-black pl-[5px]">
<label className='mr-[3px font-bold]' > Marque:</label>
<label>jennie </label>
</td>
<td className="border-2 border-black pl-[5px] w-[36rem]">
<label className='mr-[3px font-bold]' > Km et/ou Heures de fonctionnement:</label>
<label>jennie </label>
</td>
</tr>
<tr className="border-2 border-black ">
<td className="border-2 border-black pl-[5px]">
<label className='mr-[3px font-bold]' >Type:</label>
<label>jennie </label>
</td>
<td className="border-2 border-black "></td>
</tr>
</tbody>
</table>
<table className='table-auto border border-black   w-290 mt-7 absolute top-[55.4rem]'>
 <thead>
   <tr  >
     <th className=" border-l-2 border-r-2  border-black pl-[30px]">
       <h4 className='tracking-wide'>constat de la panne </h4>
     </th>
   </tr>
 </thead>
 <tbody>
   <tr className="border-2 border-black    h-[21rem] ">
     <td className="border-2 border-black  h-[21rem]   ">
 <span  className='w-full h-[21rem] py-[9px] px-[9px]'></span>
   </td>
   </tr>
 </tbody>
</table>
<table className='  table-auto border border-black     w-290 mt-7 absolute top-[78rem]'>
 <thead>
  <tr className="border-l-2 border-r-2 border-b-2 border-black  ">
  <th className="border-l-2 border-r-2 border-b-2 w-145 border-black text-center">
    <h4 className=''>Demandeur</h4>
  </th>
  <th className="border-l-2 border-r-2 border-b-2 w-145 border-black text-center">
    <h4 className=''>Responsable CDS Autres</h4>
  </th>
  </tr>
 </thead>
 <tbody>
  <tr className="border-l-2 border-r-2 border-b-2 w-290 border-black ">
    <td className="border-l-2 border-r-2 border-b-2 w-145 px-[5px] border-black ">
      <p  >Nom & Pénom :</p>
      <span></span>
    <p>Fonction :</p>
    <span></span>
    <p>Date</p>
    <span></span>
    </td>
    <td className="border-l-2 border-r-2 border-b-2 w-145 px-[5px] border-black ">
    <p>Nom & Pénom :</p>
      <span></span>
    <p>Fonction :</p>
    <span></span>
    <p>Date</p>
    <span></span>
    </td>
  </tr>
 </tbody>
</table>
<table className=' table-auto border border-black  py-[10px]   w-290 mt-7 absolute top-[85.8rem]'>
<thead className=' w-290'>
    <tr className='border-2 border-black ' >
        <th className='border-2 border-black w-full' >
            <h5 className='ml-20rem text-center'>Qualification de l'intervention</h5>
        </th>
    </tr>
</thead>
<tbody>
<tr className='  border-2 border-black  '>
    <td className='border-2 border-black '>
    <label
            htmlFor="diagnostique"
            className="  "
          >
            Diagnostic Préliminaire :
          </label>
          <br />
          <textarea
            id="diagnostique"
            className="input   h-[10rem]  px-3 py-1 text-sm  "  
            value={FormValue.diagnostique || ""}
            onChange={(e) => {
              SetFormValue("diagnostique", e.target.value);
               
            }}
            placeholder="Saisir le diagnostique préliminaire..."
          ></textarea>
    </td>
 <td className=' '>
 <label
            htmlFor="diagnostique"
            className="  "
          >
           Description de la nature des travaux :
          </label>
          <textarea
            id="descrition"
            className="input   min-h-[10rem]  px-3 py-1 text-sm  "  
            value={FormValue.descrition || ""}
            onChange={(e) => {
              SetFormValue("descrition", e.target.value);
               
            }}
            placeholder="Saisir le descrition préliminaire..."
          ></textarea>
 </td>
 <td className='border-2 border-black' >
  <h4>Niveaux de priorisation :</h4>
  <input type="radio" name='niveaux_prio' onClick={()=>SetFormValue("niveaux_prio","1")}
  id='niveaux_prio1'/>
  <label htmlFor="niveaux_prio1">(1)</label>
 <br />
 <input type="radio" name='niveaux_prio' onClick={()=>SetFormValue("niveaux_prio","2")}
  id='niveaux_prio2'/>
  <label htmlFor="niveaux_prio2">(2)</label>
  <br />
  <input type="radio" name='niveaux_prio' onClick={()=>SetFormValue("niveaux_prio","3")}
  id='niveaux_prio3'/>
  <label htmlFor="niveaux_prio3">(3)</label>
 </td>
 <td>
  
 <h4 className="text-md font-medium   mb-2">
               Nécessitent-ils un permis de travail ? :
             </h4>
             <div className="flex gap-4">
               <div>
                 <input
                   type="radio"
                   name="necess_permis"
                   id="permis-oui"
                   checked={ FormValue.necess_permis === true}
                   onChange={() => handlePermisChange("oui")}
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
                   checked={ FormValue.necess_permis === false}
                   onChange={() => handlePermisChange("non")}
                   className="mr-1 form-radio"
                 />
                 <label htmlFor="permis-non" className="text-sm">
                   Non
                 </label>
               </div>
             </div>
 
            
             {FormValue.necess_permis === true && (
               <div className="mt-4 pl-4 border-l-2  ">
                 {" "}
                 {/* Indentation visuelle */}
                 <h5 className="text-md font-medium   mb-2">
                   Si oui, type de permis :
                 </h5>
                 {/* Routinier */}
                 <div className="ROUTIN mb-3 flex flex-wrap items-center gap-2">
                   {" "}
                    
                   <input
                     type="radio"
                     name="travailTypeRadio"
                     id="routinier"
                     checked={ FormValue.routinier_ref.trim() !== ""}
                     onChange={() => handleRadioTravailClick("routin")}
                     className="mr-1 form-radio"
                   />
                   <label htmlFor=" routinier" className="text-sm flex-shrink-0">
                     Routinier - PT Réf :
                   </label>
                   <input
                     type="text"
                     id="routinRefInput"
                     placeholder="Référence..."
                     value={FormValue. routinier_ref}
                     onChange={(e) =>
                       handleTravailTypeChange("routin", e.target.value)
                     }
                     className="input   min-w-[150px]  border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"
                     disabled={FormValue.dangereux_ref.trim() !== ""}
                   />{" "}
                   {/* min-width */}
                 </div>
                 {/* Dangereux */}
                 <div className="DANGER mb-3 flex flex-wrap items-center gap-2">
                   <input
                     type="radio"
                     name="travailTypeRadio"
                     id="dangereux"
                     checked={FormValue.dangereux_ref.trim() !== ""}
                     onChange={() => handleRadioTravailClick("danger")}
                     className="mr-1 form-radio"
                   />
                   <label htmlFor="danger" className="text-sm flex-shrink-0">
                     Dangereux - PT Réf :
                   </label>
                   <input
                     type="text"
                     id="dangerRefInput"
                     placeholder="Référence..."
                     value={FormValue.dangereux_ref}
                     onChange={(e) =>
                       handleTravailTypeChange("danger", e.target.value)
                     }
                     className="input flex-1 min-w-[150px]  border border-gray-300 rounded-md px-3 py-1 text-sm "
                     disabled={FormValue.routinier_ref.trim() !== ""}
                   />
                 </div>
                 </div>
                 )}
               
 </td>
</tr>
</tbody>
</table>
<table className='  table-auto border border-black   h-[8rem]  w-290 mt-7 absolute top-[104.8rem]'>
 <thead>
  <tr className="border-l-2 border-r-2 border-b-2 border-black  ">
  <th className="border-l-2 border-r-2 border-2 w-145 border-black text-center">
    <h4 className=''>Demandeur</h4>
  </th>
  <th className="border-l-2 border-r-2 border-2 w-145 border-black text-center">
    <h4 className=''>Responsable CDS Autres</h4>
  </th>
  </tr>
 </thead>
 <tbody>
  <tr className="border-l-2 border-r-2 border-2 w-290 border-black ">
    <td className="border-l-2 border-r-2 border-b-2 w-145 px-[5px] border-black ">
      <label htmlFor="nom_prenom_intervevant">Nom & Prenom intervevant</label> 
     <input type="text"
     id='nom_prenom_intervevant'
     name='nom_prenom_intervevant'
     placeholder='................................................'
     value={FormValue.nom_prenom_intervevant} 
     onChange={(e)=>{SetFormValue("nom_prenom_intervevant",e.target.value)}}
     />
     <br />
     <label htmlFor="">Fonction :</label> 
     <input type="text"
     id='fonction_intervevant'
     name='fonction_intervevant'
     placeholder='................................................'
     value={FormValue.fonction_intervevant} 
     onChange={(e)=>{SetFormValue("fonction_intervevant",e.target.value)}}
     />
     <br />
     <label htmlFor=""> Date :</label> 
     <input type="Date"
     id='date_intervevant'
     name='date_intervevant'
     placeholder='................................................'
     value={FormValue.date_intervevant} 
     onChange={(e)=>{SetFormValue("date_intervevant",e.target.value)}}
     />
     <br />
    </td>
    <td className="border-l-2 border-r-2 border-b-2 w-145 px-[5px] border-black ">
    <label htmlFor="nom_prenom_intervevant">Nom & Prenom  responsable</label> 
     <input type="text"
     id='nom_prenom_responsable'
     name='nom_prenom_responsable'
     placeholder='................................................'
     value={FormValue.nom_prenom_responsable} 
     onChange={(e)=>{SetFormValue("nom_prenom_responsable",e.target.value)}}
     />
     <br />
     <label htmlFor="">Fonction :</label> 
     <input type="text"
     id='fonction_responsable'
     name='fonction_responsable'
     placeholder='................................................'
     value={FormValue.fonction_responsable} 
     onChange={(e)=>{SetFormValue("fonction_responsable",e.target.value)}}
     />
     <br />
     <label htmlFor=""> Date :</label> 
     <input type="Date"
     id='date_responsable'
     name='date_responsable'
     placeholder='................................................'
     value={FormValue.date_responsable} 
     onChange={(e)=>{SetFormValue("date_responsable",e.target.value)}}
     />
     <br />
    </td>
  </tr>
 </tbody>
</table>


<input type="submit" 
onClick={()=>{handleSubmit()}} value={"valider"}
className='absolute top-[115rem] left-[80rem]'
/>
 <button type='button'
 className='absolute top-[115rem] left-[5rem]'
 >abondoner</button>
 </div>
 
    );
  }