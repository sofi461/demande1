"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export const userapportData = () => useContext(FormContext);

// Liste des champs attendus
const defaultKeys = {
  numero: "",
  datedébut: "",
  heuredébut: "",
  datefin: "",
  heurefin: "",
  numeroor: "",
  datedeprise: "",
  heuredeprise: "",
  naturedesessais :"",
  essaisoutest:"",
  réserver : "",
  referencedocumente :"",
  datefinpermisdetravail:"",
  etablipar: "",
  verifiepar : "",
  validepar :"",
  nomintervenant :"",
  intervenant : "",
  dateintervenant :"",
  ResponsableMaintenance :"",
  nomresponsable :"",
  dateresponsable :"",
  demandeur :"",
  nomdemandeur :"",
  datedemandeur:"",
 dateapplication :"",
 laduréedetravail:"",
};

export const FormProvider = ({ children }) => {
  const getInitialFormData = () => {
    if (typeof window !== "undefined") {
      try {
        const savedData = localStorage.getItem("rapportdata");
        return savedData
          ? { ...defaultKeys, ...JSON.parse(savedData) }
          : { ...defaultKeys };
      } catch (error) {
        console.error("Error parsing formData from localStorage", error);
        return { ...defaultKeys };
      }
    }
    return { ...defaultKeys };
  };

  const [rapportdata, setrapportdata] = useState(getInitialFormData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("rapportdata", JSON.stringify(rapportdata));
      } catch (error) {
        console.error("Error saving rapportdata to localStorage", error);
      }
    }
  }, [rapportdata]);

  const setrapport = (field, value) => {
    setrapportdata((prev) => {
      if (Object.prototype.hasOwnProperty.call(defaultKeys, field)) {
        return { ...prev, [field]: value };
      } else {
        console.warn(`Attempted to update non-existent field: ${field}`);
        return prev;
      }
    });
  };

  const updateMultipleField = (dataObject) => {
    setrapportdata((prev) => {
      const updated = { ...prev };
      let hasChanged = false;
      for (const field in dataObject) {
        if (Object.prototype.hasOwnProperty.call(defaultKeys, field)) {
          if (updated[field] !== dataObject[field]) {
            updated[field] = dataObject[field];
            hasChanged = true;
          }
        } else {
          console.warn("Attempted to update non-existent field: ${field}");
        }
      }
      return hasChanged ? updated : prev;
    });
  };

  return (
    <FormContext.Provider value={{ rapportdata, setrapport, updateMultipleField }}>
      {children}
    </FormContext.Provider>
);
};