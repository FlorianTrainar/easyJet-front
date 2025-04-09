<script setup></script>
<template>
  <header>
    <nav>
      <font-awesome-icon :icon="['fas', 'bars']" />
      <img src="../assets/imgs/ej-title.png" alt="EasyJet" />
      <a href="">Infos de vol</a>
      <a href="">Voitures/Autres services</a>
      <a href="">Business</a>
      <a href="">Hôtels</a>
      <a href="">Mes réservations</a>
    </nav>
    <nav>
      <button>S'enregistrer</button>
      <button id="connect-button">
        <font-awesome-icon :icon="['far', 'user-circle']" /> Se connecter
      </button>
      <button>Aide</button>
      <button>fr-FR</button>
      <img src="../assets/imgs/drapeau.png" alt="FR" />
    </nav>
  </header>
</template>
<style scoped>
header {
  background-image: url(../assets/imgs/headbar.gif);
  background-size: cover;
  height: 60px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px black;
  position: relative;
  z-index: 10;
  font-family: 'easyJet Rounded Book';
}

header nav {
  display: flex;
  align-items: center;
  gap: 15px;
}

header a {
  text-decoration: none;
  color: white;
}
header svg {
  font-size: 25px;
  position: absolute;
  visibility: hidden;
}
nav > svg:first-of-type {
  color: white;
}

header button {
  color: white;
  background-color: #f77d0200;
  border: none;
  padding: 10px 5px;
  border-radius: 2px;
}
header button:hover {
  color: #f77b02;
  background-color: white;
  cursor: pointer;
}

/* ---- */

@media (max-width: 1115px) {
  header > nav:first-child > svg {
    visibility: visible;
    position: relative;
  }

  header nav:first-child a {
    visibility: hidden;
    position: absolute;
  }
}
@media (max-width: 670px) {
  header nav a,
  header nav button,
  header nav img:last-child {
    visibility: hidden;
    position: absolute;
  }
  #connect-button {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 20px;
    visibility: visible;
    position: relative;
  }
  #connect-button svg {
    visibility: visible;
    position: relative;
    font-size: 22px;
  }
}
</style>
