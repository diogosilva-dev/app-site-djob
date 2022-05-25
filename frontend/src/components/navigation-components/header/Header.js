import BuscarComponent from '@/components/navigation-components/buscar/BuscarComponent.vue'
import NewslatterComponent from '@/components/navigation-components/newslatter/NewslatterComponent.vue'
import NavbarHeaderComponent from '@/components/navigation-components/nav-bar-header/NavBarHeaderComponent.vue'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuActive: false,
      isModalActive: false
    };
  },
  components:{
    BuscarComponent,
    NewslatterComponent,
    NavbarHeaderComponent,
  },
  methods: {
    handleClick(){
      this.$refs.NewslatterComponent.abrirModalNewslatter();
    }
  },
  
};
