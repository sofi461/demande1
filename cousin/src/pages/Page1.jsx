import { span } from "framer-motion/client"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Page1 = () => {
  const navigator = useNavigate()
  const [step, setstep] = useState(0)
  const [num, setnum] = useState("")
  const [nature, setnature] = useState("")
  const [degre, setdegre] = useState("")
  const [datep, setdatep] = useState("")
  const [dateh, setdateh] = useState("")
  const [a, seta] = useState("")
  const [data, setdata] = useState("")
  const [nom, setNom] = useState("")
  const [fonction, setFonction] = useState("")
  const [date, setDate] = useState("")
  const [visa, setVisa] = useState("")

  const isFormValid = () => {
    return (
      datep.trim() !== "" &&
      dateh.trim() !== "" &&
      nature.trim() !== "" &&
      degre.trim() !== "" &&
      a.trim() !== "" &&
      data.trim() !== "" &&
      nom.trim() !== "" &&
      fonction.trim() !== "" &&
      date.trim() !== "" &&
      visa.trim() !== ""
    )
  }

  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col gap-6 text-gray-800">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="space-y-4 lg:max-w-1/4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom :
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              placeholder="Nom et prénom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fonction :
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => setFonction(e.target.value)}
              value={fonction}
              placeholder="Fonction"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date :
            </label>
            <input
              type="date"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Visa :
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm w-full"
              onChange={(e) => setVisa(e.target.value)}
              value={visa}
              placeholder="Visa"
            />
          </div>
        </div>

        <h4 className="text-yellow-600 font-semibold text-lg mb-4">
          Date & Heure de la panne ou de l'avarie :
        </h4>
        <div className="flex items-center gap-4 mb-6">
          <label htmlFor="LE" className="text-sm font-medium text-gray-700">
            Le :
          </label>
          <input
            type="date"
            id="LE"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            onChange={(e) => setdatep(e.target.value)}
            value={datep || dateh}
          />
          <label htmlFor="A" className="text-sm font-medium text-gray-700">
            à :
          </label>
          <input
            type="time"
            id="A"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            onChange={(e) => {
              setdateh(e.target.value)
            }}
          />
        </div>

        <h4 className="text-yellow-600 font-semibold text-lg mb-2">
          Nature de panne :
        </h4>
        {/* <div className="space-y-2 mb-6">
          <div>
            <input
              type="checkbox"
              id="mecanique"
              onChange={() => setnature("m")}
              required
            />
            <label htmlFor="mecanique" className="ml-2">
              Mécanique
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="électrique"
              onChange={() => setnature("e")}
            />
            <label htmlFor="électrique" className="ml-2">
              Électrique
            </label>
          </div>
          <div>
            <input type="checkbox" id="autre" onChange={() => setnature("a")} />
            <label htmlFor="autre" className="ml-2">
              Autre*
            </label>
          </div>
        </div> */}

        <div className="space-y-2 mb-6">
          <div>
            <input
              type="radio"
              id="mecanique"
              name="nature"
              onChange={() => setnature("m")}
              checked={nature === "m"}
            />
            <label htmlFor="mecanique" className="ml-2">
              Mécanique
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="electrique"
              name="nature"
              onChange={() => setnature("e")}
              checked={nature === "e"}
            />
            <label htmlFor="electrique" className="ml-2">
              Électrique
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="autre"
              name="nature"
              onChange={() => setnature("a")}
              checked={nature === "a"}
            />
            <label htmlFor="autre" className="ml-2">
              Autre*
            </label>
          </div>
        </div>

        <h4 className="text-yellow-600 font-semibold text-lg mb-2">
          Degré d'urgence :
        </h4>
        <div className="flex gap-6 mb-6">
          <div>
            <input
              type="radio"
              id="uno"
              name="type"
              onChange={() => setdegre("1")}
            />
            <label htmlFor="uno" className="ml-2">
              (1)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="deux"
              name="type"
              onChange={() => setdegre("2")}
            />
            <label htmlFor="deux" className="ml-2">
              (2)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="trois"
              name="type"
              onChange={() => setdegre("3")}
            />
            <label htmlFor="trois" className="ml-2">
              (3)
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h4 className="text-yellow-600 font-semibold text-lg mb-4">
          Structure Maintenance Destinataire :
        </h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input type="radio" name="hi" id="C" onChange={() => seta("a")} />
            <label htmlFor="C">CDS</label>
            <input
              type="text"
              id="Ce"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"
              onChange={(e) => {
                setdata(e.target.value)
                seta("a")
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="hi"
              id="garage"
              onChange={() => seta("b")}
            />
            <label htmlFor="garage">Garage secondaire / Atelier Réseau</label>
            <input
              type="text"
              id="garagee"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"
              onChange={(e) => {
                setdata(e.target.value)
                seta("b")
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            <input type="radio" name="hi" id="unm" onChange={() => seta("c")} />
            <label htmlFor="unm">UNM / District</label>
            <input
              type="text"
              id="unme"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"
              onChange={(e) => {
                setdata(e.target.value)
                seta("c")
              }}
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="hi"
              id="prestataire"
              onChange={() => seta("e")}
            />
            <label htmlFor="prestataire">Prestataire Externe</label>
            <input
              type="text"
              id="prestatairee"
              className="border border-gray-300 rounded-md px-3 py-1 text-sm flex-1"
              onChange={(e) => {
                setdata(e.target.value)
                seta("e")
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className={
            isFormValid()
              ? "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition"
              : "font-semibold px-6 py-2 text-red-500"
          }
          disabled={!isFormValid()}
          onClick={() => {
            const formData = {
              nature,
              degre,
              datep,
              dateh,
              a,
              data,
              nom,
              date,
              visa,
              fonction,
            }

            localStorage.setItem("formData", JSON.stringify(formData))
            navigator("/vehicule")
          }}
        >
          {isFormValid() ? (
            "Envoyer"
          ) : (
            <span className="">Veuillez remplir les champs obligatoires</span>
          )}
        </button>
      </div>
    </div>
  )
}

export default Page1
