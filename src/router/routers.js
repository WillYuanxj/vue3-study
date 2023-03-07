const routes = [
    {
        path: '/login',
        name: 'login',
        title: '登录',
        component: () => import('../views/login/index.vue'), //.vue不能省略
    },
    {
        path: '/slotDemo',
        name: 'slotDemo',
        title: '插槽',
        component: () => import('../views/slotDemo/index.vue'), //.vue不能省略
    },
    {
        path: '/refDemo',
        name: 'refDemo',
        title: 'ref',
        component: () => import('../views/refDemo/index.vue'), //.vue不能省略
    },
    {
        path: '/reactiveDemo',
        name: 'reactiveDemo',
        title: 'reactive',
        component: () => import('../views/reactiveDemo/index.vue'), //.vue不能省略
    },
    {
        path: '/computedDemo',
        name: 'computedDemo',
        title: 'reactive',
        component: () => import('../views/computedDemo/index.vue'), //.vue不能省略
    },
    {
        path: '/watchDemo',
        name: 'watchDemo',
        title: 'reactive',
        component: () => import('../views/watchDemo/index.vue'), //.vue不能省略
    },
    {
        path: '/teleportDemo',
        name: 'teleportDemo',
        title: 'reactive',
        component: () => import('../views/teleportDemo/index.vue'), //.vue不能省略
    }
]
export  default routes
