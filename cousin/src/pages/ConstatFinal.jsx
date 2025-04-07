import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useFormData } from "../components/FormContext"

const ConstatFinal = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const { formData, updateField } = useFormData()
  // const [formData, setFormData] = useState({
  //   num: "",
  //   datePanne: "",
  //   heurePanne: "",
  //   district: "",
  //   cds: "",
  //   structure: "",
  //   code: "",
  //   genre: "",
  //   marque: "",
  //   kmHeures: "",
  //   type: "",
  //   constatPanne: "",
  //   nomDemandeur: "",
  //   fonctionDemandeur: "",
  //   dateDemandeur: "",
  //   visaDemandeur: "",
  //   nomResponsable: "",
  //   fonctionResponsable: "",
  //   dateResponsable: "",
  //   visaResponsable: "",
  //   diagnostic: "",
  //   natureTravaux: "",
  //   permisTravail: false,
  //   nomIntervenant: "",
  //   fonctionIntervenant: "",
  //   dateIntervenant: "",
  //   visaIntervenant: "",
  // })

  // const updateField = (field, value) => {
  //   setFormData((prev) => ({ ...prev, [field]: value }))
  // }

  useEffect(() => {
    console.log(localStorage.getItem("formData"))
  }, [])

  // const handlePrint = () => {
  //   const printWindow = window.open("", "_blank")
  //   printWindow.document.open()
  //   printWindow.document.write(`
  //     <html>
  //       <head>
  //         <title>DEMANDE D'INTERVENTION</title>
  //         <style>
  //           body {
  //             font-family: Arial, sans-serif;
  //             margin: 0;
  //             padding: 20px;
  //             font-size: 10px; /* Réduire la taille de la police globale */
  //           }
  //           h2 {
  //             text-align: center;
  //             margin-bottom: 10px; /* Réduire la marge */
  //             font-size: 1.4em; /* Ajuster la taille de la police */
  //           }
  //           h3 {
  //             margin-top: 20px; /* Réduire la marge */
  //             margin-bottom: 5px; /* Réduire la marge */
  //             font-size: 1.1em; /* Ajuster la taille de la police */
  //           }
  //           table {
  //             width: 100%;
  //             border-collapse: collapse;
  //             margin-bottom: 10px; /* Réduire la marge */
  //           }
  //           th,
  //           td {
  //             border: 1px solid black;
  //             padding: 5px; /* Réduire le rembourrage */
  //             text-align: left;
  //             vertical-align: top; /* Aligner le contenu en haut */
  //           }
  //           th {
  //             background-color: #f2f2f2;
  //             font-weight: bold;
  //             font-size: 0.9em; /* Ajuster la taille de la police */
  //           }
  //           td {
  //             font-size: 0.9em; /* Ajuster la taille de la police */
  //           }
  //           .logo {
  //             text-align: left;
  //             margin-bottom: 10px; /* Réduire la marge */
  //           }
  //           .logo img {
  //             height: 40px; /* Ajuster la hauteur du logo */
  //           }
  //           .section-title {
  //             margin-top: 20px;
  //             margin-bottom: 5px;
  //             font-weight: bold;
  //             font-size: 1.1em; /* Ajuster la taille de la police */
  //           }
  //           .small-text {
  //             font-size: 0.8em;
  //           }
  //           .top-aligned td {
  //             vertical-align: top;
  //           }
  //         </style>
  //       </head>
  //       <body>
  //         <div class="logo">
  //           <img src="URL_DE_VOTRE_LOGO" alt="NAFTAL Logo" />
  //         </div>
  //         <h2>DEMANDE D'INTERVENTION</h2>
  //         <p class="small-text">ER.NAF.MNT.09.V2</p>
  //         <p class="small-text" style="text-align: right;">Date d'application:</p>

  //         <p><strong>Direction Générale</strong></p>

  //         <table>
  //           <tr>
  //             <th style="width: 10%;">N°</th>
  //             <td style="width: 20%;">${formData.num}</td>
  //             <th style="width: 25%;">District / Autre :</th>
  //             <td style="width: 45%;">${formData.district}</td>
  //           </tr>
  //           <tr>
  //             <th style="white-space: nowrap;">Date Heure de la panne ou de l'avarie :</th>
  //             <td colspan="3">Le ${formData.datePanne} à ${
  //     formData.heurePanne
  //   }</td>
  //           </tr>
  //           <tr>
  //             <th>CDS / Autre :</th>
  //             <td>${formData.cds}</td>
  //             <th>Structure Maintenance Destinataire</th>
  //             <td>
  //               CDS <br />
  //               Garage secondaire / Atelier Réseau <br />
  //               UNM / District <br />
  //               Unité canalisation <br />
  //               Prestataire Externe
  //             </td>
  //           </tr>
  //         </table>

  //         <table>
  //           <tr>
  //             <th style="width: 20%;">Activité :</th>
  //             <th style="width: 30%;">Nature de la Panne :</th>
  //             <th style="width: 25%;">Nature des travaux :</th>
  //             <th style="width: 25%;">Degré d'urgence :</th>
  //           </tr>
  //           <tr>
  //             <td>
  //               Maintenance Installation fixe <br />
  //               Matériel Roulant <br />
  //               Navire <br />
  //               Autres
  //             </td>
  //             <td>
  //               Mécanique <br />
  //               Électrique <br />
  //               Autre
  //             </td>
  //             <td class="top-aligned">
  //               Maintenance Corrective <br />
  //               Maintenance Préventive <br />
  //               Travaux neufs <br />
  //               Modification <br />
  //               Expertise <br />
  //               Vérification Métrologique <br />
  //               Contrôle réglementaire
  //             </td>
  //             <td>
  //               (1) <br />
  //               (2) <br />
  //               (3)
  //             </td>
  //           </tr>
  //         </table>

  //         <h3 class="section-title">Identification du bien</h3>
  //         <table>
  //           <tr>
  //             <th style="width: 15%;">Code :</th>
  //             <td style="width: 35%;">${formData.code}</td>
  //             <th style="width: 15%;">Genre :</th>
  //             <td style="width: 35%;">${formData.genre}</td>
  //           </tr>
  //           <tr>
  //             <th>Marque :</th>
  //             <td>${formData.marque}</td>
  //             <th>Km et/ou Heures de fonctionnement :</th>
  //             <td>${formData.kmHeures}</td>
  //           </tr>
  //           <tr>
  //             <th>Type :</th>
  //             <td>${formData.type}</td>
  //             <th style="vertical-align: top;">Constat de la Panne :</th>
  //             <td style="vertical-align: top;">${formData.constatPanne}</td>
  //           </tr>
  //         </table>

  //         <table>
  //           <tr>
  //             <th style="width: 50%;">Demandeur</th>
  //             <th style="width: 50%;">Responsable CDS Autres</th>
  //           </tr>
  //           <tr>
  //             <th>Nom & Prénom :</th>
  //             <td>${formData.nomDemandeur}</td>
  //             <th style="width: 25%;">Nom & Prénom :</th>
  //             <td>${formData.nomResponsable}</td>
  //           </tr>
  //           <tr>
  //             <th>Fonction :</th>
  //             <td>${formData.fonctionDemandeur}</td>
  //             <th>Fonction :</th>
  //             <td>${formData.fonctionResponsable}</td>
  //           </tr>
  //           <tr>
  //             <th>Date :</th>
  //             <td>${formData.dateDemandeur}</td>
  //             <th>Date :</th>
  //             <td>${formData.dateResponsable}</td>
  //           </tr>
  //           <tr>
  //             <th>Visa :</th>
  //             <td>${formData.visaDemandeur}</td>
  //             <th>Visa :</th>
  //             <td>${formData.visaResponsable}</td>
  //           </tr>
  //         </table>

  //         <h3 class="section-title">Qualification de l'intervention</h3>
  //         <table>
  //           <tr>
  //             <th style="width: 35%;">Diagnostic Préliminaire :</th>
  //             <td style="width: 65%;">${formData.diagnostic}</td>
  //           </tr>
  //           <tr>
  //             <th>Description de la nature des travaux :</th>
  //             <td>${formData.natureTravaux}</td>
  //           </tr>
  //           <tr>
  //             <th>Niveaux de priorisation :</th>
  //             <td>${formData.priorite}</td>
  //           </tr>
  //           <tr>
  //             <th>Nécessitent-ils un permis de travail ?: Oui / Non</th>
  //             <td>${formData.permisTravail ? "Oui" : "Non"}</td>
  //           </tr>
  //         </table>
  //       </body>
  //     </html>
  //   `)
  //   printWindow.document.close()
  //   printWindow.print()
  //   printWindow.close()
  // }

  const handlePrint = () => {
    const printWindow = window.open("", "_blank")
    printWindow.document.open()
    printWindow.document.write(`
      <html>
        <head>
          <title>DEMANDE D'INTERVENTION - ${formData.num || ""}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 15px;
              padding: 0;
              font-size: 10px; /* Taille de police globale réduite */
              line-height: 1.2;
            }
            .header-table, table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 8px;
            }
            .header-table td {
              border: none;
              padding: 0;
              vertical-align: top;
            }
            h2 {
              text-align: center;
              margin: 0 0 5px 0;
              font-size: 1.4em;
              font-weight: bold;
            }
            h3 {
              margin-top: 15px;
              margin-bottom: 5px;
              font-size: 1.1em;
              font-weight: bold;
              background-color: #f2f2f2; /* Fond léger pour les titres de section */
              padding: 3px;
              border: 1px solid black;
            }
            table {
              border: 1px solid black; /* Bordure extérieure pour les tables principales */
            }
            th, td {
              border: 1px solid black;
              padding: 4px; /* Rembourrage réduit */
              text-align: left;
              vertical-align: top; /* Aligner le contenu en haut par défaut */
            }
            th {
              background-color: #f2f2f2;
              font-weight: bold;
              font-size: 0.95em;
            }
            td {
              font-size: 0.95em;
            }
            .logo img {
              height: 35px; /* Hauteur ajustée du logo */
              display: block;
            }
            .small-text {
              font-size: 0.8em;
              margin: 0;
              padding: 0;
            }
            .text-right {
              text-align: right;
            }
            .text-center {
              text-align: center;
            }
            .no-border td, .no-border th {
              border: none;
            }
            .checkbox-label {
              margin-right: 5px; /* Espace entre checkbox et texte */
            }
            .footer {
              margin-top: 20px;
              font-size: 8px;
              display: flex;
              justify-content: space-between;
              border-top: 1px solid black;
              padding-top: 3px;
            }
            /* Ajustements spécifiques pour correspondre au DOCX */
            .header-table .col-left { width: 33%; }
            .header-table .col-center { width: 34%; text-align: center; }
            .header-table .col-right { width: 33%; text-align: right; }

            /* Styles pour les tables spécifiques si besoin */
            .identification-table th:nth-child(1),
            .identification-table th:nth-child(3) { width: 20%; } /* Code, Genre */
            .identification-table th:nth-child(5) { width: 30%; } /* Km/Heures */

            .demandeur-table th { width: 20%; }
            .demandeur-table td { width: 30%; }

            .qualification-table th { width: 30%; }

            .signature-table th { width: 20%; }
            .signature-table td { width: 30%; }
          </style>
        </head>
        <body>
          <table class="header-table">
            <tr>
              <td class="col-left">
                <div class="logo">
                  <img src="URL_DE_VOTRE_LOGO" alt="NAFTAL Logo" onerror="this.style.display='none'" />
                </div>
                <p><strong>Direction Générale</strong></p>
              </td>
              <td class="col-center">
                <h2>DEMANDE D'INTERVENTION</h2>
              </td>
              <td class="col-right">
                <p class="small-text">ER.NAF.MNT.09.V2</p>
                <p class="small-text">Date d'application:</p>
              </td>
            </tr>
          </table>

          <table>
            <tr>
              <th style="width: 5%;">N°</th>
              <td style="width: 25%;">${formData.num || ""}</td>
              <th style="width: 20%;">District / Autre :</th>
              <td style="width: 50%;" colspan="3">${
                formData.district || ""
              }</td>
            </tr>
            <tr>
              <th style="white-space: nowrap;">Date Heure de la panne ou de l'avarie :</th>
              <td colspan="2">Le ${formData.datePanne || ""} à ${
      formData.heurePanne || ""
    }</td>
              <th style="width: 20%;">CDS / Autre :</th>
              <td colspan="2">${formData.cds || ""}</td>
            </tr>
             <tr>
              <th colspan="3">Structure Maintenance Destinataire</th>
              <td colspan="3">
                <span class="checkbox-label">${
                  formData.structureMaint === "cds" ? "☑" : "☐"
                } CDS</span> <span class="checkbox-label">${
      formData.structureMaint === "garage" ? "☑" : "☐"
    } Garage secondaire / Atelier Réseau</span> <span class="checkbox-label">${
      formData.structureMaint === "unm" ? "☑" : "☐"
    } UNM / District</span> <br/>
                <span class="checkbox-label">${
                  formData.structureMaint === "canalisation" ? "☑" : "☐"
                } Unité canalisation</span> <span class="checkbox-label">${
      formData.structureMaint === "externe" ? "☑" : "☐"
    } Prestataire Externe</span> </td>
            </tr>
          </table>

          <table>
            <tr>
              <th style="width: 25%;">Activité :</th>
              <th style="width: 20%;">Nature de la Panne :</th>
              <th style="width: 35%;">Nature des travaux :</th>
              <th style="width: 20%;">Degré d'urgence :</th>
            </tr>
            <tr>
              <td>
                ${
                  formData.activite === "fixe" ? "☑" : "☐"
                } Maintenance Installation fixe <br/> ${
      formData.activite === "roulant" ? "☑" : "☐"
    } Matériel Roulant <br/> ${
      formData.activite === "navire" ? "☑" : "☐"
    } Navire <br/> ${formData.activite === "autres" ? "☑" : "☐"} Autres </td>
              <td>
                ${
                  formData.naturePanne === "mecanique" ? "☑" : "☐"
                } Mécanique <br/> ${
      formData.naturePanne === "electrique" ? "☑" : "☐"
    } Électrique <br/> ${
      formData.naturePanne === "autre" ? "☑" : "☐"
    } Autre </td>
              <td>
                ${
                  formData.natureTravaux === "corrective" ? "☑" : "☐"
                } Maintenance Corrective <br/> ${
      formData.natureTravaux === "preventive" ? "☑" : "☐"
    } Maintenance Préventive <br/> ${
      formData.natureTravaux === "neufs" ? "☑" : "☐"
    } Travaux neufs <br/> ${
      formData.natureTravaux === "modif" ? "☑" : "☐"
    } Modification <br/> ${
      formData.natureTravaux === "expertise" ? "☑" : "☐"
    } Expertise <br/> ${
      formData.natureTravaux === "metro" ? "☑" : "☐"
    } Vérification Métrologique <br/> ${
      formData.natureTravaux === "reglementaire" ? "☑" : "☐"
    } Contrôle réglementaire </td>
              <td>
                ${formData.urgence === "1" ? "☑" : "☐"} (1) <br/> ${
      formData.urgence === "2" ? "☑" : "☐"
    } (2) <br/> ${formData.urgence === "3" ? "☑" : "☐"} (3) </td>
            </tr>
          </table>

          <h3 style="font-size:16; text-align:center;" >Identification du bien</h3>
          <table class="identification-table">
            <tr>
              <th>Code :</th>
              <td>${formData.code || ""}</td>
              <th>Genre :</th>
              <td>${formData.genre || ""}</td>
            </tr>
            <tr>
              <th>Marque :</th>
              <td>${formData.marque || ""}</td>
              <th>Km et/ou Heures de fonctionnement :</th>
              <td>${formData.kmHeures || ""}</td>
            </tr>
            <tr>
              <th>Type :</th>
              <td>${formData.type || ""}</td>
              <th style="vertical-align: top;">Constat de la Panne :</th>
              <td style="vertical-align: top;">${
                formData.constatPanne || ""
              }</td>
            </tr>
          </table>

          <table class="demandeur-table">
             <thead>
               <tr>
                 <th colspan="2" class="text-center">Demandeur</th>
                 <th colspan="2" class="text-center">Responsable CDS Autres</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                  <th>Nom & Prénom :</th>
                  <td>${formData.nomDemandeur || ""}</td>
                  <th>Nom & Prénom :</th>
                  <td>${formData.nomResponsable || ""}</td>
                </tr>
                <tr>
                  <th>Fonction :</th>
                  <td>${formData.fonctionDemandeur || ""}</td>
                  <th>Fonction :</th>
                  <td>${formData.fonctionResponsable || ""}</td>
                </tr>
                <tr>
                  <th>Date :</th>
                  <td>${formData.dateDemandeur || ""}</td>
                  <th>Date :</th>
                  <td>${formData.dateResponsable || ""}</td>
                </tr>
                <tr>
                  <th>Visa :</th>
                  <td style="height: 30px;">${formData.visaDemandeur || ""}</td>
                  <th>Visa :</th>
                  <td style="height: 30px;">${
                    formData.visaResponsable || ""
                  }</td>
                </tr>
             </tbody>
          </table>

          <h3 style="font-size:16; text-align:center;">Qualification de l'intervention</h3>
          <table class="qualification-table">
            <tr>
              <th>Diagnostic Préliminaire :</th>
              <td colspan="3">${formData.diagnostic || ""}</td>
            </tr>
            <tr>
              <th>Description de la nature des travaux :</th>
               <td colspan="3">${
                 formData.natureTravauxDesc || formData.natureTravaux || ""
               }</td> </tr>
            <tr>
              <th>Niveaux de priorisation :</th>
              <td>
                ${formData.priorite === "1" ? "☑" : "☐"} (1) ${
      formData.priorite === "2" ? "☑" : "☐"
    } (2) ${formData.priorite === "3" ? "☑" : "☐"} (3) </td>
              <th>Nécessitent-ils un permis de travail ?:</th>
              <td>
                ${formData.permisTravail ? "☑ Oui" : "☐ Oui"}  
                ${!formData.permisTravail ? "☑ Non" : "☐ Non"} </td>
            </tr>
             <tr>
                <th>Routinier-PT Réf :</th>
                <td>${formData.routRef || ""}</td>
                <th>Dangereux-PT Réf :</th>
                <td>${formData.danRef || ""}</td>
            </tr>
          </table>

           <table class="signature-table" style="margin-top: 15px;">
             <thead>
               <tr>
                 <th colspan="2" class="text-center">Intervenant</th>
                 <th colspan="2" class="text-center">Responsable CDS/UNM/Autre</th>
               </tr>
             </thead>
             <tbody>
                <tr>
                  <th>Nom & Prénom :</th>
                  <td>${formData.nomIntervenant || ""}</td>
                  <th>Nom & Prénom :</th>
                  <td>${formData.nomResponsableMaint || ""}</td> </tr>
                <tr>
                  <th>Fonction :</th>
                  <td>${formData.fonctionIntervenant || ""}</td>
                  <th>Fonction :</th>
                  <td>${formData.fonctionResponsableMaint || ""}</td> </tr>
                <tr>
                  <th>Date :</th>
                  <td>${formData.dateIntervenant || ""}</td>
                  <th>Date :</th>
                  <td>${formData.dateResponsableMaint || ""}</td> </tr>
                <tr>
                  <th>Visa HSE :</th>
                  <td style="height: 30px;">${
                    formData.visaHSE || ""
                  }</td> <th>Visa :</th>
                  <td style="height: 30px;">${
                    formData.visaResponsableMaint || ""
                  }</td> </tr>
             </tbody>
          </table>

          <div class="footer">
            <span>Date d'édition: janvier 2023</span>
            <span>Propriété NAFTAL - Reproduction interdite</span>
            <span>Page: 1 sur 1</span>
          </div>

        </body>
      </html>
    `)
    printWindow.document.close()
    // Donner un petit délai pour que le contenu soit rendu avant l'impression
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 250) // 250ms delay
  }
  const handleNext = () => {
    if (
      step === 1 &&
      (!formData.num ||
        !formData.datePanne ||
        !formData.heurePanne ||
        !formData.district ||
        !formData.cds)
    ) {
      alert("Veuillez remplir tous les champs requis.")
      return
    }
    if (
      step === 2 &&
      (!formData.code ||
        !formData.genre ||
        !formData.marque ||
        !formData.kmHeures ||
        !formData.type ||
        !formData.constatPanne ||
        !formData.nomDemandeur ||
        !formData.fonctionDemandeur ||
        !formData.dateDemandeur ||
        !formData.visaDemandeur ||
        !formData.nomResponsable ||
        !formData.fonctionResponsable ||
        !formData.dateResponsable ||
        !formData.visaResponsable)
    ) {
      alert("Veuillez remplir tous les champs requis.")
      return
    }
    if (
      step === 3 &&
      (!formData.diagnostic ||
        !formData.natureTravaux ||
        !formData.nomIntervenant ||
        !formData.fonctionIntervenant ||
        !formData.dateIntervenant ||
        !formData.visaIntervenant)
    ) {
      alert("Veuillez remplir tous les champs requis.")
      return
    }
    setStep((prev) => prev + 1)
  }

  const handleBack = () => setStep((prev) => prev - 1)

  const handleSubmit = () => {
    alert("Données soumises : " + JSON.stringify(formData, null, 2))
    // API call ici si besoin
    navigate("/confirmation")
  }

  useEffect(() => {
    document.body.classList.add("h")
    return () => document.body.classList.remove("h")
  }, [])

  return (
    <div className="flex justify-center items-center lg:my-20">
      <div className="bg-white shadow-lg lg:p-20 p-6 rounded-lg border-amber-300 border font-semibold w-full max-w-4xl">
        <h2 className="lg:text-3xl text-xl font-bold text-blue-900 text-center lg:mb-6 p-5 bg-blue-50 shadow">
          Demande d'intervention
        </h2>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5"
            >
              <h5 className="">DEMANDE D'INTERVENTION</h5>
              <div>
                <label htmlFor="num">N°: </label>
                <input
                  type="text"
                  id="num"
                  placeholder="Saisir le numéro"
                  className="input"
                  value={formData.num}
                  onChange={(e) => updateField("num", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="datePanne">Date de l'application :</label>
                <input
                  type="date"
                  id="datePanne"
                  className="input"
                  value={formData.datePanne}
                  onChange={(e) => updateField("datePanne", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="heurePanne">Heure de la panne :</label>
                <input
                  type="time"
                  id="heurePanne"
                  className="input"
                  value={formData.heurePanne}
                  onChange={(e) => updateField("heurePanne", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="district">District/Autre :</label>
                <input
                  type="text"
                  id="district"
                  placeholder="Saisir le district"
                  className="input"
                  value={formData.district}
                  onChange={(e) => updateField("district", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="cds">CDS/Autre:</label>
                <input
                  type="text"
                  id="cds"
                  placeholder="Saisir CDS"
                  className="input"
                  value={formData.cds}
                  onChange={(e) => updateField("cds", e.target.value)}
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5"
            >
              <h4 id="id">Identification du bien</h4>
              <div>
                <label htmlFor="code">Code :</label>
                <input
                  type="text"
                  id="code"
                  placeholder="Saisir le code"
                  className="input"
                  value={formData.code}
                  onChange={(e) => updateField("code", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="genre">Genre :</label>
                <input
                  type="text"
                  id="genre"
                  placeholder="Saisir le genre"
                  className="input"
                  value={formData.genre}
                  onChange={(e) => updateField("genre", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="marque">Marque :</label>
                <input
                  type="text"
                  id="marque"
                  placeholder="Saisir la marque"
                  className="input"
                  value={formData.marque}
                  onChange={(e) => updateField("marque", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="kmHeures">
                  Km et/ou Heures de fonctionnement :
                </label>
                <input
                  type="text"
                  id="kmHeures"
                  placeholder="Saisir le kilométrage ou heures"
                  className="input"
                  value={formData.kmHeures}
                  onChange={(e) => updateField("kmHeures", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="type">Type :</label>
                <input
                  type="text"
                  id="type"
                  placeholder="Saisir le type"
                  className="input"
                  value={formData.type}
                  onChange={(e) => updateField("type", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="constatPanne">Constat de la panne :</label>
                <textarea
                  id="constatPanne"
                  placeholder="Décrivez le constat de la panne"
                  className="input h-28 resize-none"
                  value={formData.constatPanne}
                  onChange={(e) => updateField("constatPanne", e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="nomDemandeur">Nom & Prénom :</label>
                <input
                  type="text"
                  id="nomDemandeur"
                  placeholder="Nom et prénom du demandeur"
                  className="input"
                  value={formData.nomDemandeur}
                  onChange={(e) => updateField("nomDemandeur", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="fonctionDemandeur">Fonction :</label>
                <input
                  type="text"
                  id="fonctionDemandeur"
                  placeholder="Fonction du demandeur"
                  className="input"
                  value={formData.fonctionDemandeur}
                  onChange={(e) =>
                    updateField("fonctionDemandeur", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="dateDemandeur">Date :</label>
                <input
                  type="date"
                  id="dateDemandeur"
                  className="input"
                  value={formData.dateDemandeur}
                  onChange={(e) => updateField("dateDemandeur", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="visaDemandeur">Visa :</label>
                <input
                  type="text"
                  id="visaDemandeur"
                  placeholder="Visa du demandeur"
                  className="input"
                  value={formData.visaDemandeur}
                  onChange={(e) => updateField("visaDemandeur", e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="nomResponsable">
                  Nom & Prénom Responsable :
                </label>
                <input
                  type="text"
                  id="nomResponsable"
                  placeholder="Nom et prénom du responsable"
                  className="input"
                  value={formData.nomResponsable}
                  onChange={(e) =>
                    updateField("nomResponsable", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="fonctionResponsable">Fonction :</label>
                <input
                  type="text"
                  id="fonctionResponsable"
                  placeholder="Fonction du responsable"
                  className="input"
                  value={formData.fonctionResponsable}
                  onChange={(e) =>
                    updateField("fonctionResponsable", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="dateResponsable">Date :</label>
                <input
                  type="date"
                  id="dateResponsable"
                  className="input"
                  value={formData.dateResponsable}
                  onChange={(e) =>
                    updateField("dateResponsable", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="visaResponsable">Visa :</label>
                <input
                  type="text"
                  id="visaResponsable"
                  placeholder="Visa du responsable"
                  className="input"
                  value={formData.visaResponsable}
                  onChange={(e) =>
                    updateField("visaResponsable", e.target.value)
                  }
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              <div>
                <label htmlFor="diagnostic">Diagnostic Préliminaire :</label>
                <textarea
                  id="diagnostic"
                  placeholder="Saisir le diagnostic"
                  className="input h-28 resize-none"
                  value={formData.diagnostic}
                  onChange={(e) => updateField("diagnostic", e.target.value)}
                ></textarea>
              </div>
              <div>
                <h4>Niveaux de priorisation :</h4>
                <div className="flex gap-2">
                  <input type="radio" id="priorite1" name="priorite" />
                  <label htmlFor="priorite1">(1)</label>
                  <input type="radio" id="priorite2" name="priorite" />
                  <label htmlFor="priorite2">(2)</label>
                  <input type="radio" id="priorite3" name="priorite" />
                  <label htmlFor="priorite3">(3)</label>
                </div>
              </div>
              <div>
                <h4>Nécessitent-ils un permis de travail ? :</h4>
                <div className="flex items-center gap-2">
                  <input type="radio" id="permisOui" name="permis" />
                  <label htmlFor="permisOui">Oui</label>
                  <input type="radio" id="permisNon" name="permis" />
                  <label htmlFor="permisNon">Non</label>
                </div>
              </div>
              <div>
                <label htmlFor="rout">Routinier-PT Réf :</label>
                <input
                  type="text"
                  id="rout"
                  placeholder="Saisir le numéro de référence"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="dan">Dangereux-PT Réf :</label>
                <input
                  type="text"
                  id="dan"
                  placeholder="Saisir le numéro de référence"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="nomIntervenant">
                  Nom & Prénom Intervenant :
                </label>
                <input
                  type="text"
                  id="nomIntervenant"
                  placeholder="Nom et prénom de l'intervenant"
                  className="input"
                  value={formData.nomIntervenant}
                  onChange={(e) =>
                    updateField("nomIntervenant", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="fonctionIntervenant">Fonction :</label>
                <input
                  type="text"
                  id="fonctionIntervenant"
                  placeholder="Fonction de l'intervenant"
                  className="input"
                  value={formData.fonctionIntervenant}
                  onChange={(e) =>
                    updateField("fonctionIntervenant", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="dateIntervenant">Date :</label>
                <input
                  type="date"
                  id="dateIntervenant"
                  className="input"
                  value={formData.dateIntervenant}
                  onChange={(e) =>
                    updateField("dateIntervenant", e.target.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="visaIntervenant">Visa HSE :</label>
                <input
                  type="text"
                  id="visaIntervenant"
                  placeholder="Visa de l'intervenant"
                  className="input"
                  value={formData.visaIntervenant}
                  onChange={(e) =>
                    updateField("visaIntervenant", e.target.value)
                  }
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              onClick={handleBack}
              className="bg-gray-200 hover:bg-gray-300 transition px-3 py-1 rounded-lg"
            >
              Retour
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="bg-amber-200 hover:bg-amber-300 transition px-3 py-1 rounded-lg"
            >
              Suivant
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-200 hover:bg-green-300 transition px-3 py-1 rounded-lg"
            >
              Envoyer
            </button>
          )}

          <button
            onClick={handlePrint}
            className="bg-blue-200 hover:bg-blue-300 transition px-3 py-1 rounded-lg"
          >
            Imprimer
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConstatFinal
