<template>
    <div class="propos">
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

        <div class="about--1">
            <div class="about--1-left">
                <img src="../assets/img/about1.jpg" alt="">
            </div>
            <div class="about--1-right">
                <p class="title">
                    Bienvue dans la Communauté Mplaces.net
                </p>

                <h2>
                    Notre mission
                </h2>

                <div class="paragraphe">
                    <p class="para--1">
                        Mplaces est une plateforme digitale gratuite et innovante pensée pour vous : commerçants,
                        entreprises, concepteurs, créateurs, businessmen et businesswomen afin de faire connaître vos
                        différents produits et prestations.
                    </p>
                    <br>
                    <p class="para--2">
                        Au-delà de son aspect promotionnel, laissez-vous donc embarquer dans cette nouvelle ère
                        commerciale et de digitalisation que vous offre Mplaces à travers ses différentes solutions
                        toutes à votre portée. Imaginez en tant qu'E-commerçants, en seulement quelques minutes, que ce
                        soit sur votre smartphone, tablette ou ordinateur vous pouvez-vous faire enregistrer sur Mplaces
                        n’importe où… Solution simple et efficace pour commencer à mettre en avant vos services.
                    </p>
                </div>
            </div>
        </div>

        <div class="about--1">
            <div class="about--1-right">
                <p class="title">
                    Soutenez nous !!!
                </p>

                <h2>
                    Faite un don
                </h2>

                <div class="paragraphe">
                    <p class="para--1">
                        Nous sommes de jeunes entrepreneurs et avons envie de participer au développement de l'Afrique.
                        En créant Mplaces le premier marché virtuel nous mettons en avant : commerçants, entreprises,
                        concepteurs, créateurs, businessmen et businesswomen afin de faire connaître nos différents
                        produits et prestations en Afrique.
                    </p>
                    <br>
                    <p class="para--2">
                        Nous avons le courage et le talent mais il nous manque les moyens financiers Nous recherchons
                        des sponsors afin de nous aider à améliorer notre projet.
                    </p>
                    <a href="#">Faire un don</a>
                </div>
            </div>

            <div class="about--1-left">
                <img src="../assets/img/contact1.jpg" alt="">
            </div>
        </div>

        <div class="container--end">
            <div class="end--title">
                Rejoindre L'équipe
            </div>
            <div class="end--paragraphe">
                <p>Nous sommes toujours à l'écoute de nouveaux talents</p>
                <p>n'hésiter pas à nous contacter</p>
            </div>

            <router-link class="link" :to="{name : ''}"> Nous Contacter</router-link>
        </div>
        <hr>
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
        name: 'AproposContent',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .propos {
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
                background: #6dc2f8;
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
                background-image: url('../assets/img/bg-about.png');
                background-size: cover;
              
                background-repeat: no-repeat;
                width: 100%;
                height: 100%;
            }

        }

        .about--1 {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0 auto;
            padding-top: 50px;
            padding: 0 100px;

            .about--1-left {
                width: 100%;
                height: 100%;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .about--1-right {
                width: 100%;
                height: 100%;
                padding: 15px;

                .title {
                    padding: 15px 0;

                }

                h2 {
                    padding: 15px 0;
                }

                .paragraphe {
                    .para--1 {
                        font-size: 16px;
                        line-height: 23px;
                        margin-bottom: 15px;
                    }

                    .para--2 {
                        font-size: 16px;
                        line-height: 23px;
                        margin-bottom: 15px;

                    }

                    a {
                        text-decoration: none;
                        background: #6dc2f8;
                        padding: 0.7rem 1.8rem;
                        border-radius: 20px;
                        border: 2px solid #6dc2f8;
                        color: #fff;
                        transition: .5s;

                        &:hover {
                            background: none;
                            color: #000;
                        }
                    }
                }
            }
        }

        .container--end {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 30vh;
            padding-top: 60px;

            .end--title {
                font-size: 2rem;
                padding: 20px 0;
            }

            .end--paragraphe {
                text-align: center;
                padding-bottom: 18px;
                font-size: 16px;
                line-height: 23px;
                vertical-align: baseline;
                color: #5d5d5d;

            }

            .link {
                text-decoration: none;
                background: #6dc2f8;
                padding: 0.7rem 1.8rem;
                border-radius: 20px;
                border: 2px solid #6dc2f8;
                color: #fff;
                transition: .5s;

                &:hover {
                    background: none;
                    color: #000;
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

    @media (max-width: 1034px) {
        .propos {
            .about--1 {
                display: flex;
                align-items: center;
                justify-content: space-around;

                margin: 0 auto;
                padding-top: 50px;
                padding: 0 10px;
            }
        }

        @media (max-width: 699px) {
            .propos {
                .about--1 {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    flex-direction: column;
                    margin: 0 auto;
                    padding-top: 50px;
                    padding: 30px 30px;
                }


                .banner {




                    .right {
                        display: none;
                    }

                }
            }
        }
    }
</style>