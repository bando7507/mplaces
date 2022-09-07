<template>
    <div class="vede">
        <div class="max">
            <div class="hero-card">
                <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank">
                    <div class="border">
                        <div class="cards-img">
                            <img :src="this.img+el.coverimages[0].imageName.substr(0, 2)+'/'+el.coverimages[0].imageName"
                                alt="">
                            <div class="card-popu-categories">
                                {{el.categories.title}}
                            </div>
                            <div class="card-popu-title">
                                {{el.title}}
                                <br>
                                {{el.views}}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardBoutiqueaccueil',
        props: {
            el: {
                Array
            }
        },
        data() {
            return {
                img: process.env.VUE_APP_IMAGES_BOUTIQUE
            }
        },
    }
</script>

<style lang="scss" scoped>
    .vede {
        .max {
            .cards-img {
                position: relative;
                width: 250px;
                height: 60%;

                img {
                    border-radius: 15px;
                    width: 100%;
                    height: 100%;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
                }

                .card-popu-categories {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    font-size: 1.2rem;
                    color: #fff;
                }

                .card-popu-title {
                    position: absolute;
                    bottom: 20px;
                    left: 25px;
                    font-size: 1rem;
                    color: #fff;
                }
            }
        }
    }
</style>