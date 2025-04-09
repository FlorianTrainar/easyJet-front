<script setup></script>
<template>
  <section class="main">
    <div class="tabs">
      <p>Vols</p>
      <p>Hôtels</p>
      <p>Voitures</p>
    </div>
    <form action="">
      <section class="checkbox">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox">Aller simple</label>
      </section>

      <div class="destination">
        <div>
          <label for=""
            >De : <input type="text" /><font-awesome-icon :icon="['fas', 'list']"
          /></label>
        </div>
        <div class="grey-line"></div>
        <div>
          <label for=""
            >A : <input type="text" /><font-awesome-icon :icon="['fas', 'list']"
          /></label>
        </div>
      </div>

      <div class="date">
        <p><font-awesome-icon :icon="['far', 'calendar']" /> Aller</p>
        <div class="grey-line"></div>
        <p><font-awesome-icon :icon="['far', 'calendar']" /> Retour</p>
      </div>

      <div class="adultes-enfants">
        <div>
          <label for="">Adultes (16+) </label>
          <div>
            <button><font-awesome-icon :icon="['fas', 'minus']" /></button> <span>2</span>
            <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
          </div>
        </div>
        <div>
          <label for="">Enfants (2-15)</label>
          <div>
            <button><font-awesome-icon :icon="['fas', 'minus']" /></button> <span>4</span>
            <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
          </div>
        </div>
        <div>
          <label for="">Bébés (- 2) </label>
          <div>
            <button><font-awesome-icon :icon="['fas', 'minus']" /></button> <span>0</span>
            <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
          </div>
        </div>
      </div>

      <section class="vols">
        <button>Afficher les vols ></button>
      </section>

      <section class="link">
        <p>À propos de l'assistance spéciale ></p>
        <p>Nous compensons nos émissions carbone ></p>
      </section>
    </form>
  </section>
</template>
<style scoped>
.main {
  font-family: 'easyJet Rounded Book';
}

.cover-form {
  font-size: 14px;
  font-family: easyJet Rounded Book;
}

.cover-form form {
  background-color: white;
  width: 280px;
  height: 93%;
  box-shadow: 0 0 5px grey;
  padding: 10px;
}

/* -------- */

.tabs {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}

.tabs p {
  font-size: 15px;
  width: 32.5%;
  background-color: #333333;
  color: white;
  text-align: center;
}
.tabs p:first-child {
  background-color: white;
  color: black;
}

.checkbox {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.checkbox input {
  height: 30px;
  width: 30px;
}

/* -------- */

.destination {
  border: rgb(212, 211, 211) 1px solid;
  padding: 5px;
  margin-bottom: 10px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-right: 40px;
  position: relative;
}

.destination svg {
  font-size: 24px;
  position: absolute;
  color: #f76601;
  right: -34px;
}

.destination input {
  border: none;
}
.grey-line {
  width: 150px;
  margin: 0 auto;
  border-top: rgb(212, 211, 211) 1px solid;
}

/* --------- */

.date {
  border: rgb(212, 211, 211) 1px solid;
  padding: 5px;
  margin-bottom: 10px;
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.date p {
  padding: 4px;
  color: #f76601;
}

.date svg {
  font-size: 16px;
}

/* ----------- */

.adultes-enfants div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}
.adultes-enfants div label {
  flex: 2;
}
.adultes-enfants > div > div {
  flex: 1;
}

.adultes-enfants button {
  color: #f76601;
  background-color: white;
  border: none;
  font-size: 14px;
}
.adultes-enfants span {
  font-size: 18px;
  font-weight: bold;
}

/* ------------- */

.vols button {
  background-color: #f76601;
  color: white;
  border: none;
  width: 100%;
  padding: 12px 0px;
}

/* ----------- */

.link {
  color: #f76601;
}

.link p {
  margin: 10px 0px;
}
</style>
