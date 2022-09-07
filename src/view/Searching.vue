<template>
    <div class="search-home">
        <Navbar />
        <div class="heigth"></div>

        <div class="container-boutique">
            <div class="container-boutique--title">
                <div class="text--1">
                    Boutiques
                </div>
                <div class="text--2">
                    <router-link to="/Boutiques">
                        Voir tous ({{countStore}})
                    </router-link>
                </div>
            </div>

            <div class="container-boutique-slide">
                <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">

                    <swiper-slide v-for="(el, i) in boutique" :key="i">

                        <div class="border">
                            <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank">
                                <div class="cards-img">
                                    <img :src="this.img+el.coverimages[0].imageName.substr(0, 2)+'/'+el.coverimages[0].imageName"
                                        alt="">
                                    <div class="card-bout-categories">
                                        {{el.categories.title}}
                                    </div>

                                    <div class="card-bout-title">
                                        {{el.title}}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </swiper-slide>

                </swiper>
            </div>

        </div>

        <div class="container-produits">
            <div class="container-produits--title">
                <div class="text--1">
                    Produits
                </div>
                <div class="text--2">
                    <router-link to="/Boutiques">
                        Voir tous ({{countProduits}})
                    </router-link>
                </div>
            </div>

            <div class="container-produits-slide">
                <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(el, i) in produits" :key="i">
                        <router-link
                            :to="{name: 'ProduitsContent', params:{name: el.name, price: el.price, img: el.productImages[0].imageName, descrip: el.description , slug: el.store.slug, categ: el.categoryProduct.title, title: el.store.title }}">
                            <div class="border">
                                <!-- {{el.store.Products[3].categoryProduct}} -->
                                <div class="cards-img">
                                    <img :src="this.img_p+'/'+el.productImages[0].imageName.substr(0, 2)+'/'+el.productImages[0].imageName"
                                        alt="">

                                    <div class="card-prod-categories">


                                    </div>
                                    <div class="card-prod-title">
                                        {{el.name}}
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="container-service">
            <div class="container-service--title">
                <div class="text--1">
                    Services
                </div>
                <div class="text--2">
                    <router-link to="/Boutiques">
                        Voir tous ({{countServices}})
                    </router-link>
                </div>
            </div>

            <div class="container-service-slide">
                <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(el, i) in services" :key="i">
                    <router-link :to="{name: 'ServicesContent', params:{name: el.name}}">
                        <div class="border">
                            <div class="cards-img">
                                <img :src="this.img_s+el.servicesimages[0].imageName.substr(0, 2)+'/'+el.servicesimages[0].imageName"
                                    alt="">

                                <div class="card-serv-categories">
                                    {{el.store.categories.title}}
                                </div>

                                <div class="card-serv-title">
                                    {{el.name}}
                                </div>
                            </div>
                        </div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import EventService from '../services/EventService'
    import Navbar from '../components/Navbar.vue'
    import axios from 'axios'
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";

    import "swiper/css/pagination";

    import "../assets/style/styleswiper/styleBoutiqueAcceuil.css";

    // import required modules
    import {
        Pagination
    } from "swiper";
    export default {
        name: 'SearchingElement',
        data() {
            return {
                boutique: [],
                produits: [],
                services: [],
                nbr: 4,
                img: process.env.VUE_APP_IMAGES_BOUTIQUE,
                img_p: process.env.VUE_APP_IMAGES_STORE,
                img_s: process.env.VUE_APP_IMAGES_SERVICE,
                countStore: null,
                countProduits: null,
                countServices: null,
            }
        },
        components: {
            Navbar,
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Pagination],
            };
        },

        methods: {
            getSearchboutique(name) {
                axios
                    .get(process.env.VUE_APP_API + `/home/search/store/${name}/1`)
                    // poulet/1
                    .then((response) => {
                        const {
                            data
                        } = response

                        data.forEach((item) => {
                            this.boutique.push(item)
                        })
                    })
                    .catch((error) => {
                        console.log(error)
                    })

            },

            getSearchproduit(name) {
                axios
                    .get(process.env.VUE_APP_API + `/home/search/product/${name}/1`)
                    .then((response) => {
                        const {
                            data
                        } = response
                        console.log(response)
                        data.forEach((item) => {
                            this.produits.push(item)
                        })
                    })
            },
            getSearchservice(name) {
                axios
                    .get(process.env.VUE_APP_API + `/home/search/services/${name}/1`)
                    .then((response) => {
                        const {
                            data
                        } = response
                        // console.log(response)

                        data.forEach((item) => {
                            this.services.push(item)
                        })
                    })
            },

            checkSreenslide() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 1341) {
                    this.nbr = 3
                }

                if (this.windowWidth <= 935) {
                    this.nbr = 2
                }
                if (this.windowWidth <= 547) {
                    this.nbr = 1
                }
            },

        },

        mounted() {
            console.log(process.env.VUE_APP_IMAGES_SERVICE)
            EventService.getCount()
                .then((response) => {
                    this.countStore = response.data
                })
                .catch((error) => console.log(error))

            EventService.getCount2()
                .then((response) => {
                    this.countProduits = response.data
                })
                .catch((error) => console.log(error))

            EventService.getCount3()
                .then((response) => {
                    this.countServices = response.data
                })
                .catch((error) => console.log(error))
        },
        created() {
            this.getSearchboutique(this.$route.params.name);
            this.getSearchproduit(this.$route.params.name);
            this.getSearchservice(this.$route.params.name);
            window.addEventListener('resize', this.checkSreenslide)
            this.checkSreenslide()
        }
    }
