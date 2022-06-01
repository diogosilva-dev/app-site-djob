import Vue from "vue";
import Router from "vue-router";
import NProgress from 'nprogress'; //VER DEPOIS
import Home from "@/views/home/HomeNavigationViews";
import Produto from "@/views/produto/ProdutoViews.vue";
import Login from "@/views/login/LoginViews.vue";
import CadastroUsuario from "@/views/cadastrar-usuario/CadastrarUsuarioViews.vue";
import Ajuda from "@/views/ajuda/AjudaViews.vue";
import Contato from "@/views/contato/ContatoViews.vue";
import Usuario from "@/views/usuario/Usuario";
import UsuarioProdutos from "@/views/usuario/UsuarioProdutos.vue";
import UsuarioVendas from "@/views/usuario/UsuarioVendas.vue";
import UsuarioCompras from "@/views/usuario/UsuarioCompras";
import UsuarioEditar from "@/views/usuario/UsuarioEditar";
import Sobre from "@/views/sobre/SobreViews.vue";
import PoliticaPrivacidade from "@/views/politica-privacidade/PoliticaPrivacidade.vue";
import Revendedor from "@/views/revendedor/RevendedorViews.vue";
import PaginaNaoEncontrada from "@/views/pagina-nao-encontrada/PaginaNaoEncontradaViews.vue";


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      component: PaginaNaoEncontrada
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contato",
      name: "Contato",
      component: Contato
    },
    {
      path: "/ajuda",
      name: "Ajuda",
      component: Ajuda
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },{
      path: "/cadastro",
      name: "CadastroUsuario",
      component: CadastroUsuario
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true
    },
    {
      path: "/usuario",
      component: Usuario,
      meta: {
        login: true
      },
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioProdutos
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioCompras
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendas
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditar
        }
      ]
    },
    {
      path:"/sobre",
      name: "sobre",
      component: Sobre
    },
    {
      path:"/politica-privacidade",
      name: "PoliticaPrivacidade",
      component: PoliticaPrivacidade
    },
    {
      path:"/revendedor",
      name: "Revendedor",
      component: Revendedor
    }
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});


// Lógica inerente ao NProgress
router.beforeResolve((to, from, next) => {
  // Se caso não for uma página inicial de carregamento
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

// Lógica inerente ao realizar o 'Log out' remover o token no local Storage:
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  // Completando a animação da rota no NProgress
  NProgress.done();
});


export default router;
