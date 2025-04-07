import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Vehicule = () => {
  const navigator = useNavigate()
  const [vehicule, setVehicule] = useState({
    code: "",
    marque: "",
    type: "",
    genre: "",
    km: "",
  })

  const next = () => {
    navigator("/maintenance1")
  }

  useEffect(() => {
    // simulez un fetch pour récupérer les données du véhicule
    const fetchVehiculeData = async () => {
      // ici vous pourrez appeler votre backend, par exemple :
      // const response = await fetch('/api/vehicule');
      // const data = await response.json();
      // setVehicule(data);

      // Pour l'instant, nous allons simuler les donnéew
      const simulatedData = {
        code: "V123",
        marque: "Toyota",
        type: "4x4",
        genre: "SUV",
        km: "120000",
      }
      setVehicule(simulatedData)

      // const formData = {
      //   natureprio,
      //   ouiounon,
      //   travail,
      //   datatravail,
      // }

      localStorage.setItem("formData", JSON.stringify(simulatedData))
    }

    fetchVehiculeData()

    //  hnaya takadrou dirou setlocalstorage si vous  voulez

    document.body.classList.add("h")
    return () => {
      document.body.classList.remove("h")
    }
  }, [])

  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col gap-6 text-gray-800">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="par1 mb-4">
          <label htmlFor="code" className="font-semibold text-yellow-600">
            Code :
          </label>
          <input
            type="text"
            id="code"
            value={vehicule.code}
            readOnly
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="par2 mb-4">
          <label htmlFor="marque" className="font-semibold text-yellow-600">
            Marque :
          </label>
          <input
            type="text"
            id="marque"
            value={vehicule.marque}
            readOnly
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="par3 mb-4">
          <label htmlFor="type" className="font-semibold text-yellow-600">
            Type :
          </label>
          <input
            type="text"
            id="type"
            value={vehicule.type}
            readOnly
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="par4 mb-4">
          <label htmlFor="genre" className="font-semibold text-yellow-600">
            Genre :
          </label>
          <input
            type="text"
            id="genre"
            value={vehicule.genre}
            readOnly
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <div className="par5 mb-4">
          <label htmlFor="km" className="font-semibold text-yellow-600">
            Km et/ou Heure de fonctionnement :
          </label>
          <input
            type="text"
            id="km"
            value={vehicule.km}
            readOnly
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>

        <button
          id="SUIVAN"
          onClick={next}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          Suivant
        </button>
      </div>
    </div>
  )
}

export default Vehicule
