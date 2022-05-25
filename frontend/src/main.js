import Vue from 'vue';
import Vuelidate from 'vuelidate';
import mdiVue from 'mdi-vue/v2';
import * as mdijs from '@mdi/js';
import App from './App.vue';
import router from './router';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


Vue.use(mdiVue, {
  icons: mdijs,
});

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');








