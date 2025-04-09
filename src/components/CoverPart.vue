<script setup>
import ReservationForm from './ReservationForm.vue'
</script>
<template>
  <section class="cover">
    <img src="../assets/imgs/beach.jpg" alt="" />
    <div class="cover-absolute">
      <div class="wrapper">
        <div class="cover-form">
          <ReservationForm />
        </div>

        <div class="cover-ad">
          <h1>
            Nager. Dormir. Manger. <br />
            Recommencer.
          </h1>
          <p>
            Cete été, détendez-vous à la plage : Baléares, Sardaigne, Sicile... Vous avez le choix !
          </p>
          <div>
            <p>à partir de</p>
            <p><span>29,75€</span></p>
          </div>
          <button>Réservez maintenant</button>
        </div>
      </div>
    </div>
    <div class="cover-foot-absolute">
      <div class="wrapper">
        <div class="foot-ad">
          <div>
            <p>Lisbonne</p>
            <p>
              à partir de Paris Charles de Gaulle <br />
              29,75€ nov. 2023
            </p>
            <button>Réservez ></button>
          </div>
          <div>
            <p>Porto</p>
            <p>
              à partir de Paris Charles de Gaulle <br />
              29,75€ nov. 2023
            </p>
            <button>Réservez ></button>
          </div>
          <div>
            <p>Faro</p>
            <p>
              à partir de Paris Charles de Gaulle <br />
              32€ nov. 2023
            </p>
            <button>Réservez ></button>
          </div>
          <div>
            <p>Toronto</p>
            <p>
              à partir de Paris Charles de Gaulle <br />
              120€ nov. 2023
            </p>
            <button>Réservez ></button>
          </div>
        </div>

        <p class="foot-ad-buttom">
          Le prix indiqué est valable pour un aller simple, taxes incluses, à disponibilité limitée.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.cover {
  /* border: green solid 4px; */
  position: relative;
}

.cover img {
  width: 100vw;
  height: 700px;
  object-fit: cover;
}

/* --------------------- */

.cover-absolute {
  width: 100vw;
  height: 430px;
  margin: 40px auto;
  position: absolute;
  top: 0px;
}
.cover-absolute > div {
  /* border : blue dotted 5px; */
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.cover-ad {
  width: 280px;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.cover-ad p {
  font-size: 18px;
  font-family: 'easyJet Rounded Book';
}
.cover-ad div p {
  font-size: 12px;
}
.cover-ad div p span {
  font-size: 40px;
}

.cover-ad button {
  background-color: #f76601;
  color: white;
  border: none;
  width: 80%;
  padding: 12px 0px;
}

/* ------------ */

.cover-foot-absolute {
  /* border: purple solid 5px; */
  background-color: rgba(255, 255, 255, 0.509);
  height: 180px;
  width: 100vw;
  position: absolute;
  bottom: 0px;
}
.cover-foot-absolute > div {
  /* border : blue dotted 5px; */
  height: 100%;
  display: flex;
  flex-direction: column;
}

.foot-ad {
  /* border : white dotted 5px; */
  display: flex;
  justify-content: space-between;
  flex: 4;
}
.foot-ad > div {
  /* border: brown solid 2px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.foot-ad > div p {
  font-size: 14px;
}
.foot-ad button {
  background-color: #f76601;
  color: white;
  border: none;
  width: 50%;
  padding: 6px 8px;
  border-radius: 4px;
}

.foot-ad-buttom {
  flex: 1;
  line-height: 30px;
}

/* --- */

@media (max-width: 1115px) {
  .foot-ad div:last-child {
    position: absolute;
    visibility: hidden;
  }
}

@media (max-width: 670px) {
  .cover {
    background-color: #d3d3d3;
    justify-content: center;
    width: 100wv;
  }

  .cover img {
    visibility: hidden;
    /* height: 670px; */
  }
  .cover-ad {
    visibility: hidden;
    position: absolute;
  }
  .cover-form {
    margin: 0 auto;
  }

  .foot-ad div:nth-child(3) {
    visibility: hidden;
    position: absolute;
  }
}
</style>
