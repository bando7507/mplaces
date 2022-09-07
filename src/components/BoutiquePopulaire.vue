<template>
    <div class="vedettes">
        <div class="max-width">
            <div class="hero-card">
                <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank">
                    <div class="border">
                        <div class="cards-img release">
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
        name: 'BoutiquePopulaire',
        props: {
            el: {
                Array
            }
        },
        data() {
            return {
                mobile: null,
                windowWidth: null,
                mobileNav: null,
                nbr: 3,
                img: process.env.VUE_APP_IMAGES_BOUTIQUE
            }
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
                if (this.windowWidth <= 1071) {
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
            const ratio = .1
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: ratio
            }
            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > ratio) {
                        entry.target.classList.add('release-show')
                        observer.unobserve(entry.target)
                    }
                });
            }
            const observer = new IntersectionObserver(callback, options);
            // observer.observe(document.querySelector('.release'))
            document.querySelectorAll('.release').forEach(function (r) {
                observer.observe(r)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .vedettes {
        .max-width {
            P .hero-card {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 100%;
                height: 85vh;

                .border {
                    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
                    border-radius: 15px;
                    height: 370px;
                }
            }

            .hero-slide {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 85vh;

                .border {
                    border-radius: 15px;
                    height: 370px;


                }
            }

            .cards-img {
                position: relative;
                width: 280px;
                height: 100%;
                transition: 0.5s;

                &:hover {
                    transform: scale(1.09);
                }

                img {
                    border-radius: 15px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: 0.5s;

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
                    font-size: 1.5rem;
                    color: #fff;
                }
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
    }
</style>