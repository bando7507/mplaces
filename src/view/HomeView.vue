<template>
    <div class="home">
        <Navbar />
        <div class="class">
            <BannerHome />
        </div>
        <div class="curve">
            <div class="container">
                <Hero />
            </div>
        </div>
        <div class="ho"></div>
        <div class="ho2"></div>

        <section class="container--popular">
            <div class="container--popular--title">
                <div class="popular--title">
                    Boutiques en Vedettes
                </div>
            </div>
            <div class="vedette" v-show="!mobile">
                <BoutiquesVedettes v-for="(el, i) in vedettes" :key="i" :el="el" />
            </div>

            <div class="hero-slide" v-show="!mobileNav">
                <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(el, i) in vedettes" :key="i">
                        <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank" style="text-decoration: none;">
                            <div class="cards-img">
                                <img :src="this.img+el.coverimages[0].imageName.substr(0, 2)+'/'+el.coverimages[0].imageName"
                                    alt="">
                                <div class="position">{{el.categories.title}}</div>
                                <div class="name">{{el.title}}</div>
                                <div class="mini-card">
                                    Vedettes
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </section>

        <section class="container-pub">
            <Doublecards />
        </section>

        <section class="container--vedette">
            <div class="container--vedette--title">
                <div class="vedette--title">
                    Boutiques Populaires
                </div>
            </div>
            <div class="vedette" v-show="!mobile">
                <BoutiquePopulaire v-for="(el, i) in popular" :key="i" :el="el" />
            </div>

            <div class="hero-slide" v-show="!mobileNav">
                <swiper :slidesPerView="nbr" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="(el, i) in popular" :key="i">
                        <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank">
                            <div class="cards-img">
                                <img :src="this.img+el.coverimages[0].imageName.substr(0, 2)+'/'+el.coverimages[0].imageName"
                                    alt="">
                                <div class="card-popu-categories">
                                    {{el.categories.title}}

                                    {{el.title}}
                                    <br>
                                    {{el.views}}
                                </div>

                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </section>

        <section class="container--partenaire">
            <div class="container--partenaire--title">
                <div class="partenaire--title">
                    Nouveaux Partenaire Mplaces
                </div>
            </div>
            <BoutiquePartenaire />
        </section>

        <footer>
            <Footer />
        </footer>

        <div class="footer-2">
            <div class="end">
                2022 © Mplaces.net Tous Droits Reservés.
            </div>
        </div>
        <div class="header4">
            <div class="fin">
               
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Hero from '../components/Hero.vue'
    import BannerHome from '../components/BannerHome.vue'
    import BoutiquesVedettes from '../components/BoutiquesVedettes.vue'
    import Doublecards from '../components/Doublecards.vue'
    import BoutiquePopulaire from '../components/BoutiquePopulaire.vue'
    import BoutiquePartenaire from '../components/BoutiquePartenaire.vue'
    import Footer from '../components/Footer.vue'
    import EventService from '@/services/EventService'
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";
    import "../assets/style/styleswiper/styleVedette.css";
    // import required modules
    import {
        Pagination
    } from "swiper";

    export default {
        name: 'HomeView',

        components: {
            Navbar,
            Hero,
            BoutiquesVedettes,
            BannerHome,
            Doublecards,
            BoutiquePopulaire,
            BoutiquePartenaire,
            Footer,
            Swiper,
            SwiperSlide,
        },

        setup() {
            return {
                modules: [Pagination],
            };
        },

        data() {
            return {
                slides: [],
                popular: [],
                vedettes: [],
                mobile: null,
                mobileNav: null,
                windowWidth: null,
                img_b: process.env.VUE_APP_IMAGES + '/adminbanner/',
                img: process.env.VUE_APP_IMAGES_BOUTIQUE,
                search: '',
                countStore: null,
                nbr: 3
            }
        },

        created() {
            window.addEventListener('resize', this.checkScreen)
            this.checkScreen()
            window.addEventListener('resize', this.checkSreenslide)
            this.checkSreenslide()
        },

        methods: {
            checkScreen() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 1139) {
                    this.mobile = true
                    this.mobileNav = false
                    return
                }
                this.mobile = false
                this.mobileNav = true

            },
            checkSreenslide() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 816) {
                    this.nbr = 2
                }

                if (this.windowWidth <= 718) {
                    this.nbr = 1
                }
            },
            getSearch() {
                this.$router.push({
                    name: 'Searching',
                    params: {
                        name: this.search
                    }
                })
            }
        },

        mounted() {
            let section = document.querySelector('.curve')
            window.addEventListener('scroll', function () {

                let value = this.window.scrollY + 50;
                let value2 = this.window.scrollY + 53;
                section.style.clipPath = "ellipse(" + value2 + "%" + value + "% at 50% 98%)";
            })

            EventService.getBanners()
                .then((response) => {
                    const {
                        data
                    } = response
                    data.forEach((item) => {
                        this.slides.push(item)
                    })
                })
                .catch((error) => console.log(error))

            EventService.getVedette()
                .then((response) => {
                    const {
                        data
                    } = response
                    data.forEach((item) => {
                        this.vedettes.push(item)
                    })
                })
                .catch((error) => console.log(error))

            EventService.getPopularboutique()
                .then((response) => {
                    const {
                        data
                    } = response
                    data.forEach((item) => {
                        this.popular.push(item)
                    })
                })
                .catch((error) => console.log(error))
        }
    }
</script>

<style lang="scss" scoped>
    // @import "../assets/styles.scss";
    @import "../assets/style/stylehome.scss";
</style>