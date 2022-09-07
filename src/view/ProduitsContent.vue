<template>
    <div class="produit-content">
        <Navbar />
        <div class="heigth"></div>
        <div class="banner">
            <div class="left">
                <h1 class="title">A propos</h1>
                <p class="para">Tout savoir sur mplaces.net</p>
            </div>
            <div class="right">
            </div>
        </div>


        <div class="produit-container">
            <div class="produit-title">
                <span>PRODUITS</span>
                <span>{{$route.params.name}}</span>
                <span>{{$route.params.title}}</span>
            </div>

            <div class="produit-container-flex">
                <div class="produit-container-left">
                    <img :src="this.img+'/'+$route.params.img.substr(0, 2)+'/'+$route.params.img" alt="">
                </div>
                <div class="produit-container-left">
                    <div class="produit-container-left-title">
                        {{$route.params.name}}
                    </div>
                    <div class="produit-container-left-price">
                        {{$route.params.price}} F CFA
                    </div>
                    <div class="produit-container-left-descrip">
                        {{$route.params.descrip}}
                    </div>
                    <div class="produit-container-left-link">
                        <a :href="'https://'+$route.params.slug+'.mplaces.net'" target="_blank">Voir le site</a>
                        <a :href="'https://'+$route.params.slug+'.mplaces.net'" target="_blank">Acheter</a>
                    </div>
                    <nav>
                        <ul>
                            <li>Date de Publication: </li>
                            <li>Catégorie: {{$route.params.categ}}</li>
                            <li>Vendu par: {{$route.params.title}} </li>
                        </ul>
                    </nav>

                </div>

            </div>
        </div>



        <!-- <div>
            {{$route.params.name}}
            {{$route.params.price}}
        </div> -->

        <footer>
            <Footer />
        </footer>

        <div class="footer-2">
            <div class="end">
                2022 © Mplaces.net Tous Droits Reservés.
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer.vue'
    export default {
        name: 'ProduitsContent',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                img: process.env.VUE_APP_IMAGES_STORE
            }
        }
    }
</script>

<style lang="scss" scoped>
    .produit-content {
        height: 100%;
        background: #fff;

        .heigth {
            padding-top: 90px;

        }


        .banner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 20vh;
            background: #6dc2f8;

            .left {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                height: 100%;

                .title {
                    color: #fff;
                }

                .para {
                    color: #fff;
                }

            }

            .right {
                background-image: url('../assets/img/bg-shop.png');
                background-size: cover;
                // background-position: center;
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
            }

        }

        .produit-container {

            .produit-title {
                display: flex;
                align-items: center;
                padding: 50px;

                span {
                    margin-right: 20px;
                }
            }

            .produit-container-flex {
                display: flex;
                align-items: center;
                // justify-content: space-between;
                padding: 0 100px;
                flex-wrap: wrap;

                .produit-container-left {
                    width: 500px;

                    img {
                        width: 100%;
                    }
                }

                .produit-container-left {
                    padding-left: 25px;

                    .produit-container-left-title {
                        font-size: 2.5rem;
                        padding-bottom: 20px;
                    }

                    .produit-container-left-price {
                        font-size: 1.3rem;
                        font-weight: bold;
                        padding-bottom: 20px;
                    }

                    .produit-container-left-descrip {
                        font-size: 1rem;
                        padding-bottom: 20px;
                    }

                    .produit-container-left-link {
                        a {
                            text-decoration: none;
                            padding: 0.8rem 1.8rem;
                            background: #6dc2f8;
                            border-radius: 25px;
                            font-size: 17px;
                            border: 2px solid #6dc2f8;
                            color: #000;
                            margin-left: 10px;
                            transition: .5s;

                            &:hover {
                                background: none;
                                color: #6dc2f8;
                            }
                        }
                    }

                    nav {
                        padding-top: 50px;

                        ul {
                            li {
                                list-style-type: none;
                                margin-top: 15px;
                            }
                        }
                    }
                }
            }
        }

        footer {
            height: 100%;
            padding: 85px 0;
            background: #fff;
        }

        .footer-2 {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 85px;
            background: #fff;

            .end {
                font-size: 0.7rem;
                color: lightgrey;
            }
        }
    }
</style>