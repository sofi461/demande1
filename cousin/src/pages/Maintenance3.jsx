// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

// const Maintenance3 = () => {
//   const [diagnostic, setDiagnostic] = useState("")
//   const navigator = useNavigate()
//   const [stepp, setStep] = useState(2)

//   const pre = () => {
//     navigator("/maintenance2")
//   }

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
//           htmlFor="diagno"
//           className="text-yellow-600 font-semibold mb-2 block"
//         >
//           Diagnostic Préliminaire :
//         </label>
//         <textarea
//           id="diagno"
//           className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 w-full"
//           onChange={(e) => setDiagnostic(e.target.value)}
//         ></textarea>

//         <div className="flex justify-between">
//           <button
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
//             onClick={() => {
//               const formData = {
//                 diagnostic,
//               }

//               localStorage.setItem("formData", JSON.stringify(formData))
//               navigator("/maintenance2")
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
//                 diagnostic,
//               }

//               localStorage.setItem("formData", JSON.stringify(updated))
//               navigator("/page2")
//             }}
//           >
//             Suivant
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Maintenance3



import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

const Maintenance3 = () => {
  const navigator = useNavigate()
  const [stepp] = useState(2)
  const [diagnostic, setDiagnostic] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || {}
    if (savedData.diagnostic) {
      setDiagnostic(savedData.diagnostic)
    }
  }, [])

  const handlePrevious = () => {
    const updated = {
      ...(JSON.parse(localStorage.getItem("formData")) || {}),
      diagnostic,
    }
    localStorage.setItem("formData", JSON.stringify(updated))
    navigator("/maintenance2")
  }

  const handleNext = () => {
    if (diagnostic.trim() === "") {
      setError("Ce champ est obligatoire.")
      return
    }

    const updated = {
      ...(JSON.parse(localStorage.getItem("formData")) || {}),
      diagnostic: diagnostic.trim(),
    }

    localStorage.setItem("formData", JSON.stringify(updated))
    navigator("/page2")
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
          htmlFor="diagno"
          className="text-yellow-600 font-semibold mb-2 block"
        >
          Diagnostic Préliminaire :
        </label>
        <textarea
          id="diagno"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-1 w-full"
          value={diagnostic}
          onChange={(e) => {
            setDiagnostic(e.target.value)
            setError("") // clear error on typing
          }}
        ></textarea>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="flex justify-between">
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

export default Maintenance3

