 "use client"; // Important

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";  
import { useFormData } from "../../components/FormContext";  
import RadioGroup from "../../components/RadioGroup";  

export default function ConstatFinalPage() {
  const router = useRouter();
  const { formData } = useFormData();
const [x,setx]=useState("")
  useEffect(() => {
    console.log("Form data loaded for final review:", formData);
  }, [formData]);
  const RadioGroup = (
    { name, options, label, disabled, formData } // Ajout de formData pour lire la valeur cochée
  ) => (
    <div>
      <label className="block mb-2  ">{label} :</label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center space-x-2 ${
              disabled ? "cursor-not-allowed opacity-70 text-sm" : ""
            }`}
          >
            <input
              type="radio"
              name={name + (disabled ? "-disabled" : "")} // Nom unique pour groupes désactivés si nécessaire
              value={option.value}
              // Lire la valeur depuis formData passé en prop
              checked={formData && formData[name] === option.value}
              className="form-radio h-4 w-4 text-blue-600"
              disabled={disabled}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
  const handlePrint = () => {
    // ... Code de handlePrint (inchangé) ...
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>DEMANDE D'INTERVENTION - ${formData.num || ""}</title>
                   <style>
            /* --- Styles CSS (inchangés) --- */
             body { font-family: Arial, sans-serif; margin: 15px; padding: 0;border:1px solid yellow ;font-size: 10px; line-height: 1.3; }
            .header-table, table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
            .header-table td { border: none; padding: 0; vertical-align: top; }
            h2 { text-align: center; margin: 0 0 5px 0; font-size: 1.4em; font-weight: bold; }
            h3 { margin-top: 15px; margin-bottom: 0px; font-size: 1.1em; font-weight: bold; background-color: #e0e0e0; padding: 4px 6px; border: 1px solid black; border-bottom: none; text-align: center; }
            table { border: 1px solid black; }
            th, td { border: 1px solid black; padding: 5px; text-align: left; vertical-align: top; }
            th { background-color: #f2f2f2; font-weight: bold; font-size: 0.95em; text-align: center; }
            td { font-size: 0.95em; line-height: 1.4; }
          
            .logo img { height: 35px; display: block; object-fit: fill; width:30%; height:20%; }
            .small-text { font-size: 0.8em; margin: 0; padding: 0; }
            .text-right { text-align: right; }
            .text-center { text-align: center; }
            .no-border td, .no-border th { border: none; }
            .checkbox-label { display: block; margin-bottom: 3px; white-space: nowrap; }
            .checkbox-label-inline { display: inline-block; margin-right: 10px; white-space: nowrap; }
            .footer { margin-top: 20px; font-size: 8px; display: flex; justify-content: space-between; border-top: 1px solid black; padding-top: 3px; }
            .header-table .col-left { width: 33%; }
            .header-table .col-center { width: 34%; text-align: center; }
            .header-table .col-right { width: 33%; text-align: right; }
            .info-table-3col td { vertical-align: top; padding: 6px; }
            .info-table-3col .info-col-left { width: 30%; }
            .info-table-3col .info-col-middle { width: 30%; border-left: 1px solid black; border-right: 1px solid black;}
            .info-table-3col .info-col-right { width: 40%; }
            .info-label { font-weight: bold; display: block; margin-bottom: 2px; }
            .info-value { display: block; margin-bottom: 8px; }
            .info-col-right strong { display: block; font-weight: bold; margin-bottom: 4px; text-align: center; }
            .category-table th { background-color: #f2f2f2; text-align: left; padding: 6px; font-size: 1em; width: 50%; }
            .category-table td { padding: 6px; width: 50%; vertical-align: top; }
            .identification-table th.label-cell { width: 15%; font-weight: bold; background-color: transparent; text-align: left; }
            .identification-table th.header-cell { width: 100%; font-weight: bold; background-color: #f2f2f2; text-align: center; }
            .identification-table td { width: 35%; }
            .identification-table td.full-width { width: 100%; height: 50px; vertical-align: top; }
            .identification-table td.empty-cell { }
            .demandeur-table th { width: 20%; font-weight:bold; text-align:left; background-color: transparent;}
            .demandeur-table thead th { background-color: #f2f2f2; text-align:center;}
            .qualification-layout-table td { vertical-align: top; padding: 6px; }
            .qualification-layout-table td:nth-child(1) { width: 30%; min-height: 60px; }
            .qualification-layout-table td:nth-child(2) { width: 30%; min-height: 60px; }
            .qualification-layout-table td:nth-child(3) { width: 15%; }
            .qualification-layout-table td:nth-child(4) { width: 25%; }
            .qualification-layout-table strong { display: block; margin-bottom: 3px; font-weight: bold; }
            .qualification-layout-table .ref-label { display: inline-block; font-weight: bold; margin-right: 5px; }
            .signature-table th { width: 20%; font-weight:bold; text-align:left; background-color: transparent;}
            .signature-table thead th { background-color: #f2f2f2; text-align:center;}
          </style>
        </head>
        <body>
           
             <table class="header-table">
                <tr>
                <td class="col-left">
                    <div class="logo">
                    <img src="/logo-naftal.png" alt="NAFTAL Logo" onerror="this.style.display='none'" />
                    </div>
                    <p><strong>Direction Générale</strong></p>
                </td>
                <td class="col-center"><h2>DEMANDE D'INTERVENTION</h2></td>
                <td class="col-right">
                    <p class="small-text">ER.NAF.MNT.09.V2</p>
                    <p class="small-text">Date d'application:</p>
                </td>
                </tr>
            </table>

            <table class="info-table-3col">
                <tr>
                <td class="info-col-left">
                    <div><span class="info-label">N°:</span><span class="info-value">${
                      formData.num || ""
                    }</span></div>
                    <div><span class="info-label">Date Heure de la panne ou de l'avarie:</span><span class="info-value">Le ${
                      formData.datePanne || ""
                    } à ${formData.heurePanne || ""}</span></div>
                </td>
                <td class="info-col-middle">
                    <div><span class="info-label">District / Autre:</span><span class="info-value">${
                      formData.district || ""
                    }</span></div>
                    <div><span class="info-label">CDS / Autre:</span><span class="info-value">${
                      formData.cds || ""
                    }</span></div>
                </td>
                <td class="info-col-right">
                    <strong>Structure Maintenance Destinataire</strong>
                    <span class="checkbox-label">${
                      formData.structureMaint === "cds" ? "☑" : "☐"
                    } CDS</span>
                    <span class="checkbox-label">${
                      formData.structureMaint === "garage" ? "☑" : "☐"
                    } Garage secondaire / Atelier Réseau</span>
                    <span class="checkbox-label">${
                      formData.structureMaint === "unm" ? "☑" : "☐"
                    } UNM / District</span>
                    <span class="checkbox-label">${
                      formData.structureMaint === "canalisation" ? "☑" : "☐"
                    } Unité canalisation</span>
                    <span class="checkbox-label">${
                      formData.structureMaint === "externe" ? "☑" : "☐"
                    } Prestataire Externe</span>
                </td>
                </tr>
            </table>

            <table class="category-table">
                <tr><th>Activité :</th><th>Nature de la panne :</th></tr>
                <tr>
                <td>
                    <span class="checkbox-label">${
                      formData.activite === "fixe" ? "☑" : "☐"
                    } Maintenance Installation fixe</span>
                    <span class="checkbox-label">${
                      formData.activite === "roulant" ? "☑" : "☐"
                    } Matériel Roulant</span>
                    <span class="checkbox-label">${
                      formData.activite === "navire" ? "☑" : "☐"
                    } Navire</span>
                    <span class="checkbox-label">${
                      formData.activite === "autres" ? "☑" : "☐"
                    } Autres</span>
                </td>
                <td>
                    <span class="checkbox-label">${
                      formData.naturePanne === "mecanique" ? "☑" : "☐"
                    } Mécanique</span>
                    <span class="checkbox-label">${
                      formData.naturePanne === "electrique" ? "☑" : "☐"
                    } Électrique</span>
                    <span class="checkbox-label">${
                      formData.naturePanne === "autre" ? "☑" : "☐"
                    } Autre</span>
                </td>
                </tr>
                <tr><th>Nature des travaux :</th><th>Degré d'urgence :</th></tr>
                <tr>
                <td>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "corrective" ? "☑" : "☐"
                    } Maintenance Corrective</span>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "preventive" ? "☑" : "☐"
                    } Maintenance Préventive</span>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "neufs" ? "☑" : "☐"
                    } Travaux neufs</span>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "modif" ? "☑" : "☐"
                    } Modification</span>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "expertise" ? "☑" : "☐"
                    } Expertise</span>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "metro" ? "☑" : "☐"
                    } Vérification Métrologique</span>
                    <span class="checkbox-label">${
                      formData.natureTravaux === "reglementaire" ? "☑" : "☐"
                    } Contrôle réglementaire</span>
                </td>
                <td>
                    <span class="checkbox-label">${
                      formData.urgence === "1" ? "☑" : "☐"
                    } (1)</span>
                    <span class="checkbox-label">${
                      formData.urgence === "2" ? "☑" : "☐"
                    } (2)</span>
                    <span class="checkbox-label">${
                      formData.urgence === "3" ? "☑" : "☐"
                    } (3)</span>
                </td>
                </tr>
            </table>

            <h3 style="font-size:16; font-weight:800;">Identification du bien</h3>
            <table class="identification-table">
                <tr>
                <th class="label-cell">Code :</th><td>${
                  formData.code || ""
                }</td>
                <th class="label-cell">Genre :</th><td>${
                  formData.genre || ""
                }</td>
                </tr>
                <tr>
                <th class="label-cell">Marque :</th><td>${
                  formData.marque || ""
                }</td>
                <th class="label-cell">Km et/ou Heures de fonctionnement :</th><td>${
                  formData.kmHeures || ""
                }</td>
                </tr>
                <tr>
                <th class="label-cell">Type :</th><td>${
                  formData.type || ""
                }</td>
                <td class="empty-cell" colspan="2"></td>
                </tr>
                <tr><th class="header-cell" colspan="4">Constat de la Panne</th></tr>
                <tr><td class="full-width" colspan="4" style="height: 50px; vertical-align: top;">${
                  formData.constatPanne || ""
                }</td></tr>
            </table>

            <h3 style="font-size:16; font-weight:800;">Demandeur / Responsable</h3>
            <table class="demandeur-table">
                <thead><tr><th colspan="2">Demandeur</th><th colspan="2">Responsable CDS Autres</th></tr></thead>
                <tbody>
                <tr><th>Nom & Prénom :</th><td>${
                  formData.nomDemandeur || ""
                }</td><th>Nom & Prénom :</th><td>${
      formData.nomResponsable || ""
    }</td></tr>
                <tr><th>Fonction :</th><td>${
                  formData.fonctionDemandeur || ""
                }</td><th>Fonction :</th><td>${
      formData.fonctionResponsable || ""
    }</td></tr>
                <tr><th>Date :</th><td>${
                  formData.dateDemandeur || ""
                }</td><th>Date :</th><td>${
      formData.dateResponsable || ""
    }</td></tr>
                <tr><th>Visa :</th><td style="height: 30px;">${
                  formData.visaDemandeur || ""
                }</td><th>Visa :</th><td style="height: 30px;">${
      formData.visaResponsable || ""
    }</td></tr>
                </tbody>
            </table>

            <h3 style="font-size:16; font-weight:800;">Qualification de l'intervention</h3>
            <table class="qualification-layout-table" style="margin-top: 0px; border-top: none;">
                <tr>
                <td style="min-height: 60px;"><strong>Diagnostic Préliminaire :</strong><div style="margin-top: 5px;">${
                  formData.diagnostic || ""
                }</div></td>
                <td style="min-height: 60px;"><strong>Description de la nature des travaux :</strong><div style="margin-top: 5px;">${
                  formData.natureTravauxDesc || formData.natureTravaux || ""
                }</div></td>
                <td>
                    <strong>Niveaux de priorisation :</strong>
                    <span class="checkbox-label">${
                      formData.priorite === "1" ? "☑" : "☐"
                    } (1)</span>
                    <span class="checkbox-label">${
                      formData.priorite === "2" ? "☑" : "☐"
                    } (2)</span>
                    <span class="checkbox-label">${
                      formData.priorite === "3" ? "☑" : "☐"
                    } (3)</span>
                </td>
                <td>
                    <strong>Nécessitent-ils un permis de travail ?:</strong>
                    <div>
                    <span class="checkbox-label-inline">${
                      formData.permisTravail ? "☑ Oui" : "☐ Oui"
                    }</span>
                    <span class="checkbox-label-inline">${
                      !formData.permisTravail ? "☑ Non" : "☐ Non"
                    }</span>
                    </div>
                    <div style="margin-top: 10px;"><span class="ref-label">Routinier - PT Réf :</span><span>${
                      formData.routRef || ""
                    }</span></div>
                    <div style="margin-top: 5px;"><span class="ref-label">Dangereux - PT Réf :</span><span>${
                      formData.danRef || ""
                    }</span></div>
                    <div style="margin-top: 5px;"><span class="ref-label">Nom et Prénom :</span><span>${
                      formData.nomPrenom || ""
                    }</span></div>
                    <div style="margin-top: 5px;"><span class="ref-label">Fonction :</span><span>${
                      formData.fonction || ""
                    }</span></div>
                    <div style="margin-top: 5px;"><span class="ref-label">Date :</span><span>${
                      formData.date || ""
                    }</span></div>
                    <div style="margin-top: 5px;"><span class="ref-label">Visa HSE :</span><span>${
                      formData.visahse || ""
                    }</span></div>
                </td>
                </tr>
            </table>

            <h3 style="font-size:16; font-weight:800;">Intervenant / Responsable Maintenance</h3>
            <table class="signature-table" style="margin-top: 0px; border-top: none;">
                <thead><tr><th colspan="2">Intervenant</th><th colspan="2">Responsable CDS/UNM/Autre</th></tr></thead>
                <tbody>
                <tr><th>Nom & Prénom :</th><td>${
                  formData.nomIntervenant || ""
                }</td><th>Nom & Prénom :</th><td>${
      formData.nomResponsableMaint || ""
    }</td></tr>
                <tr><th>Fonction :</th><td>${
                  formData.fonctionIntervenant || ""
                }</td><th>Fonction :</th><td>${
      formData.fonctionResponsableMaint || ""
    }</td></tr>
                <tr><th>Date :</th><td>${
                  formData.dateIntervenant || ""
                }</td><th>Date :</th><td>${
      formData.dateResponsableMaint || ""
    }</td></tr>
                <tr><th>Visa HSE :</th><td style="height: 30px;">${
                  formData.visaHSE || ""
                }</td><th>Visa :</th><td style="height: 30px;">${
      formData.visaResponsableMaint || ""
    }</td></tr>
                </tbody>
            </table>

            <div class="footer">
                <span>Date d'édition: ${new Date().toLocaleDateString(
                  "fr-FR"
                )}</span> {/* Date dynamique */}
                <span>Propriété NAFTAL - Reproduction interdite</span>
                <span>Page: 1 sur 1</span>
            </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Données finales (non éditées) prêtes à être soumises : ",
      formData
    );
    alert("Revue terminée. Soumission des données en cours...");
    // TODO: Appel API réel ici pour envoyer formData
    router.push("/confirmation-finale"); // Navigation Next.js
  };

  // Définition des options (à garder ou importer)
  const structureOptions = [
    { value: "cds", label: "CDS" },
    { value: "garage", label: "Garage secondaire / Atelier Réseau" },
    { value: "unm", label: "UNM / District" },
    { value: "canalisation", label: "Unité canalisation" },
    { value: "externe", label: "Prestataire Externe" },
  ];
  const activiteOptions = [
    { value: "fixe", label: "Maintenance Installation fixe" },
    { value: "roulant", label: "Matériel Roulant" },
    { value: "navire", label: "Navire" },
    { value: "autres", label: "Autres" },
  ];
  const naturePanneOptions = [
    { value: "mecanique", label: "Mécanique" },
    { value: "electrique", label: "Électrique" },
    { value: "autre", label: "Autre" },
  ];
  const natureTravauxOptions = [
    { value: "corrective", label: "Maint. Corrective" },
    { value: "preventive", label: "Maint. Préventive" },
    { value: "neufs", label: "Travaux neufs" },
    { value: "modif", label: "Modification" },
    { value: "expertise", label: "Expertise" },
    { value: "metro", label: "Vérif. Métrologique" },
    { value: "reglementaire", label: "Contrôle réglementaire" },
  ];
  const urgenceOptions = [
    { value: "1", label: "(1)" },
    { value: "2", label: "(2)" },
    { value: "3", label: "(3)" },
  ];
  const prioriteOptions = [
    { value: "1", label: "(1)" },
    { value: "2", label: "(2)" },
    { value: "3", label: "(3)" },
  ];

  // Vérifier si formData est chargé avant de rendre les groupes radio
  if (!formData) {
    return <div>Chargement des données...</div>; // Ou un spinner
  }

  return (
    <div className="flex justify-center items-center lg:py-10 px-4">
      {" "}
      {/* Ajustement padding */}
      <div className="bg-white shadow-lg lg:p-20 p-6 rounded-lg border-amber-300 border font-semibold w-full max-w-4xl">
        {" "}
        {/* Style ajusté */}
        <h2 className=" lg:text-3xl text-xl font-bold text-blue-900 text-center lg:mb-10 mb-6 p-5 bg-blue-50 shadow">
          Revue de la Demande d'intervention
        </h2>
        <div className="flex flex-col gap-6 ">
          {" "}
          {/* Espacement sections */}
          {/* --- Section 1: Infos Générales --- */}
          <section>
            <h4 className=" text-lg font-bold text-blue-800 border-b pb-2 mb-4">
              Informations Générales
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {" "}
              {/* Grille responsive */}
              <div>
                <label    className="block mb-1 text-sm">
                  N°:
                </label>
                <input
                  type="text"
                  className="input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-2 "
                  value={formData.num || ""}
                  readOnly
                />
              </div>
              <div>
                <label  className="block mb-1 text-sm">
                  Date panne:
                </label>
                <input
                  type="date"
                  className="input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-2 "
                  value={formData.datePanne || ""}
                  readOnly
                />
              </div>
              <div>
                <label  className="block mb-1 text-sm">
                  Heure panne:
                </label>
                <input
                  type="time"
                  className="input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-2"
                  value={formData.heurePanne || ""}
                  readOnly
                />
              </div>
              <div >
                <label  className="block mb-1 text-sm">
                  District/Autre:
                </label>
                <input
                  type="text"
                  className="input bg-gray-100   w-full  border-b border-b-amber-300  text-base h-7 px-2"
                  value={formData.district || ""}
                  readOnly
                />
              </div>
              <div>
                <label  className="block mb-1  text-sm">
                  CDS/Autre:
                </label>
                <input
                  type="text"
                  className="input bg-gray-100   w-full  border-b border-b-amber-300    h-7 px-2 [text-rendering:optimizeLegibility] "
                  value={formData.cds || ""}
                  readOnly
                />
              </div>
            </div>
          </section>
          {/* --- Section 1.b: Catégorisation --- */}
            
            <h4 className="   text-lg font-bold text-blue-800 border-b pb-2 mb-4">
              Catégorisation
            </h4>
           <div>
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-5">
            </div>  
        <h4 className=" ">
          Structure Maintenance Destinataire :
        </h4>
        <div className=" space-y-4">
          {structureOptions.map((option) => (
            <div className="flex items-center gap-3" key={option.value}>
              <input
                type="radio"
                name="structureMaintRadio"
                id={`struct-${option.value}`}
                defaultChecked={formData.structureMaint===option.value}
                readOnly
              disabled={formData.structureMaint!==option.value}  
              />
              <label
                htmlFor={`struct-${option.value}`}
                className="w-48 flex-shrink-0"
              >
                {option.label}
              </label>
              {(option.value === "cds" ||
                option.value === "unm" ||
                option.value === "garage" ||
                option.value === "externe" ||
                option.value === "canalisation") && (  
                <input
                  type="text"
                  
                  id={`${option.value}Input`}
                  className="  input bg-gray-100  w-40  border-b border-b-amber-300  text-base h-7 px-1"
                  placeholder={``}
                    disabled={formData.structureMaint !==option.value}
                  readOnly
                />
              )}
            </div>
          ))}
        </div>
      </div>
         
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RadioGroup
              name="activite"
              label="Activité"
              options={activiteOptions}
              disabled={true}
              formData={formData}
            />
            <RadioGroup
              name="naturePanne"
              label="Nature de la panne"
              options={naturePanneOptions}
              disabled={true}
              formData={formData}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <RadioGroup
              name="natureTravaux"
              label="Nature des travaux"
              options={natureTravauxOptions}
              disabled={true}
              formData={formData}
            />
            <RadioGroup
              name="urgence"
              label="Degré d'urgence"
              options={urgenceOptions}
              disabled={true}
              formData={formData}
            />
          </div>
            </div>
             
          {/* --- Section 2: Identification & Constat --- */}
          <section>
            <h4 className=" text-lg font-bold text-blue-800 border-b pb-2 mb-4">
              Identification du bien & Constat
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Code:
                </label>
                <input
                  type="text"
                  className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                  value={formData.code || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Genre:
                </label>
                <input
                  type="text"
                  className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                  value={formData.genre || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Marque:
                </label>
                <input
                  type="text"
                  className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                  value={formData.marque || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Km/Heures:
                </label>
                <input
                  type="text"
                  className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                  value={formData.kmHeures || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Type:
                </label>
                <input
                  type="text"
                  className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                  value={formData.type || ""}
                  readOnly
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Constat de la panne :
              </label>
              <textarea
                className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-40 px-1 "
                value={formData.constatPanne || ""}
                readOnly
              ></textarea>
            </div>
          </section>
          {/* --- Section 2.b: Demandeur & Responsable --- */}
          <section>
            <h4 className=" text-lg font-bold text-blue-800 border-b pb-2 mb-4">
              Demandeur & Responsable
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <fieldset className="border p-4 rounded bg-gray-50 text-sm">
                <legend className="font-medium px-2 text-base text-gray-700">
                  Demandeur
                </legend>
                <div className="space-y-3">
                  <div>
                    <label className=" block mb-2 text-sm ">
                      Nom & Prénom:
                    </label>
                    <input
                      type="text"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.nomDemandeur || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=" block mb-2 text-sm">
                      Fonction:
                    </label>
                    <input
                      type="text"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.fonctionDemandeur || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=" block mb-2 text-sm">
                      Date:
                    </label>
                    <input
                      type="date"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.dateDemandeur || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=" block mb-2 text-sm">
                      Visa:
                    </label>
                    <input
                      type="text"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.visaDemandeur || ""}
                      readOnly
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border p-4 rounded bg-gray-50 text-sm">
                <legend className="font-medium px-2 text-base text-gray-700">
                  Responsable CDS / Autres
                </legend>
                <div className="space-y-3">
                  <div>
                    <label className=" block mb-2 text-sm">
                      Nom & Prénom:
                    </label>
                    <input
                      type="text"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.nomResponsable || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=" block mb-2 text-sm">
                      Fonction:
                    </label>
                    <input
                      type="text"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.fonctionResponsable || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=" block mb-2 text-sm">
                      Date:
                    </label>
                    <input
                      type="date"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.dateResponsable || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className=" block mb-2 text-sm">
                      Visa:
                    </label>
                    <input
                      type="text"
                      className=" input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                      value={formData.visaResponsable || ""}
                      readOnly
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </section>
          {/* --- Section 3: Qualification & Intervenant --- */}
          <section>
            <h4 className=" text-lg font-bold text-blue-800 border-b pb-2 mb-4">
              Qualification de l'intervention
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className=" block mb-2 text-base">
                  Diagnostic Préliminaire:
                </label>
                <textarea
                  className=" input bg-gray-100   w-full  border-b border-b-amber-300  text-base h-40 px-1"
                  value={formData.diagnostic || ""}
                  readOnly
                ></textarea>
              </div>
              <div>
                <label className=" block mb-2 text-base">
                  Description nature des travaux:
                </label>
                <textarea
                  className="  input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-40 px-1"
                  value={formData.natureTravauxDesc || ""}
                  readOnly
                ></textarea>
              </div>
              <RadioGroup
                name="priorite"
                label="Niveaux de priorisation"
                options={prioriteOptions}
                disabled={true}
                formData={formData}
              />
              <div className="text-sm">
                <label className="block mb-2 text-sm  ">
                  Permis de travail:
                </label>
                <div className="flex gap-4 mb-3">
                  <label className="flex items-center space-x-1 cursor-not-allowed opacity-70">
                    <input
                      type="radio"
                      name="permisTravailRO"
                      checked={formData.permisTravail === true}
                      disabled
                      className="form-radio"
                    />
                    <span className="text-black">Oui</span>
                  </label>
                  <label className="flex items-center space-x-1 cursor-not-allowed opacity-70">
                    <input
                      type="radio"
                      name="permisTravailRO"
                      checked={formData.permisTravail === false}
                      disabled
                      className="form-radio"
                    />
                    <span className="text-black">Non</span>
                  </label>
                </div>
                <div>
                  <label className=" block mb-2 text-sm">
                    Routinier - PT Réf:
                  </label>
                  <input
                    type="text"
                    className="  input bg-gray-100  w-full   border-b border-b-amber-300  text-base h-7 px-1"
                    value={formData.routRef || ""}
                    readOnly
                  />
                </div>
                <div className="mt-2">
                  <label className=" block mb-2 text-sm">
                    Dangereux - PT Réf:
                  </label>
                  <input
                    type="text"
                    className="  input bg-gray-100  w-full  border-b border-b-amber-300  text-base h-7 px-1"
                    value={formData.danRef || ""}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <fieldset className="border p-4 rounded bg-gray-50 text-sm">
              <legend className="font-medium px-2 text-base">
                Responsable HSE (si permis requis) :
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block mb-1 text-xs">
                    Nom & Prénom:
                  </label>
                  <input
                    type="text"
                    className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                    value={formData.nomPrenom || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className=" block mb-1 text-xs">
                    Fonction:
                  </label>
                  <input
                    type="text"
                    className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                    value={formData.fonction || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block mb-1 text-xs ">
                    Date:
                  </label>
                  <input
                    type="date"
                    className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                    value={formData.date || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className=" block mb-1 text-xs">
                    Visa HSE:
                  </label>
                  <input
                    type="text"
                    className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                    value={formData.visahse || ""}
                    readOnly
                  />
                </div>
              </div>
            </fieldset>
          </section>
          {/* --- Section 3.b: Intervenant & Responsable Maintenance --- */}
          <section>
            <h4 className=" text-lg font-bold text-blue-800 border-b pb-2 mb-4">
              Intervenant & Responsable Maintenance
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="border p-4 rounded bg-gray-50 text-sm">
                <legend className="font-medium px-2 text-base text-gray-700">
                  Intervenant
                </legend>
                <div className="space-y-3">
                  <div>
                    <label className="block mb-1 text-xs">
                      Nom & Prénom:
                    </label>
                    <input
                      type="text"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.nomIntervenant || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">
                      Fonction:
                    </label>
                    <input
                      type="text"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.fonctionIntervenant || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs">
                      Date:
                    </label>
                    <input
                      type="date"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.dateIntervenant || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs ">
                      Visa HSE:
                    </label>
                    <input
                      type="text"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.visaHSE || ""}
                      readOnly
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border p-4 rounded bg-gray-50 text-sm">
                <legend className="font-medium px-2 text-base ">
                  Resp. Maintenance
                </legend>
                <div className="space-y-3">
                  <div>
                    <label className="block mb-1 text-xs">
                      Nom & Prénom:
                    </label>
                    <input
                      type="text"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.nomResponsableMaint || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs">
                      Fonction:
                    </label>
                    <input
                      type="text"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.fonctionResponsableMaint || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs">
                      Date:
                    </label>
                    <input
                      type="date"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.dateResponsableMaint || ""}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs">
                      Visa:
                    </label>
                    <input
                      type="text"
                      className="  input bg-gray-200  w-full  border-b border-b-amber-300  text-base h-5 px-1"
                      value={formData.visaResponsableMaint || ""}
                      readOnly
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </section>
          {/* --- Boutons d'action --- */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-blue-800  gap-4">
            <button
              type="button"
              onClick={() => router.back()} // Utiliser router.back() pour revenir
              className="w-full sm:w-auto bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition order-3 sm:order-1"
            >
              Retour
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition order-2"
            >
              Imprimer
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition order-1 sm:order-3"
            >
              Confirmer et Soumettre
            </button>
          </div>
        </div>
      </div>
   
  );
}