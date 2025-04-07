import React from 'react';
 
const Partie3 = () => {
    return (
    <div className="partiee3">
         <div class="p5">
<div class="dia">
 <label htmlFor="da">Diagnostic Préliminaire :</label>
 <br />
 <textarea id="da"></textarea>
</div>
<div class="des">
    <label htmlFor="ds">Description de la nature des travaux :</label>
    <textarea htmlFor="ds" readOnly>loc</textarea>
   </div>
<div class="niv">
<h4>Niveaux de priorisation :</h4>
<div class="hi">
<input type="checkbox"  id="1"  />
 <label htmlFor="1">(1)</label>
 <br />
 <input type="checkbox"  id="2" />
 <label htmlFor="2">(2)</label>
 <br />
 <input type="checkbox"  id="3" />
 <label htmlFor="3">(3)</label>
</div> 
</div>
<div class="ne">
<h4>Nécessitent-t-ils un permis de travail ? :</h4>
<input type="checkbox"  id="oui" />
<label htmlFor="oui">Oui</label>
<input type="checkbox"  id="non" />
<label htmlFor="non">Non</label>
<br />
<h4>Si oui,s'agit-t-il d'un permis de travail ?</h4>
<br />
<input type="checkbox"  id="rout" />
<label htmlFor="rout">Routinier-PT Réf :</label>
<br />
 <input type="text" id='rout' placeholder='.............................'/>
<br />
 <input type="checkbox"  id="dan" />
<label htmlFor="dan"> Dangereux-PT Réf :</label>
<br />
<input type="text" id='dan' placeholder='.............................'/>
<br />
<label htmlFor="nomg">Nom & Prénom :</label>
<input type="text" id='nomg' />
<br />
<label htmlFor="foncg">Fonction :</label>
<input type="text" id='foncg' />
<br />
<label htmlFor="dateg">Date :</label>
 <input type="date"id='dateg' />
<br />
<label htmlFor="visag">Visa HSE :</label>
<input type="text" id='visag' />
</div>
 </div>
 <div class="grid7">   <div class="dd7"><h4 id="d7">Intervenat</h4></div> 
 <div class="drr7"><h4 id="r7">Responsable CDS / UNM / Autre</h4></div></div>
 <div class="p7">
<div class="pd7">
<label htmlFor="nomd7">Nom & Prénom :</label>
<input type="text" id='nomd7' />
<br />
<label htmlFor="foncp7">Fonction :</label>
<input type="text" id='foncp7' />
<br />
<label htmlFor="datep7">Date :</label>
 <input type="date"id='datep7' />
<br />
<label htmlFor="visap7">Visa :</label>
<input type="text" id='visap7' />
</div>

 <div class="pr7">
    <label htmlFor="nomr7">Nom & Prénom :</label>
    <input type="text" id='nomr7' />
<br />
<label htmlFor="foncr7">Fonction :</label>
<input type="text" id='foncr7' />
<br />
<label htmlFor="dater7">Date :</label>
 <input type="date" id='dater7' />
<br />
<label htmlFor="visar7">Visa :</label>
<input type="text" id='visar7' />
 </div>
 </div>
    </div>
    );
};

export default Partie3;