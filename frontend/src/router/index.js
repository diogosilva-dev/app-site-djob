import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/pages/home/HomeNavigationViews.vue'),
  },
  {
    path: '/homeUser',
    name: 'homeUser',
    component: () => import('@/components/auth-components/home-user/HomeUserComponent.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/contato',
    name: 'ContatoComponent',
    component: () => import('@/components/navigation-components/contato/ContatoComponent.vue'),
  },
  {
    path: '/ajuda',
    name: 'Ajuda',
    component: () => import('@/views/pages/ajuda/Ajuda.vue'),
  },
  {
    path: '/produto/:referencia',
    name: 'Produto',
    component: () => import('@/views/pages/produto/ProdutoViews.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'HomeLogin',
    component: () => import('@/views/pages/login/LoginViews.vue'),
    /*
    meta: {
      requireAuth: true,
    },
    */
  },
  {
    path: '/register',
    name: 'HomeRegister',
    component: () => import('@/views/pages/HomeRegister.vue'),
  },
  {
    path: '/sobre',
    name: 'SobreComponent',
    component: () => import('@/components/navigation-components/sobre/SobreComponent.vue'),
  },
  {
    path: '/politica-privacidade',
    name: 'PoliticaPrivacidade',
    component: () => import('@/views/pages/politica-privacidade/PoliticaPrivacidade.vue'),
  },
  {
    path: '/register',
    name: 'RegisterComponent',
    component: () => import('@/components/auth-components/register/RegisterComponent.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
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
