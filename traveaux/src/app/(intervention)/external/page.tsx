"use client"
import React, { useState, useEffect } from "react";
import {useFormData} from '../../components/FormContext'
function ExternalWorkTable() {
  const{formData,updateField}=useFormData();
   
  const [rows, setRows] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
       
      travaux: "",
        prestataire: "",
        refContrat: "",
        refFacture: "",
         coutFacture: "",
    }))
  );
  
  const [totalCoutFacture, setTotalCoutFacture] = useState(0);
  useEffect(() => {
     
  }, [rows]); 
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value ;
    setRows(newRows); 
    const reference_contrats = newRows.map(row => row.refContrat.trim()).filter(Boolean).join(" / ");
    updateField("reference_contrat", reference_contrats);
    const newPrestataires = newRows.map(row => row.prestataire.trim()).filter(Boolean).join(" / ");
    updateField("design_prestataire", newPrestataires);
    const  reference_factures = newRows.map(row => row.refFacture.trim()).filter(Boolean).join(" / ");
    updateField("reference_facture", reference_factures);
   
    let coutFactureSum = 0; 
     rows.forEach((row) => {
       coutFactureSum += parseFloat(row.coutFacture) || 0; 
       
     });
 
     setTotalCoutFacture(coutFactureSum);
   updateField("cout_facture",coutFactureSum.toFixed(2));
    
  };
 
//  } 
  return (
    <div>
     <h1 className="text-center text-xl mt-[7px]">liste des travaux externes</h1>
       <table className="table-auto border border-black  w-[90%] left-[5%] mt-7 absolute top-[1rem]"> 
        <thead className="border-2 border-black w-full ">
          <tr className="border-2 border-black ">
            <th className="border-2 border-r-2 border-black  ">Liste des Travaux réalisés en Externe</th>
            <th className="border-2 border-black ">Désignation du Prestataire</th>
            <th  className="border-2 border-black ">Référence du Contrat et/ou Bon commande</th>
            <th className="border-2 border-black ">Référence de la Facture</th>
            <th className="border-2 border-black ">Coût facturé</th>
             
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr  className="border-2 border-black px-[10px] " key={row.id}>
              <td className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                   
                  value={row.travaux}
                  onChange={(e) =>
                    handleInputChange(index, "travaux", e.target.value)
                  }
                />
              </td>
              <td className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                   
                  value={row.prestataire}
                  onChange={(e) =>
                    handleInputChange(index, "prestataire", e.target.value)
                  }
                />
              </td>
              <td className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                
                  value={row.refContrat}
                  onChange={(e) =>
                    handleInputChange(index, "refContrat", e.target.value)
                  }
                />
              </td>
              <td className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                   
                  value={row.refFacture}
                  onChange={(e) =>
                    handleInputChange(index, "refFacture", e.target.value)
                  }
                />
              </td>
              <td className=" !border-l-2 border-2 border-black px-[10px] ">
                <input
                  type="number" 
                  
                  value={row.coutFacture}
                  onChange={(e) =>
                    handleInputChange(index, "coutFacture", e.target.value)
                  }
                  step="0.01"  
                  min="0"
                />
              </td>
             
               
            </tr>
          ))}
        </tbody>
        <tfoot >
          <tr className="border-2 border-black px-[10px] ">
            <td className="border-2 border-black px-[10px] " >
              Total :
            </td>
            <td className="border-2 border-black px-[10px] "></td>
            <td className="border-2 border-black px-[10px] "></td>
            <td className="border-2 border-black px-[10px] "></td>
            <td className="border-2 border-black px-[10px] ">{totalCoutFacture.toFixed(2)}</td> 
          </tr>
        </tfoot>
      </table>
      
    </div>
  );
}

export default ExternalWorkTable;
