import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faList,
  faPlus,
  faMinus,
  faSuitcase,
  faMobileAlt,
  faPen,
  faUserShield,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
  faUserCircle,
  faCalendar,
  faQuestionCircle,
  faClock,
} from '@fortawesome/free-regular-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBars,
  faUserCircle,
  faList,
  faCalendar,
  faPlus,
  faMinus,
  faQuestionCircle,
  faSuitcase,
  faClock,
  faMobileAlt,
  faPen,
  faUserShield,
  faPhone,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
