// src/context/FormContext.js
import React, { createContext, useContext, useState } from "react"

const FormContext = createContext()

export const useFormData = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    num: "",
    datePanne: "",
    heurePanne: "",
    district: "",
    cds: "",
    structure: "",
    code: "",
    genre: "",
    marque: "",
    kmHeures: "",
    type: "",
    constatPanne: "",
    nomDemandeur: "",
    fonctionDemandeur: "",
    dateDemandeur: "",
    visaDemandeur: "",
    nomResponsable: "",
    fonctionResponsable: "",
    dateResponsable: "",
    visaResponsable: "",
    diagnostic: "",
    natureTravaux: "",
    permisTravail: false,
    nomIntervenant: "",
    fonctionIntervenant: "",
    dateIntervenant: "",
    visaIntervenant: "",
  })

const updateField = (field, value) => {
  setFormData((prev) => {
    const updated = { ...prev, [field]: value }
    localStorage.setItem("formData", JSON.stringify(updated))
    return updated
  })
}


  return (
    <FormContext.Provider value={{ formData, updateField }}>
      {children}
    </FormContext.Provider>
  )
}
