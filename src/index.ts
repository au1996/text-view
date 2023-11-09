import { App } from 'vue'
import TextView from './components/TextView.vue'

const install = (app: App<Element>) => {
  app.component('TextView', TextView)
}

export default { TextView, install }
