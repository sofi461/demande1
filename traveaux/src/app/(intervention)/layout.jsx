// app/(intervention)/layout.jsx
"use client"; // Important car il rend FormProvider

import { FormProvider } from "../components/FormContext"; // Adapter le chemin si nécessaire

export default function InterventionLayout({ children }) {
  return (
    <FormProvider>
      {/* Appliquer le fond jaune ici pour toutes les pages du formulaire */}
      <div>{children}</div>
    </FormProvider>
  );
}
