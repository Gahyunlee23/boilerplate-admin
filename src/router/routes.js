const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'products', component: () => import('pages/ProductPage.vue'), meta: { label: 'Web Products', icon: 'inventory' } },
      { path: 'Renderer', component: () => import('pages/ConfiguratorRendererPage.vue'), meta: { label: 'PrintQ Matrix', icon: 'dashboard' } },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
