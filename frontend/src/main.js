import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PaginaCarregando from "@/components/navigation-components/loading/LoadingComponent.vue";
import ErroNotificacao from "@/components/navigation-components/ErroNotificacao/ErroNotificacaoComponent.vue";
import Vuelidate from 'vuelidate';
import mdiVue from 'mdi-vue/v2';
import * as mdijs from '@mdi/js';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

Vue.config.productionTip = false;

Vue.component("PaginaCarregando", PaginaCarregando);
Vue.component("ErroNotificacao", ErroNotificacao);

Vue.use(mdiVue, {icons: mdijs});
Vue.use(Vuelidate);

Vue.filter("numeroPreco", valor => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
});


delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');








