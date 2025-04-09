 
"use client";  

import { FormProvider } from "../components/FormContext";  

export default function InterventionLayout({ children }) {
  return (
    <FormProvider>
      {/* Appliquer le fond jaune ici pour toutes les pages du formulaire */}
      <div className="min-h-screen bg-yellow-50">{children}</div>
    </FormProvider>
  );
}
