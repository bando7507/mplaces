<template>
    <div class="double-card">
        <div class="left-card">
            <div class="text">
                <p>Prisiv Sarl Pour tous vos
                    <br>
                    accompagnement Multimédia
                </p>
                <div class="btn">
                    <a href="">Voici ici</a>
                </div>
            </div>
        </div>
        <div class="right-card">
            <vueper-slides fade :touchable="false" fixed-height="100%" :bullets="false" :arrows="false" autoplay>
                <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :image="slide.image">
                </vueper-slide>
            </vueper-slides>

        </div>
    </div>
</template>

<script>
    import {
        VueperSlides,
        VueperSlide
    } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    export default {
        name: 'DoublebCards',
        components: {
            VueperSlides,
            VueperSlide
        },
        data: () => ({
            slides: [{
                    image: require('@/assets/img/fruits.jpg'),
                },
                {
                    image: require('@/assets/img/market.jpg'),
                }
            ]
        })
    }
</script>

<style lang="scss" scoped>
    .double-card {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left-card {
            height: 60vh;
            width: 100%;
            background: #6dc2f8;

            .text {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                flex-direction: column;

                p {
                    font-size: 2rem;
                }

                .btn {
                    padding-top: 30px;

                    a {
                        text-decoration: none;
                        background: #fff;
                        padding: 15px;
                        border-radius: 15px;
                        color: #000;
                        transition: .5s;

                        &:hover {
                            opacity: 0.5;
                            color: lightgray;
                        }
                    }
                }
            }
        }

        .right-card {
            height: 60vh;
            width: 100%;
            background: rebeccapurple;
        }
    }


    @media (max-width: 631px) {
        .left-card {
            display: none;
        }
    }
</style>