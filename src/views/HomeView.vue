<script setup>
import HeaderPart from '@/components/HeaderPart.vue'
import FooterPart from '@/components/FooterPart.vue'

import CoverPart from '@/components/CoverPart.vue'
</script>

<template>
  <HeaderPart />

  <main>
    <section class="cover">
      <CoverPart />
    </section>
    <section class="wrapper sec1 sec-default">
      <img src="../assets/imgs/worldwide-img.jpg" alt="Voyage à l'étranger" />
      <div>
        <h2>WORLDWIDE</h2>
        <p>
          Voyagez encore plus loin à l'étranger <br />
          Découvrez l'Europe et au-delà grâce à notre offre de produits de correspondance
        </p>
        <button>En savoir plus</button>
      </div>
    </section>

    <section class="wrapper2 carrousel">
      <div class="carrousel-element">
        <img src="../assets/imgs/carousel1.jpg" alt="car1" />
        <div>
          <h2>Location de véhicule.</h2>
          <h2>
            Vous avez besoin de réserver une voiture ? Comparez les prix de location pour obtenir la
            meilleure offre
          </h2>
        </div>
        <button>En savoir plus</button>
      </div>
      <div class="carrousel-element">
        <img src="../assets/imgs/carousel2.jpg" alt="car1" />
        <div>
          <h2>Stationnement. Salons privés. Navettes</h2>
          <h2>
            Ce sont les petits suppléments qui rendent les vacances spéciales, alors ajoutez la
            touche finale à votre voyage.
          </h2>
        </div>
        <button>Reservez dès maintenant</button>
      </div>
      <div class="carrousel-element">
        <img src="../assets/imgs/carousel3.jpg" alt="car1" />
        <div>
          <h2>Vous prenez souvent l'avion ? Economisez du temps et de l'argent.</h2>
          <h2>Voyagez comme un pro avec un abonnement easyJet Plus, à seulement 215€.</h2>
        </div>
        <button>Devenez membre</button>
      </div>
      <div class="carrousel-element">
        <img src="../assets/imgs/carousel4.jpg" alt="car1" />
        <div>
          <h2>Besoin d'un taxi ?</h2>
          <h2>En vous emmene ou vous voulez, en deudeu !</h2>
        </div>
        <button>Hep taxi !</button>
      </div>
      <div class="carrousel-element">
        <img src="../assets/imgs/carousel5.jpg" alt="car1" />
        <div>
          <h2>Faites vous accompagner</h2>
          <h2>
            Si vous êtes du genre à vous perdre dans votre lotissement et que vous avez le sens
            d'orientation d'une huitre, nous avons la solution.
          </h2>
        </div>
        <button>Demandez un guide</button>
      </div>
    </section>

    <section class="wrapper sec2 sec-default">
      <img src="../assets/imgs/bretagne.jpg" alt="Bretagne" />
      <div>
        <h2>Cet été, faîtes sauter le crêpier !</h2>
        <p>
          Cap à l'ouest et bienvenue à Brest ! La perle maritime de la Bretagne vous attend, là où
          l'aventure s'élève comme les marées et où la bonne humeur fait des vagues !
        </p>
        <p>
          Les magnifiques plages de sable fin et les criques isolées invitent à la détente et à la
          contemplation. Les amateurs de plein air seront ravis de pouvoir profiter des sentiers
          côtiers pittoresques qui offrent des vues spectaculaires sur l'océan Atlantique.
        </p>
        <button>Réservez maintenant</button>
      </div>
    </section>

    <section class="wrapper sec3">
      <div>
        <p>Developpement durable</p>
        <p>En savoir plus ></p>
      </div>
      <div>
        <p>Apprivoiser votre peur de voler</p>
        <p>En savoir plus ></p>
      </div>
      <div>
        <p>Inscrivez-vous à notre newsletter</p>
        <p>Profitez-en</p>
      </div>
    </section>

    <section class="wrapper2 slide-box">
      <h3>Comment pouvons-nous vous aidez ?</h3>
      <div>
        <div>
          <h4>Questions fréquentes</h4>
          <i class="fa-regular fa-circle-question"></i>
        </div>
        <div>
          <h4>Bagages</h4>
          <i class="fa-solid fa-suitcase"></i>
        </div>
        <div>
          <h4>Retards et annulations</h4>
          <i class="fa-regular fa-clock"></i>
        </div>
        <div>
          <h4>S'enregistrer en ligne</h4>
          <i class="fa-solid fa-mobile-screen"></i>
        </div>
        <div>
          <h4>Effectuer un changement</h4>
          <i class="fa-solid fa-pen"></i>
        </div>
        <div>
          <h4>Protection contre la restriction de voyage</h4>
          <i class="fa-solid fa-user-shield"></i>
        </div>
        <div>
          <h4>Contactez-nous</h4>
          <i class="fa-solid fa-walkie-talkie"></i>
        </div>
      </div>
    </section>
  </main>
  <FooterPart />
