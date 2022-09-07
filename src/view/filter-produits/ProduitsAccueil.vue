<template>
    <div class="produit--accueil">
        <div class="title">
            Boutiques Produits
        </div>

        <div class="hero-slide">
            <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">

                <swiper-slide v-for="(el, i) in popular" :key="i">
                    <router-link :to="{name: 'ProduitsContent', params:{name: el.name, price: el.price, img: el.productImages[0].imageName, descrip: el.description , slug: el.store.slug, categ: el.categoryProduct.title, title: el.store.title }}">
                        <div class="border">
                            <div class="cards-img">
                           
                                <img :src="this.img+'/'+el.productImages[0].imageName.substr(0, 2)+'/'+el.productImages[0].imageName"
                                    alt="">

                                <div class="card-prod-categories">
                                    {{el.categoryProduct.title}}
                                </div>

                                <div class="card-prod-title">
                                    {{el.name}}
                                    {{el.store.slug}}

                                </div>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>


        <div class="produit--accueil--max">
            <AllProducts v-for="(el, i) in allprod" :key="i" :el="el" />
        </div>
    </div>
</template>

<script>
    import EventService from '@/services/EventService'
    import AllProducts from '../../components/AllProducts.vue'

    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";

    // Import Swiper styles

    import "swiper/css";

    import "swiper/css/pagination";

    import "../../assets/style/styleswiper/styleBoutiqueAcceuil.css";

    // import required modules
    import {
        Pagination
    } from "swiper";
    export default {
        name: 'ProduitsAccueil',
        data() {
            return {
                popular: [],
                allprod: [],
                mobile: null,
                windowWidth: null,
                mobileNav: null,
                nbr: 3,
                img: process.env.VUE_APP_IMAGES_STORE
            }
        },
        components: {
            Swiper,
            SwiperSlide,
            AllProducts
        },
        setup() {
            return {
                modules: [Pagination],
            };
        },
        
        created() {
            window.addEventListener('resize', this.checkSreenslide)
            this.checkSreenslide()

        },
        methods: {
            checkSreenslide() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 1105) {
                    this.nbr = 2
                }
                if (this.windowWidth <= 568) {
                    this.nbr = 1
                }
            },
        },
        mounted() {
            EventService.getPopularproduit()
                .then((response) => {
                    const {
                        data
                    } = response
                    console.log(response)

                    data.forEach((item) => {
                        this.popular.push(item)
                    })
                })

                                
            EventService.getAllproduit()
                .then((response) => {
                    const {
                        data
                    } = response

                    data.forEach((item) => {
                        this.allprod.push(item)
                    })
                })
        }
    }
</script>

<style lang="scss" scoped>
    .produit--accueil {
        width: 100%;
        height: 100%;

        .title {
            padding: 20px 20px 20px 20px;
            font-size: 2rem;
        }

        .max {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }

        .hero-slide {
            // padding: 50px 50px 0 50px;

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
                        background: red;

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


        .produit--accueil--max{
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 10px;
        }
    }

    .swiper {
        width: 90%;
        height: 300px;
    }
</style>