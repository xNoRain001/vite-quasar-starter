const routes = [
  { path: '/', component: () => import('@/pages/Foo.vue') },
  { path: '/bar', component: () => import('@/pages/Bar.vue') }
]

export default routes
