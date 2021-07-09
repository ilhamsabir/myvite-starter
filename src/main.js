import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import titleMixin from './mixin/titleMixin'
import Multiselect from 'vue-multiselect'

const app = createApp(App)

app.use(store)
app.use(router)
app.component('Multiselect', Multiselect)
app.mixin(titleMixin)

// global components
// import Butt from './components/Butt.vue'
// app.component('Butt', Butt)

app.mount('#app')
