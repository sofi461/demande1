
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Vehic = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // const { vehicle } = location.state || {}

  // if (!vehicle) return <div>Aucune information sur le véhicule</div>  hadi ki ay khayar la voiture

  // hed l'objet juste comme exemple :
  const vehicle = {
    marque: "Toyota",
    modele: "land cruiser",
    immatriculation: "7587956",
    annee: "2018",
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-xl w-full max-w-2xl mx-auto lg:mt-20">
      <h2 className="text-2xl font-semibold mb-4">Informations Véhicule</h2>
      <div className="space-y-3">
        <div>
          <strong>Marque :</strong> {vehicle.marque}
        </div>
        <div>
          <strong>Modèle :</strong> {vehicle.modele}
        </div>
        <div>
          <strong>Immatriculation :</strong> {vehicle.immatriculation}
        </div>
        <div>
          <strong>Année :</strong> {vehicle.annee}
        </div>
        {/* Ajoute d'autres champs nécessaires ici */}
      </div>

      {/* Bouton suivant si rôle transport ou maintenance */}

      <div className="mt-6">
        <button
          onClick={() => {
            navigate("/page1")
          }}
          className="bg-amber-200 e py-2 px-4 rounded hover:bg-amber-300 font-semibold shadow border"
        >
          Suivant
        </button>
      </div>
    </div>
  )
}

export default Vehic
