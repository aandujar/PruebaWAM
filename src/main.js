import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowAltCircleRight, faArrowAltCircleLeft, faCreditCard, faFile, faUser, faSortDown, faCheck, faGraduationCap, faBars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowAltCircleRight)
library.add(faArrowAltCircleLeft)
library.add(faCreditCard)
library.add(faFile)
library.add(faUser)
library.add(faSortDown)
library.add(faCheck)
library.add(faGraduationCap)
library.add(faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
