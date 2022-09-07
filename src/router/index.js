import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '../view/HomeView.vue'
// import Searchelement from '../view/Searchelement.vue'
import Boutiques from '../view/Boutiques.vue'
import Produits from '../view/Produits.vue'


const routes = [{
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/Apropos",
        name: 'Apropos',
        component: () =>
            import ( /* webpackChunkName: "Searching" */ '../view/Apropos.vue')
    },
    {
        path: "/Contacts",
        name: 'Contacts',
        component: () =>
            import ( /* webpackChunkName: "Searching" */ '../view/Contacts.vue')
    },
    {
        path: "/Produits",
        component: Produits,
        children: [{
                path: '',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-produits/ProduitsAccueil.vue')
            },
            // {
            //     path: '/Beaute',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Beaute.vue')
            // },
            // {
            //     path: '/Restauration',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Restauration.vue')
            // },
            // {
            //     path: '/mode',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Mode.vue')
            // },
            // {
            //     path: '/Divers',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Divers.vue')
            // },

            // {
            //     path: '/Vetements',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Vetements.vue')
            // },
        ],
    },
    {
        path: "/Boutiques",
        component: Boutiques,
        children: [{
                path: '',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/BoutiqueAccueil.vue')
            },
            {
                path: '/Beaute',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Beaute.vue')
            },
            {
                path: '/Restauration',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Restauration.vue')
            },
            {
                path: '/mode',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Mode.vue')
            },
            {
                path: '/Divers',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Divers.vue')
            },

            {
                path: '/Vetements',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Vetements.vue')
            },
        ],

    },
    {
        path: "/Services",
        component: Boutiques,
        children: [{
                path: '',
                component: () =>
                    import ( /* webpackChunkName: "Searching" */ '../view/filter-services/ServicesAccueil.vue')
            },
            // {
            //     path: '/Beaute',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Beaute.vue')
            // },
            // {
            //     path: '/Restauration',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Restauration.vue')
            // },
            // {
            //     path: '/mode',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Mode.vue')
            // },
            // {
            //     path: '/Divers',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Divers.vue')
            // },

            // {
            //     path: '/Vetements',
            //     component: () =>
            //         import ( /* webpackChunkName: "Searching" */ '../view/filter-boutique/Vetements.vue')
            // },
        ],

    },



    {
        path: "/Searching/:name",
        name: 'Searching',
        component: () =>
            import ( /* webpackChunkName: "Searching" */ '../view/Searching.vue')
    },
    {
        path: "/ProduitsContent/:name/:price/:img/:descrip/:slug/:categ/:title",
        name: 'ProduitsContent',
        component: () =>
            import ( /* webpackChunkName: "Searching" */ '../view/ProduitsContent.vue')
    },
    {
        path: "/ServicesContent/:name",
        name: 'ServicesContent',
        component: () =>
            import ( /* webpackChunkName: "Searching" */ '../view/ServicesContent.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router