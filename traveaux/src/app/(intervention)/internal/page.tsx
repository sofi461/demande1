"use client"
import React, { useState, useEffect } from "react";
import {useFormData} from '../../components/FormContext'
function InternalWorkTable() {  
  const{formData,updateField}=useFormData();
  const [rows, setRows] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      travaux: "",
      atelier: "",
      temps: "", 
      pdr: "",
      coutPDR: "", 
      reference: "",
    }))
  );
  
  const [totalTemps, setTotalTemps] = useState(0);
   const [totalCoutpdr,setcoutpdr] = useState(0);
 
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value ;
    setRows(newRows); 
     
    const atelier_descs = newRows.map(row => row.atelier.trim()).filter(Boolean).join(" / ");
updateField("atelier_desc", atelier_descs);

const PDR_consommees = newRows.map(row => row.pdr.trim()).filter(Boolean).join(" / ");
updateField("PDR_consommee", PDR_consommees);

const reference_bc_bm_btms = newRows.map(row => row.reference.trim()).filter(Boolean).join(" / ");
updateField("reference_bc_bm_btm", reference_bc_bm_btms);
    let coutpdrSum = 0; 
    let tempsSum = 0; 
     rows.forEach((row) => {
       coutpdrSum += parseFloat(row.coutPDR) || 0; 
       tempsSum += parseFloat(row.temps) || 0;
     });
     setTotalTemps(tempsSum);
    setcoutpdr(coutpdrSum);
   updateField("cout_pdr",coutpdrSum.toFixed(2));
   updateField("temps_alloue",tempsSum.toFixed(2)); 
  };
  return (
    <div>
      <h1 className="text-center text-xl mt-[7px]">Liste des Travaux exécutés En Interne</h1>
      <table className="table-auto border border-black  w-[90%] left-[5%] mt-7 absolute top-[1rem]">
        <thead  className="border-2 border-black w-full ">
          <tr>
            <th className="border-2 border-black ">Liste des Travaux exécutés En Interne</th>
            <th className="border-2 border-black ">Atelier et/ou Intervenant</th>
            <th className="border-2 border-black ">Temps alloué (h)</th>
            <th className="border-2 border-black ">PDR Consommée</th>
            <th className="border-2 border-black ">Coût PDR</th>
            <th className="border-2 border-black ">Référence BC/BS/BTM</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr   className="border-2 border-black px-[10px] " key={row.id}>
              <td   className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                  
                  value={row.travaux}
                  onChange={(e) =>
                    handleInputChange(index, "travaux", e.target.value)
                  }
                />
              </td>
              <td   className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                  
                  value={row.atelier}
                  onChange={(e) =>
                    handleInputChange(index, "atelier", e.target.value)
                  }
                />
              </td>
              <td   className="border-2 border-black px-[10px] " >
                <input
                  type="number"  
                  
                  value={row.temps}
                  onChange={(e) =>
                    handleInputChange(index, "temps", e.target.value)
                  }
                  step="0.1" 
                  min="0"
                />
              </td>
              <td  className="border-2 border-black px-[10px] "   >
                <input
                  type="text"  
                   
                  value={row.pdr}
                  onChange={(e) =>
                    handleInputChange(index, "pdr", e.target.value)
                  }
                />
              </td>
              <td   className="border-2 border-black px-[10px] " >
                <input
                  type="number"  
                  
                  value={row.coutPDR}
                  onChange={(e) =>
                    handleInputChange(index, "coutPDR", e.target.value)
                  }
                  step="0.01" 
                  min="0"
                />
              </td>
              <td   className="border-2 border-black px-[10px] " >
                <input
                  type="text"
                 
                  value={row.reference}
                  onChange={(e) =>
                    handleInputChange(index, "reference", e.target.value)
                  }
                />
              </td>
          
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td   className="border-2 border-black px-[10px] "  >
              Total :
            </td>
            <td  className="border-2 border-black px-[10px] " ></td>
            <td  className="border-2 border-black px-[10px] " >{totalTemps.toFixed(1)} h</td>
            <td  className="border-2 border-black px-[10px] " ></td>
            <td  className="border-2 border-black px-[10px] " >{totalCoutpdr.toFixed(2)}</td> 
            <td  className="border-2 border-black px-[10px] "  ></td>
            
         
         
          </tr>
        </tfoot>
      </table>
      
    </div>
  );
}

export default InternalWorkTable;
