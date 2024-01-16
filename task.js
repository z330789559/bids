import { createApp } from 'vue'
import './src/style.css'
import './src/assets/css/base.css'
import './src/assets/css/remixicon.css'
import 'aos/dist/aos.css'
import App from './src/App.vue'
import AOS from 'aos'
const app=createApp(App)
const appAOS = new AOS.init({
    disable: "phone",
    duration: 1000,
}
    );
app.use(appAOS)
app.mount('#app')