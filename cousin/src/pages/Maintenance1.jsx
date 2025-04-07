// import React, { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"

// const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

// const Maintenance1 = () => {
//   const [natureprio, setNatureprio] = useState("")
//   const [ouiounon, setOuiounon] = useState("")
//   const [travail, setTravail] = useState("")
//   const [datatravail, setDatatravail] = useState("")
//   const navigator = useNavigate()
//   const [stepp, setStep] = useState(0)

//   return (
//     <div className="min-h-screen bg-yellow-50 p-6 flex flex-col gap-6 text-gray-800">
//       <div className="bg-white p-6 rounded-2xl shadow-md">
//         <div className="progress-bar1 mb-4">
//           {stepss.map((label, index) => (
//             <div
//               key={index}
//               className={`stepp inline-block mr-2 ${
//                 index === stepp
//                   ? "border-b-blue-800 border-b-4 p-3 font-bold text-blue-800"
//                   : index < stepp
//                   ? "text-green-500 text-sm font-semibold"
//                   : "text-gray-600 text-sm"
//               }`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>

//         <h4 className="text-yellow-600 font-semibold text-lg mb-4">
//           Qualification de l'intervention
//         </h4>

//         <div className="niveaux mb-6">
//           <h4 className="text-yellow-600 font-semibold text-md mb-2">
//             Niveaux de priorisation :
//           </h4>
//           <div className="flex gap-4">
//             <div>
//               <input
//                 type="radio"
//                 name="alg"
//                 id="w"
//                 onChange={() => setNatureprio("1")}
//                 className="mr-1"
//               />
//               <label htmlFor="w">(1)</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="alg"
//                 id="z"
//                 onChange={() => setNatureprio("2")}
//                 className="mr-1"
//               />
//               <label htmlFor="z">(2)</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="alg"
//                 id="T"
//                 onChange={() => setNatureprio("3")}
//                 className="mr-1"
//               />
//               <label htmlFor="T">(3)</label>
//             </div>
//           </div>
//         </div>

//         <div className="necessitent mb-6">
//           <h4 className="text-yellow-600 font-semibold text-md mb-2">
//             Nécessitent-ils un permis de travail ? :
//           </h4>
//           <div className="flex gap-4">
//             <div>
//               <input
//                 type="radio"
//                 name="on"
//                 id="oui"
//                 onClick={() => setOuiounon("oui")}
//                 className="mr-1"
//               />
//               <label htmlFor="oui">Oui</label>
//             </div>
//             <div>
//               <input
//                 type="radio"
//                 name="on"
//                 id="non"
//                 onClick={() => setOuiounon("non")}
//                 className="mr-1"
//               />
//               <label htmlFor="non">Non</label>
//             </div>
//           </div>

//           {ouiounon === "oui" && (
//             <>
//               <h4 className="text-yellow-600 font-semibold text-md mb-2">
//                 Si oui, s'agit-il d'un permis de travail ?
//               </h4>
//               <div className="ROUTIN mb-4">
//                 <input
//                   type="radio"
//                   name="rd"
//                   id="routin"
//                   onClick={() => setTravail("routin")}
//                   className="mr-1"
//                 />
//                 <label htmlFor="routin">Routinier - PT Réf :</label>
//                 <input
//                   type="text"
//                   id="routin"
//                   placeholder="Référence..."
//                   className="border border-gray-300 rounded-md px-3 py-1 text-sm ml-2"
//                   onChange={(e) => setDatatravail(e.target.value)}
//                 />
//               </div>
//               <div className="DANGER mb-4">
//                 <input
//                   type="radio"
//                   name="rd"
//                   id="danger"
//                   onClick={() => setTravail("danger")}
//                   className="mr-1"
//                 />
//                 <label htmlFor="danger">Dangereux - PT Réf :</label>
//                 <input
//                   type="text"
//                   id="danger"
//                   placeholder="Référence..."
//                   className="border border-gray-300 rounded-md px-3 py-1 text-sm ml-2"
//                   onChange={(e) => setDatatravail(e.target.value)}
//                 />
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <button
//           className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
//           onClick={() => {
//             const existing = JSON.parse(localStorage.getItem("formData")) || {}

//             const updated = {
//               ...existing,
//               natureprio,
//               ouiounon,
//               travail,
//               datatravail,
//             }

