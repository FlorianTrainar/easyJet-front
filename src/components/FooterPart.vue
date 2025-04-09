<script setup></script>
<template>
  <footer>
    <section class="wrapper">
      <div>
        <h3>Infos de vol</h3>
        <p>Flight Tracker</p>
        <p>Gérer les réservations</p>
        <p>Durabilité</p>
        <p>Guides de voyage</p>
        <p>carte de destinations</p>
        <p>Vaincre votre peur de voler</p>
        <p>Durée des vols</p>
      </div>
      <div>
        <h3>Service clientèle</h3>
        <p>Accessibilité</p>
        <p>La Charte du Passager</p>
        <p>Aide</p>
        <p>Etat du trafic</p>
        <p>Plan du site</p>
        <p>Aide spéciale</p>
      </div>
      <div>
        <h3>A propos d'easyJet</h3>
        <p>Carrière</p>
        <p>Information sur la compagnie</p>
        <p>easyJet Spirit</p>
        <p>Unicef</p>
      </div>
      <div>
        <h3>Termes et conditions</h3>
        <p>Politique d'utilisation acceptable</p>
        <p>Charte de distribution</p>
        <p>Suppléments et charges</p>
        <p>Avis sur les cookies du groupe</p>
        <p>Politique de confidentialité</p>
        <p>Conditions générales</p>
        <p>Information Juridiques</p>
      </div>
    </section>
  </footer>
</template>
<style scoped>
footer {
  background-color: #f1f5f6;
  margin: 40px 0px;
  padding: 10px;
}

footer section {
  display: flex;
  justify-content: space-between;
}

footer h3 {
  margin: 20px 0px;
  font-size: 17px;
}

footer p {
  margin: 5px 0px;
  font-size: 13px;
}

/* --- */

@media (max-width: 670px) {
  footer section {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
  footer h3 {
    margin: 10px;
  }
  footer p {
    visibility: hidden;
    position: absolute;
  }
}
</style>
