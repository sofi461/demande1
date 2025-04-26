// app/page.jsx
"use client"; // Nécessaire pour useRouter

import React from "react";
import { useRouter } from "next/navigation";
import InternalWorkTable from "./(intervention)/internal/page";
import ExternalWorkTable from "./(intervention)/external/page";

export default function HomePage() {
  // Renommé
  const router = useRouter();

  // Données statiques pour l'instant
  const vehicle = {
    marque: "Toyota",
    modele: "land cruiser",
    immatriculation: "7587956",
    annee: "2018",
  };

  const goToNext = () => {
    router.push("/page1"); // Navigue vers la première page du formulaire
  };

  return (
    // Envelopper dans un conteneur pour centrer/appliquer des marges si nécessaire
    // <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
    //   {" "}
    //   {/* Exemple de centrage */}
    //   <div className="p-6 bg-white shadow-md rounded-xl w-full max-w-2xl">
    //     <h2 className="text-2xl font-semibold mb-4 text-center text-blue-900">
    //       Informations Véhicule (Accueil)
    //     </h2>
    //     <div className="space-y-3 text-gray-700">
    //       <div>
    //         <strong>Marque :</strong> {vehicle.marque}
    //       </div>
    //       <div>
    //         <strong>Modèle :</strong> {vehicle.modele}
    //       </div>
    //       <div>
    //         <strong>Immatriculation :</strong> {vehicle.immatriculation}
    //       </div>
    //       <div>
    //         <strong>Année :</strong> {vehicle.annee}
    //       </div>
    //     </div>

    //     <div className="mt-8 text-center">
    //       {" "}
    //       {/* Marge et centrage bouton */}
    //       <button
    //         onClick={goToNext}
    //         className="bg-amber-500 text-white py-2 px-6 rounded hover:bg-amber-600 font-semibold shadow transition duration-150 ease-in-out" // Style amélioré
    //       >
    //         Démarrer la demande
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="App">
      <h1>Suivi des Travaux</h1>
      <InternalWorkTable />
      <br /> {/* Ajoute un espace entre les tableaux */}
      <ExternalWorkTable />
    </div>
  );
}
