import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faCaretUp)
library.add(faCaretDown)
library.add(faCaretLeft)
library.add(faCaretRight)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
