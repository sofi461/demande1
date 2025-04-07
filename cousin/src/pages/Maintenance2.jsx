// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

// const Maintenance2 = () => {
//   const [description, setDescription] = useState("")
//   const navigator = useNavigate()
//   const [stepp, setStep] = useState(1)

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
//                   ? "text-green-500 text-sm font-semibold p-1 rounded-sm bg-green-100"
//                   : "text-gray-600 text-sm"
//               }`}
//             >
//               {label}
//             </div>
//           ))}
//         </div>

//         <label
//           htmlFor="descri"
//           className="text-yellow-600 font-semibold mb-2 block"
//         >
//           Description de la nature des travaux :
//         </label>
//         <textarea
//           id="descri"
//           className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 w-full"
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>

//         <div className="flex justify-between">
//           <button
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
//             onClick={() => {
//               const formData = {
//                 description,
//               }

//               localStorage.setItem("formData", JSON.stringify(formData))
//               navigator("/maintenance1")
//             }}
//           >
//             Précédent
//           </button>

//           <button
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
//             onClick={() => {
//               const existing =
//                 JSON.parse(localStorage.getItem("formData")) || {}

//               const updated = {
//                 ...existing,
//                 description,
//               }

//               localStorage.setItem("formData", JSON.stringify(updated))
//               navigator("/maintenance3")
//             }}
//           >
//             Suivant
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Maintenance2

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormData } from "../components/FormContext"

const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

const Maintenance2 = () => {
  const { formData, updateField } = useFormData()
  const [description, setDescription] = useState(formData.description || "")
  const [error, setError] = useState(false)
  const navigator = useNavigate()
  const stepp = 1

  const handleNext = () => {
    if (description.trim() === "") {
      setError(true)
      return
    }

    updateField("description", description)
    navigator("/maintenance3")
  }

  const handlePrevious = () => {
    updateField("description", description)
    navigator("/maintenance1")
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
                  ? "text-green-500 text-sm font-semibold p-1 rounded-sm bg-green-100"
                  : "text-gray-600 text-sm"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        <label
          htmlFor="descri"
          className="text-yellow-600 font-semibold mb-2 block"
        >
          Description de la nature des travaux :
        </label>
        <textarea
          id="descri"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-1 w-full"
          value={description}
          placeholder="Tapez ici la description..."
          onChange={(e) => {
            setDescription(e.target.value)
            if (e.target.value.trim() !== "") {
              setError(false)
            }
          }}
        ></textarea>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            Veuillez remplir la description pour continuer.
          </p>
        )}

        <div className="flex justify-between mt-2">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
            onClick={handlePrevious}
          >
            Précédent
          </button>

          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
            onClick={handleNext}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Maintenance2