</script>

<style lang="scss" scoped>
    .search-home {
        background: #fff;

        .heigth {
            padding-top: 90px;
        }


        .container-boutique {
            padding: 0 50px;

            .container-boutique--title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 50px;

                .text--1 {
                    font-size: 2.5rem;
                }
            }
        }

        .container-boutique-slide {
            .border {
                width: 100%;
                height: 100%;
                border-radius: 30px;

                .cards-img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 30px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 30px;
                        object-fit: cover;
                    }

                    .card-bout-categories {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        font-size: 1.2rem;
                        color: #000;
                        z-index: 999;
                    }

                    .card-bout-title {
                        position: absolute;
                        bottom: 20px;
                        left: 10px;
                        font-size: 1rem;
                        color: #000;
                        z-index: 999;
                    }
                }
            }
        }

        .container-produits {
            padding: 0 50px;

            .container-produits--title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 50px;

                .text--1 {
                    font-size: 2.5rem;
                }
            }
        }

        .container-produits-slide {
            .border {
                width: 100%;
                height: 100%;
                border-radius: 30px;

                .cards-img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 30px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 30px;
                        object-fit: cover;
                    }

                    .card-prod-categories {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        font-size: 1.2rem;
                        color: #000;
                        z-index: 999;
                    }

                    .card-prod-title {
                        position: absolute;
                        bottom: 20px;
                        left: 10px;
                        font-size: 1rem;
                        color: #000;
                        z-index: 999;
                    }

                }
            }
        }

        .container-service {
            padding: 0 50px;

            .container-service--title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 50px;

                .text--1 {
                    font-size: 2.5rem;
                }
            }

        }

        .container-service-slide {

            .border {
                width: 100%;
                height: 100%;
                border-radius: 30px;

                .cards-img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 30px;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 30px;
                        object-fit: cover;
                    }

                    .card-serv-categories {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        font-size: 1.2rem;
                        color: #000;
                        z-index: 999;
                    }

                    .card-serv-title {
                        position: absolute;
                        bottom: 20px;
                        left: 10px;
                        font-size: 1rem;
                        color: #000;
                        z-index: 999;
                    }
                }
            }
        }
    }

    .swiper {
        width: 90%;
        height: 300px;
    }
</style>