</template>
<style scoped>
.carrousel::-webkit-scrollbar,
.slide-box div::-webkit-scrollbar {
  display: none;
}

.carrousel,
.slide-box div {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* MAIN CARROUSELS */

.carrousel {
  margin: 0 auto;
  margin-top: 40px;
  padding: 5px;
  display: flex;
  gap: 21px;
  overflow: scroll;
}

.carrousel-element {
  flex-shrink: 0;
  width: 31.5%;
  height: 360px;
  box-shadow: 0 0 5px grey;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.carrousel-element img {
  object-fit: cover;
  width: 100%;
}

.carrousel-element > div {
  /* border: black solid 1px; */
  padding: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.carrousel-element button {
  background-color: #f77b02;
  color: white;
  padding: 10px 15px;
  margin: 15px;
  border: none;
  border-radius: 4px;
  align-self: flex-start;
}

/* ---------------------------------- */

/* MAIN SECTIONS */

.sec-default {
  margin-top: 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 5px grey;
  display: flex;
}

.sec-default div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0 20px;
}

.sec1 img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: right top;
}
.sec2 img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  object-position: right top;
}

h2 {
  font-size: 18px;
}

p {
  font-size: 13px;

  text-align: left;
}

.sec-default button {
  background-color: #f77b02;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  align-self: flex-end;
}

/* ----------------------------------- */

/* MAIN Triple Pics */

.sec3 {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  display: flex;
}

.sec3 div {
  border-radius: 8px;
  box-shadow: 0 0 5px grey;
  height: 250px;
  width: 290px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sec3 div:first-of-type {
  background-image: url(../assets/imgs/triple-first.jpg);
  background-position: center;
}
.sec3 div:nth-of-type(2) {
  background-image: url(../assets/imgs/triple-second.jpg);
  background-position: right;
}
.sec3 div:last-of-type {
  background-image: url(../assets/imgs/triple-third.jpg);
}

.sec3 div p:first-of-type {
  width: 65%;
}
.sec3 p:first-child {
  color: white;
  font-size: 28px;
  padding: 25px;
}
.sec3 p:last-child {
  color: white;
  font-size: 20px;
  padding: 25px;
}

/* ----------------------------------- */

/* MAIN slide-box */

.slide-box {
  margin: 0 auto;
  margin-top: 40px;
}
.slide-box h3 {
  font-size: 20px;
  margin-bottom: 20px;
}

.slide-box > div {
  display: flex;
  gap: 20px;
  overflow: scroll;
}

.slide-box > div > div {
  background-color: #303030;
  height: 172px;
  width: 172px;
  border-radius: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.slide-box > div > div > i {
  color: white;
  align-self: center;
  padding-bottom: 30px;
  font-size: 40px;
}
.slide-box div h4 {
  /* border: white solid 1px; */
  color: white;
  font-size: 15px;
  line-height: 18px;
  padding: 20px;
  width: 90%;
}

/* ----------------------------------- */
</style>
