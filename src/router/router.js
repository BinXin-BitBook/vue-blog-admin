import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录',
        requireAuth: false,
    },
    component: () =>
        import ('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在',
        requireAuth: false,
    },
    component: () =>
        import ('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    meta: {
        requireAuth: false,
        requireAuth: false,
    },
    component: () =>
        import ('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误',
        requireAuth: false,
    },
    name: 'error-500',

    component: () =>
        import ('@/views/error-page/500.vue')
};


export const locking = {
    path: '/locking',
    name: 'locking',
    component: () =>
        import ('@/views/main-components/lockscreen/components/locking-page.vue')
};
export const index = {
    path: '/',
    redirect: '/blog/index',
}

export const blog = {
    path: '/blog',
    name: 'blog',
    component: () =>
        import ('@/views/blog/front/index.vue'),
    redirect: '/blog/index',
    children: [{
            path: 'index',
            name: 'index',
            title: "主页",
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/main.vue'),
        }, {
            path: 'article/:id',
            name: 'article',
            title: "yukong的个人博客",
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/article.vue'),
        },
        {
            path: 'archive',
            name: 'archive1',
            title: "yukong的个人博客",
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/archive.vue'),
        },
        {
            path: 'archive/:year/:month',
            name: 'archive2',
            title: "yukong的个人博客",
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/archive.vue'),
        },
        {
            path: 'category',
            name: 'category',
            title: 'yukong的个人博客',
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/category.vue')
        },
        {
            path: 'category/:categoryName',
            name: 'category1',
            title: 'yukong的个人博客',
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/category.vue')
        },
        {
            path: 'tag',
            name: 'tag',
            title: 'yukong的个人博客',
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/tag.vue')
        },
        {
            path: 'tag/:tagName',
            name: 'tag1',
            title: 'yukong的个人博客',
            meta: {
                requireAuth: false,
            },
            component: () =>
                import ('@/views/blog/front/tag.vue')
        }

    ]
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/sys',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [{
            path: 'home',
            title: {
                i18n: 'home'
            },
            name: 'home_index',
            component: () =>
                import ('@/views/home/home.vue')
        },
        {
            path: 'ownspace',
            title: '个人中心',
            name: 'ownspace_index',
            component: () =>
                import ('@/views/own-space/own-space.vue')
        },
        {
            path: 'order/:order_id',
            title: '订单详情',
            name: 'order-info',
            component: () =>
                import ('@/views/advanced-router/component/order-info.vue')
        }, // 用于展示动态路由
        {
            path: 'shopping',
            title: '购物详情',
            name: 'shopping',
            component: () =>
                import ('@/views/advanced-router/component/shopping-info.vue')

        }, // 用于展示带参路由
        {
            path: 'message',
            title: '消息中心',
            name: 'message_index',
            component: () =>
                import ('@/views/message/message.vue')

        },
        {
            path: '/write-blog/index/:id',
            title: '写博客',
            name: 'write_blog_index1',
            meta: {
                keepAlive: true // 需要被缓存
            },
            component: () =>
                import ('@/views/blog/write/write-blog.vue')
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [

    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [{
            path: 'index',
            title: '错误页面',
            name: 'errorpage_index',
            meta: {
                requireAuth: true
            },
            component: () =>
                import ('@/views/error-page/error-page.vue')
        }]
    },
    {
        path: '/write-blog',
        icon: 'compose',
        name: 'write_blog',
        component: Main,
        title: '写博客',
        children: [{
            path: 'index',
            title: '写博客',
            name: 'write_blog_index',
            meta: {
                requireAuth: true
            },
            component: () =>
                import ('@/views/blog/write/write-blog.vue')
        }]

    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '博客管理',
        component: Main,
        children: [{
                path: 'category-list',
                icon: 'ios-folder',
                name: 'category-list',
                title: '类目管理',
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ('@/views/blog/category/category-list.vue')
            },
            {
                path: 'tag-list',
                icon: 'pricetags',
                name: 'tag-list',
                title: '标签管理',
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ('@/views/blog/tag/tag-list.vue')
            },
            {
                path: 'blog-list',
                icon: 'ios-book',
                name: 'blog-list',
                title: '博文管理',
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ('@/views/blog/blog/index.vue')
            },
            {
                path: 'notice-editor',
                icon: 'speakerphone',
                name: 'notice-editor',
                title: '公告管理',
                meta: {
                    requireAuth: true
                },
                component: () =>
                    import ('@/views/blog/notice/notice-list.vue')
            },

        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    locking,
    blog,
    index,
    ...appRouter,
    page500,
    page403,
    page404
];