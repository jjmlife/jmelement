import { App } from 'vue'
import ElContainer from './Container.vue'
import ElAisde from './Aside.vue'
import ElHeader from './Header.vue'
import ElFooter from './Footer.vue'
import ElMain from './Main.vue'

export default {
  install(app: App) {
    app.component(ElContainer.name, ElContainer)
    app.component(ElAisde.name, ElAisde)
    app.component(ElHeader.name, ElHeader)
    app.component(ElFooter.name, ElFooter)
    app.component(ElMain.name, ElMain)
  }
}
