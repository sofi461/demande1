 
"use client";  

import { FormProvider } from "../components/fromcontextrapport";  


export default function InterventionLayout({ children }) {
  return (
    <FormProvider>
      {/* Appliquer le fond jaune ici pour toutes les pages du formulaire */}
      <div  >{children}</div>
    </FormProvider>
  );
}