//             localStorage.setItem("formData", JSON.stringify(updated))
//             navigator("/maintenance2")
//           }}
//         >
//           Suivant
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Maintenance1

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormData } from "../components/FormContext"

const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

const Maintenance1 = () => {
  const navigate = useNavigate()
  const [stepp] = useState(0)
  const [error, setError] = useState(false)

  const { updateField, formData } = useFormData()

  const {
    natureprio = "",
    ouiounon = "",
    travail = "",
    datatravail = "",
  } = formData
  const handleNext = () => {
    const isValid =
      natureprio !== "" &&
      ouiounon !== "" &&
      (ouiounon === "non" || (travail !== "" && datatravail !== ""))

    if (isValid) {
      setError(false)
      navigate("/maintenance2")
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col gap-6 text-gray-800">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="progress-bar1 mb-4">
          {stepss.map((label, index) => (
            <div
              key={index}
              className={`stepp inline-block mr-2 ${
                index === stepp
                  ? "border-b-blue-800 border-b-4 p-3 font-bold text-blue-800"
                  : index < stepp
                  ? "text-green-500 text-sm font-semibold"
                  : "text-gray-600 text-sm"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <h4 className="text-yellow-600 font-semibold text-lg mb-4">
          Qualification de l'intervention
        </h4>

        <div className="niveaux mb-6">
          <h4 className="text-yellow-600 font-semibold text-md mb-2">
            Niveaux de priorisation :
          </h4>
          <div className="flex gap-4">
            {[1, 2, 3].map((val) => (
              <div key={val}>
                <input
                  type="radio"
                  name="alg"
                  id={`prio-${val}`}
                  checked={natureprio === val.toString()}
                  onChange={() => updateField("natureprio", val.toString())}
                  className="mr-1"
                />
                <label htmlFor={`prio-${val}`}>({val})</label>
              </div>
            ))}
          </div>
        </div>

        <div className="necessitent mb-6">
          <h4 className="text-yellow-600 font-semibold text-md mb-2">
            Nécessitent-ils un permis de travail ? :
          </h4>
          <div className="flex gap-4">
            <div>
              <input
                type="radio"
                name="on"
                id="oui"
                checked={ouiounon === "oui"}
                onChange={() => {
                  updateField("ouiounon", "oui")
                  updateField("travail", "")
                  updateField("datatravail", "")
                }}
                className="mr-1"
              />
              <label htmlFor="oui">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                name="on"
                id="non"
                checked={ouiounon === "non"}
                onChange={() => {
                  updateField("ouiounon", "non")
                  updateField("travail", "")
                  updateField("datatravail", "")
                }}
                className="mr-1"
              />
              <label htmlFor="non">Non</label>
            </div>
          </div>

          {ouiounon === "oui" && (
            <>
              <h4 className="text-yellow-600 font-semibold text-md mt-4 mb-2">
                Si oui, s'agit-il d'un permis de travail ?
              </h4>
              <div className="ROUTIN mb-4">
                <input
                  type="radio"
                  name="rd"
                  id="routin"
                  checked={travail === "routin"}
                  onChange={() => updateField("travail", "routin")}
                  className="mr-1"
                />
                <label htmlFor="routin">Routinier - PT Réf :</label>
                <input
                  type="text"
                  id="routinRef"
                  placeholder="Référence..."
                  value={datatravail}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm ml-2"
                  onChange={(e) => updateField("datatravail", e.target.value)}
                />
              </div>
              <div className="DANGER mb-4">
                <input
                  type="radio"
                  name="rd"
                  id="danger"
                  checked={travail === "danger"}
                  onChange={() => updateField("travail", "danger")}
                  className="mr-1"
                />
                <label htmlFor="danger">Dangereux - PT Réf :</label>
                <input
                  type="text"
                  id="dangerRef"
                  placeholder="Référence..."
                  value={datatravail}
                  className="border border-gray-300 rounded-md px-3 py-1 text-sm ml-2"
                  onChange={(e) => updateField("datatravail", e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        {error && (
          <div className="text-red-600 text-sm mt-2">
            Merci de remplir tous les champs obligatoires.
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
          onClick={handleNext}
        >
          Suivant
        </button>
      </div>
    </div>
  )
}

export default Maintenance1
