import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faCaretLeft, faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueLayers)
library.add(faCaretUp)
library.add(faCaretDown)
library.add(faCaretLeft)
library.add(faCaretRight)
library.add(faTimes)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
