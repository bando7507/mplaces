<template>
    <div class="acceuil">
        <div class="title">
            Boutiques Populaires
        </div>
        <div class="max" v-show="!mobile">
            <CardBoutiqueaccueil v-for="(el, i) in popular" :key="i" :el="el" />
        </div>

        <div class="hero-slide" v-show="!mobileNav">
            <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(el, i) in popular" :key="i">
                <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank">
                    <div class="border">
                        <div class="cards-img">
                            <img :src="this.img+el.coverimages[0].imageName.substr(0, 2)+'/'+el.coverimages[0].imageName"
                                alt="">

                            <div class="card-bout-categories">
                                {{el.categories.title}}
                            </div>

                            <div class="card-bout-title">
                                {{el.title}}
                                <br>
                                {{el.views}}
                            </div>
                        </div>
                    </div>
                    </a>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import EventService from '@/services/EventService'

    import CardBoutiqueaccueil from '../../components/CardBoutiqueaccueil.vue'

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
        name: 'BoutiqueAccueil',
        data() {
            return {
                popular: [],
                mobile: null,
                windowWidth: null,
                mobileNav: null,
                nbr: 2,
                img: process.env.VUE_APP_IMAGES_BOUTIQUE
            }
        },
        components: {
            Swiper,
            SwiperSlide,
            CardBoutiqueaccueil
        },
        setup() {
            return {
                modules: [Pagination],
            };
        },

        created() {
            window.addEventListener('resize', this.checkSreen)
            this.checkSreen()
            window.addEventListener('resize', this.checkSreenslide)
            this.checkSreenslide()


        },
        methods: {
            checkSreen() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 1309) {
                    this.mobile = true
                    this.mobileNav = false
                    return;
                }
                this.mobile = false
                this.mobileNav = true
            },
            checkSreenslide() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 816) {
                    this.nbr = 2
                }

                if (this.windowWidth <= 568) {
                    this.nbr = 1
                }
            },
        },

        mounted() {
            EventService.getPopularboutique()
                .then((response) => {
                    const {
                        data
                    } = response
                    console.log(response)

                    data.forEach((item) => {
                        this.popular.push(item)
                    })
                })
        }
    }
</script>

<style lang="scss" scoped>
    .acceuil {
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
            padding: 50px 50px 0 50px;

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
                    }

                    .card-bout-categories {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                        font-size: 1.2rem;
                        color: #fff;
                        z-index: 999;
                    }

                    .card-bout-title {
                        position: absolute;
                        bottom: 20px;
                        left: 10px;
                        font-size: 1rem;
                        color: #fff;
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