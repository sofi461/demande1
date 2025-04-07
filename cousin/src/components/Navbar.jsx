import React from "react"

function Navbar() {
  return (
    <>
      {/* version web */}
      <div className="flex items-center gap-4 sticky top-0 bg-white p-4 shadow-md font-semibold w-full">
        <img
          src="/images/logo-naftal.png"
          alt="logo naftal"
          className="w-36 mr-auto"
        />
        <p>Accueil</p>
        <p>Infos</p>
        <p>Demande de ...</p>
        <p>Formulaires pour ...</p>
      </div>
    </>
  )
}

export default Navbar
