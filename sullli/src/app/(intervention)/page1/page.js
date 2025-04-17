// app/(intervention)/page1/page.jsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useFormData } from "../../components/FormContext.jsx";
import RadioGroup from "@/app/components/RadioGroup.jsx";

export default function Page1() {
  const router = useRouter();
  const { formData, updateField } = useFormData();

  const isFormValid = () => {
    return !!(
       
      (
        formData.datePanne?.trim() &&
        formData.heurePanne?.trim() &&
        formData.naturePanne?.trim() &&
        formData.urgence?.trim() &&
        (formData.structureMaint?.trim() ||
          formData.district?.trim() ||
          formData.cds?.trim() ||
          formData.canalisation?.trim()||
          formData.garage?.trim()||
          formData.externe?.trim()||
          formData.structureDetail?.trim()) &&  
        formData.nomDemandeur?.trim() &&
        formData.fonctionDemandeur?.trim() &&
        formData.dateDemandeur?.trim() &&
        formData.visaDemandeur?.trim()
      )
    );
  };

  const handleStructureChange = (structureValue, textValue = null) => {
    updateField("structureMaint", structureValue);
    // Réinitialiser les champs associés
    updateField("cds", "");
    updateField("district", ""); 
   updateField("garage" ,"");
   updateField("externe" ,"");
   updateField("canalisation","");

   
    if (textValue !== null) {
      if (structureValue === "cds") {
        updateField("cds", textValue);
      } else if (structureValue === "unm") {
        updateField("district", textValue);
      } else if (
        structureValue === "garage"  
      ) {
            updateField("garage", textValue);
      }else if(structureValue==="externe"){
        updateField("externe",textValue)
      }else {updateField("canalisation",textValue)}
    }
  };

  const handleNavigation = () => {
    if (isFormValid()) {
      router.push("/vehicule"); 
     console.log(formData);
     
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };

 
  const structureOptions = [
    { value: "cds", label: "CDS" },
    { value: "garage", label: "Garage secondaire / Atelier Réseau" },
    { value: "unm", label: "UNM / District" },
    { value: "canalisation", label: "Unité canalisation" },
    { value: "externe", label: "Prestataire Externe" },
  ];
  const naturePanneOptions = [
    { value: "mecanique", label: "Mécanique" },
    { value: "electrique", label: "Électrique" },
    { value: "autre", label: "Autre" },
  ];
  const urgenceOptions = [
    { value: "1", label: "(1)" },
    { value: "2", label: "(2)" },
    { value: "3", label: "(3)" },
  ];

  return (
    <div className="p-6 flex flex-col gap-6 text-gray-800">
      {/* Section Demandeur */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h4 className="text-yellow-600 font-semibold text-lg mb-4">Demandeur</h4>
        <div className="space-y-4 lg:max-w-1/4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom :
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => updateField("nomDemandeur", e.target.value)}  
              value={formData.nomDemandeur || ""}  
              placeholder="Nom et prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fonction :
            </label>
            <input
              type="text"
              className=" border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => updateField("fonctionDemandeur", e.target.value)}
              value={formData.fonctionDemandeur || ""}
              placeholder="Fonction"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date :
            </label>
            <input
              type="date"
              className=" border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => updateField("dateDemandeur", e.target.value)}
              value={formData.dateDemandeur || ""}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Visa :
            </label>
            <input
              type="text"
              className=" border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => updateField("visaDemandeur", e.target.value)}
              value={formData.visaDemandeur || ""}
              placeholder="Visa"
            />
          </div>
        </div>
      </div>

      {/* Section Panne & Urgence */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
      
        <h4 className="text-yellow-600 font-semibold text-lg mb-4">
          Date & Heure de la panne ou de l'avarie
        </h4>
        <div className="flex items-center gap-4 mb-6">
          <label
            htmlFor="datePanne"
            className="text-sm font-medium text-gray-700"
          >
            Le :
          </label>
          <input
            type="date"
            id="datePanne"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            onChange={(e) => updateField("datePanne", e.target.value)}  
            value={formData.datePanne || ""}  
          />
          <label
            htmlFor="heurePanne"
            className="text-sm font-medium text-gray-700"
          >
            à :
          </label>
          <input
            type="time"
            id="heurePanne"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            onChange={(e) => updateField("heurePanne", e.target.value)}  
            value={formData.heurePanne || ""}  
          />
        </div>
        <h4 className="text-yellow-600 font-semibold text-lg mb-2">
          Nature de panne :
        </h4>
        <div className="  mb-6">
          <RadioGroup
            name="naturePanne"
            
            options={naturePanneOptions}
            formData={formData}
            updateField={updateField}
          />
          <div className="div">
        <h4 className="text-yellow-600 font-semibold text-lg mb-2 mt-4">
          Degré d'urgence :
        </h4>
          <RadioGroup
            name="urgence"
labelClassName= "text-yello-600 font-semibold text-lg mb-2"
            options={urgenceOptions}
            formData={formData}
            updateField={updateField}
          />
          </div>
        </div>
      </div>

      {/* Section Structure Maintenance */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h4 className=" text-yellow-600 font-semibold text-lg mb-4">
          Structure Maintenance Destinataire :
        </h4>
        <div className="space-y-4">
          {structureOptions.map((option) => (
            <div className="flex items-center gap-3" key={option.value}>
              <input
                type="radio"
                name="structureMaintRadio"
                id={`struct-${option.value}`}
                checked={formData.structureMaint === option.value}
                onChange={() =>
                  handleStructureChange(
                    option.value,
                    formData[
                      option.value === "cds"
                        ? "cds"
                        : option.value === "unm"
                        ? "district"
                        : option.value==="garage"
                        ? "garage"
                        : option.value==="externe"
                        ? "externe"
                        :  option.value ==="canalisation"
                        ? "canalisation"
                        : ""
                    ]
                  )
                }  
              />
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
                <input
                  type="text"
                   
                  id={`${option.value}Input`}
                  className=" border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"
                  placeholder={`Préciser ${option.label}...`}
                  value={
                    formData[
                      option.value === "cds"
                        ? "cds"
                        : option.value === "unm"
                        ? "district"
                        :   option.value === "garage"
                        ? "garage"
                        :   option.value === "externe"
                        ? "externe"
                        : option.value === "canalisation"
                        ? "canalisation"
                        :""
                    ] 
                  }  
                  onChange={(e) =>
                    handleStructureChange(option.value, e.target.value)
                  }  
                  disabled={formData.structureMaint !== option.value}  
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bouton Suivant */}
      <div className="flex justify-end mt-6">
        <button
          className={
            isFormValid()
              ? "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
              : "bg-gray-400 cursor-not-allowed text-white font-semibold px-6 py-2 rounded-lg shadow"
          }
          disabled={!isFormValid()}
          onClick={handleNavigation}
        >
          {isFormValid() ? "Suivant" : "Veuillez remplir les champs"}
        </button>
      </div>
    </div>
  );
}
