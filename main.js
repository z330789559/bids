import { createApp } from 'vue'
import './src/style.css'
import './src/assets/css/base.css'
import './src/assets/css/remixicon.css'
import router from './src/router.js'
import 'aos/dist/aos.css'
import App from './src/App.vue'
import AOS from 'aos'
const app=createApp(App)
const appAOS = new AOS.init({
    disable: "phone",
    duration: 1200,
    easing: 'ease-in-out',
}
    );
app.use(appAOS)
app.use(router)
app.mount('#app')
