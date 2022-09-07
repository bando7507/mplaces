<template>
    <swiper class="mySwiper">
        <swiper-slide v-for="(img, i) in slides" :key="i" class="pos">
            <img :src="this.img_b+img.imageName.substr(0, 2)+'/'+img.imageName" alt="">
            <div class="form">
                <form action="" @submit.prevent="signUpButtonPressed">
                    <!-- <input type="text" name="" id="" v-model="el"> -->
                    <div class="bar">
                        <input class="searchbar" v-model="el" type="text" title="Search">
                    </div>
                    <button class="button">search</button>
                </form>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";

    // Import Swiper styles
    import "swiper/css";

    import "../assets/style/styleswiper/styleBanner.css";

    import EventService from '../services/EventService'

    export default {
        name: 'BannerHome',
        data() {
            return {
                slides: [],
                el: "",
                img_b: process.env.VUE_APP_IMAGES + '/adminbanner/',
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {};
        },
        methods: {
            signUpButtonPressed() {
                this.$router.push({
                    name: "Searching",
                    params: {
                        name: this.el
                    }
                })
            }
        },

        mounted() {
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
        },
    };
</script>

<style lang="scss" scoped>
    .pos {
        position: relative;
        width: 100%;
        height: 100%;

        .form {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;


            form {
                width: 500px;
                .bar {
                    margin: 0 auto;
                    width: 100%;
                    border-radius: 30px;
                    // border: 1px solid #dcdcdc;
                }

                .bar:hover {
                    box-shadow: 1px 1px 8px 1px #dcdcdc;
                }

                .bar:focus-within {
                    box-shadow: 1px 1px 8px 1px #dcdcdc;
                    outline: none;
                }
                .searchbar {
                    height: 45px;
                    border: none;
                    width: 100%;
                    font-size: 16px;
                    border-radius: 30px;
                    outline: none;
                    padding: 0 20px ;

                }

                .button {
                    background-color: #f5f5f5;
                    border: none;
                    color: #707070;
                    font-size: 15px;
                    padding: 10px 20px;
                    margin: 5px;
                    border-radius: 4px;
                    outline: none;
                }

                .button:hover {
                    border: 1px solid #c8c8c8;
                    padding: 9px 19px;
                    color: #808080;
                }

                .button:focus {
                    border: 1px solid #4885ed;
                    padding: 9px 19px;
                }
            }

        }

    }

    .swiper {
        width: 100%;
        height: 100vh;
    }
</style>