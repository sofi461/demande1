import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Partie2 = () => {
  const [x, setx] = useState(0)
  const hi = () => {
    setx(5)
  }
  const navigator = useNavigate()
  return (
    <div className="partiee2">
      <h4 id="id">Identification du bien</h4>
      <div class="marcs">
        <div class="m">
          <label htmlFor="code">Code :</label>
          <input
            type="text"
            id="codeee"
            placeholder="..........................."
          />
        </div>
        <div class="ar">
          <label htmlFor="g">Genre :</label>
          <input type="text" id="g" placeholder="..........................." />
        </div>
        <div class="r">
          <label htmlFor="mar">Marque :</label>
          <input
            type="text"
            id="mar"
            placeholder="..........................."
          />
        </div>
        <div class="c">
          <label htmlFor="k">Km et/ou Heures de fonctionnement :</label>
          <input type="text" id="k" placeholder="..........................." />
        </div>
        <div class="s">
          <label htmlFor="ty">Type :</label>
          <input
            type="text"
            id="ty"
            placeholder="..........................."
          />
        </div>
        <div class="vide"></div>
      </div>
      <div class="const">
        <h4>Constat de la panne </h4>
      </div>
      <textarea id="es" disabled>
        {localStorage.getItem("consta")}
      </textarea>
      <div class="grid">
        {" "}
        <div class="dd">
          <h4 id="d">Demandeur</h4>
        </div>
        <div class="drr">
          <h4 id="r">Responsable CDS Autre</h4>
        </div>
      </div>
      <div class="p4">
        <div class="pd">
          <label htmlFor="nomd">Nom & Prénom :</label>
          <input type="text" id="nomd" />
          <br />
          <label htmlFor="foncp">Fonction :</label>
          <input type="text" id="foncp" />
          <br />
          <label htmlFor="datep">Date :</label>
          <input type="date" id="datep" />
          <br />
          <label htmlFor="visap">Visa :</label>
          <input type="text" id="visap" />
        </div>

        <div class="pr">
          <label htmlFor="nomr">Nom & Prénom :</label>
          <input type="text" id="nomr" />
          <br />
          <label htmlFor="foncr">Fonction :</label>
          <input type="text" id="foncr" />
          <br />
          <label htmlFor="dater">Date :</label>
          <input type="date" id="dater" />
          <br />
          <label htmlFor="visar">Visa :</label>
          <input type="text" id="visar" />
        </div>
      </div>
      <button
        id="apres"
        onClick={() => {
          navigator("/Partie3")
        }}
      >
        SUIVANT
      </button>
      <button id="prece" onClick={() => navigator("/intro")}>
        PRECEDENT
      </button>
    </div>
  )
}

export default Partie2
