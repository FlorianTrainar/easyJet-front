<script setup></script>
<template>
  <header>
    <nav>
      <i class="fa-solid fa-bars"></i>
      <img src="../assets/imgs/ej-title.png" alt="EasyJet" />
      <a href="">Infos de vol</a>
      <a href="">Voitures/Autres services</a>
      <a href="">Business</a>
      <a href="">Hôtels</a>
      <a href="">Mes réservations</a>
    </nav>
    <nav>
      <button>S'enregistrer</button>
      <a href="" id="connect-button"><i class="fa-regular fa-circle-user"></i>Se connecter</a>
      <a href="">Aide</a>
      <a href="">fr-FR</a>
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
header i {
  color: white;
  font-size: 25px;
  position: absolute;
  visibility: hidden;
}

header button {
  color: #f77b02;
  border: none;
  padding: 5px 5px;
  border-radius: 2px;
}

/* ---- */

@media (max-width: 1115px) {
  header > nav:first-child > i {
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
    flex-direction: column;
    gap: 2px;
    align-items: center;
    font-size: 20px;
    visibility: visible;
    position: relative;
  }
  #connect-button i {
    visibility: visible;
    position: relative;
    font-size: 22px;
  }
}
</style>
