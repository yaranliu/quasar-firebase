
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '/sign-in', name:'sign-in', component: () => import('pages/auth/SignInPage.vue'), meta: { requiresSignOut: true }  },
      { path: '/sign-up', name:'sign-up', component: () => import('pages/auth/SignUpPage.vue'), meta: { requiresSignOut: true } },

      // Public pages
      { path: '/news', name:'news', component: () => import('pages/common/NewsPage.vue') },
      { path: '/support', name:'support', component: () => import('pages/common/SupportPage.vue') },
      { path: '/util/theme', name:'util-theme', component: () => import('pages/util/ThemePage.vue') },

      // Authenticated pages
      { path: '/me', name:'me', component: () => import('pages/user/HomePage.vue'), meta: { requiresAuth: true } },
      { path: '/inbox', name:'inbox', component: () => import('pages/user/InboxPage.vue'), meta: { requiresAuth: true } },
    ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
