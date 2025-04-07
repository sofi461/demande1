// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"

// const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

// const Page2 = () => {
//   const [consta, setConsta] = useState("")
//   const navigator = useNavigate()
//   const [stepp, setStep] = useState(3)

//   const pre = () => {
//     navigator("/maintenance3")
//   }

//   // const handleNext = () => {
//   //   const formData = {
//   //     consta,
//   //   }

//   //   localStorage.setItem("formData", JSON.stringify(formData))
//   //   navigator("/constat-final") // Remplacer par l'étape suivante si besoin tbadlou kach hajja
//   // }

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

//         <div className="constat mb-4">
//           <h4 className="font-semibold text-yellow-600 text-lg mb-2">
//             Constat de la panne
//           </h4>
//         </div>

//         <textarea
//           id="ES"
//           className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-4 w-full"
//           onChange={(e) => setConsta(e.target.value)}
//           placeholder="Décrivez le constat ici..."
//         ></textarea>

//         <div className="flex justify-between">
//           <button
//             id="APRESS"
//             onClick={() => {
//               const existing =
//                 JSON.parse(localStorage.getItem("formData")) || {}

//               const updated = {
//                 ...existing,
//                 consta,
//               }

//               localStorage.setItem("formData", JSON.stringify(updated))
//               navigator("/constat-final")
//             }}
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
//           >
//             Suivant
//           </button>

//           <button
//             id="PRE"
//             onClick={() => {
//               pre()
//               localStorage.setItem("consta", consta)
//             }}
//             className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
//           >
//             Avant
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page2


import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const stepss = ["Étape 1", "Étape 2", "Étape 3", "Étape 4"]

const Page2 = () => {
  const [consta, setConsta] = useState("")
  const [error, setError] = useState("")
  const navigator = useNavigate()
  const [stepp] = useState(3)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("formData")) || {}
    if (saved.consta) {
      setConsta(saved.consta)
    }
  }, [])

  const pre = () => {
    const updated = {
      ...(JSON.parse(localStorage.getItem("formData")) || {}),
      consta,
    }
    localStorage.setItem("formData", JSON.stringify(updated))
    navigator("/maintenance3")
  }

  const handleNext = () => {
    if (consta.trim() === "") {
      setError("Ce champ est obligatoire.")
      return
    }

    const existing = JSON.parse(localStorage.getItem("formData")) || {}

    const updated = {
      ...existing,
      consta: consta.trim(),
    }

    localStorage.setItem("formData", JSON.stringify(updated))
    navigator("/constat-final")
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

        <div className="constat mb-4">
          <h4 className="font-semibold text-yellow-600 text-lg mb-2">
            Constat de la panne
          </h4>
        </div>

        <textarea
          id="ES"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm mb-1 w-full"
          onChange={(e) => {
            setConsta(e.target.value)
            setError("") // reset l'erreur en cas de saisie
          }}
          value={consta}
          placeholder="Décrivez le constat ici..."
        ></textarea>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="flex justify-between">
          <button
            id="PRE"
            onClick={pre}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            Avant
          </button>

          <button
            id="APRESS"
            onClick={handleNext}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page2
