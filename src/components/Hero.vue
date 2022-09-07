<template>
    <div class="hero">
        <div class="max-width">
            <div class="hero-card" v-show="!mobile">
                <router-link to="/Boutiques">
                    <div class="cards release">
                        <img src="../assets/img/market.jpg" alt="">
                        <div class="count">
                            <div class="count-content">
                                Boutiques
                            </div>
                            {{countStore}}
                        </div>
                    </div>
                </router-link>
                <router-link to="/Produits">
                    <div class="cards release">
                        <img src="../assets/img/market.jpg" alt="">
                        <div class="count">
                            <div class="count-content">
                                Produits
                            </div>
                            {{countProduct}}
                        </div>
                    </div>
                </router-link>
                <router-link to="">
                    <div class="cards release">
                        <img src="../assets/img/market.jpg" alt="">
                        <div class="count">
                            <div class="count-content">
                                Services
                            </div>
                            {{countServices}}
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="hero-slide" v-show="!mobileNav">
                <swiper :slidesPerView="nbr" :spaceBetween="20" :freeMode="true" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div class="slide-img">
                            <router-link to="/Boutiques">
                                <img src="../assets/img/market.jpg" alt="">
                                <div class="info">
                                    <div class="slide-content">
                                        Boutiques
                                    </div>
                                    {{countStore}}
                                </div>
                            </router-link>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <router-link to="/Produits">
                            <div class="slide-img">
                                <img src="../assets/img/market.jpg" alt="">
                                <div class="info">
                                    <div class="slide-content">
                                        Produits
                                    </div>
                                    {{countProduct}}
                                </div>
                            </div>
                        </router-link>
                    </swiper-slide>
                    <swiper-slide>
                        <router-link to="">
                            <div class="slide-img">
                                <img src="../assets/img/market.jpg" alt="">
                                <div class="info">
                                    <div class="slide-content">
                                        Services
                                    </div>
                                    {{countServices}}
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

    // Import Swiper Vue.js components
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";

    import "swiper/css/free-mode";
    import "swiper/css/pagination";

    import "../assets/style/styleswiper/styleHero.css";

    // import required modules
    import {
        FreeMode,
        Pagination
    } from "swiper";



    export default {
        name: 'HeroContent',
        components: {
            Swiper,
            SwiperSlide,
        },

        setup() {
            return {
                modules: [FreeMode, Pagination],
            };
        },

        data() {
            return {
                mobile: null,
                windowWidth: null,
                mobileNav: null,
                countStore: null,
                countProduct: null,
                countServices: null,
                nbr: 2
            }
        },

        created() {
            window.addEventListener('resize', this.chekSreen)
            this.chekSreen()
            window.addEventListener('resize', this.checkslide2)
            this.checkslide2()
            window.addEventListener('resize', this.checkslide)
            this.checkslide()
        },
        methods: {
            chekSreen() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 1071) {
                    this.mobile = true
                    this.mobileNav = false
                    return;
                }
                this.mobile = false
                this.mobileNav = true
            },

            checkslide2() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 1085) {
                    this.nbr = 2
                }
            },
            checkslide() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 602) {
                    this.nbr = 1
                }
            }
        },
        mounted() {
            const ratio = .1
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: ratio
            }
            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    //le ratio nous permet de trouver l'intersection 
                    // console.log(entry.intersectionRatio)
                    if (entry.intersectionRatio > ratio) {
                        entry.target.classList.add('release-show')
                        //'observer.unobserve(entry.target)' nous d evetir les redondance
                        observer.unobserve(entry.target)
                    }
                });
            }
            const observer = new IntersectionObserver(callback, options);
            // observer.observe(document.querySelector('.release'))
            document.querySelectorAll('.release').forEach(function (r) {
                observer.observe(r)
            })

            EventService.getCount()
                .then((response) => {
                    this.countStore = response.data

                })
                .catch((error) => console.log(error))

            EventService.getCount2()
                .then((response) => {
                    this.countProduct = response.data

                })
                .catch((error) => console.log(error))

            EventService.getCount3()
                .then((response) => {
                    this.countServices = response.data

                })
                .catch((error) => console.log(error))
        }

    }
</script>

<style lang="scss" scoped>
    .hero {
        height: 100%;

        .max-width {
            height: 100%;

            .hero-card {
                display: flex;
                align-items: center;
                justify-content: space-around;
                height: 100%;

            }

            .cards {
                position: relative;
                margin: 170px 0 0 0;
                border-radius: 15px;
                width: 315px;


                img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 15px;
                    object-fit: cover;
                }

                .count {
                    position: absolute;
                    left: 0%;
                    top: 0%;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                }
            }

            .release {
                opacity: 0;
                transform: translateY(30px);
            }

            .release-show {
                opacity: 1;
                transform: translateY(0px);
                transition: 1.9s cubic-bezier(.5, 0, 0, 1);
            }

            .hero-slide {
                padding-top: 300px;
                width: 100%;

                .slide-img {
                    position: relative;
                    width: 100%;
                    height: 100%;

                    img {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .info {
                        position: absolute;
                        left: 0%;
                        top: 0%;
                        bottom: 0;
                        right: 0;
                        width: 100%;
                        height: 100%;
                        color: #fff;
                        font-size: 1.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }

                }

            }

        }


    }
</style>