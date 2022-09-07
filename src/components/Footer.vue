<template>
    <div class="footer">
        <div class="logo">
            <router-link to="/"><img src="../assets/img/logom2.png" alt=""></router-link>
            <p class="text">
                Découvrez l'application mplaces
            </p>
            <div class="service">
                <a href=""><img src="../assets/img/google-play.png" alt=""></a>
                <a href=""><img src="../assets/img/app-store.png" alt=""></a>
            </div>
        </div>
        <div class="link-serv">
            <div class="title">
                Mplaces.net
            </div>
            <div class="link">
                <ul>
                    <li>
                        <router-link class="link-footer" to="">A Propos</router-link>
                    </li>
                    <li>
                        <router-link class="link-footer" to="">Devenir Marchand</router-link>
                    </li>
                    <li>
                        <router-link class="link-footer" to="">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contacts">
            <div class="title">
                Nous Contacter
            </div>
            <div class="contact-us">
                <ul>
                    <li>Email: <a href="#">info@mplaces.net</a></li>
                    <li>+225 05 65 28 57 98 / 07 07 76 97 98</li>
                    <li>
                        <a href=""><img src="https://img.icons8.com/fluency/48/000000/facebook.png" /></a>
                        <a href=""><img src="https://img.icons8.com/fluency/48/000000/twitter-squared.png" /></a>
                        <a href=""><img src="https://img.icons8.com/color/48/000000/youtube-play.png" /></a>
                        <a href=""><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterContent',
        data() {
            return {
                aa: ''
            }
        },
        methods: {
            checkout() {
                this.$router.push({
                    path: '/Searchelement'
                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 350px 0 100px;
        height: 100%;



        .logo {
            img {
                width: 100px;
            }

            .text {
                padding: 20px 0;
            }

            .service {

                a:nth-child(2) {
                    margin-left: 20px;
                }

                a {
                    img {
                        width: 150px;
                    }
                }
            }
        }

        .link-serv {
            .title {
                font-size: 18px;
                margin-bottom: 55px;
            }

            .link {
                margin-top: 10px;

                ul li {
                    margin: 15px 0;
                    list-style-type: none;

                    .link-footer {
                        text-decoration: none;
                        color: rgb(42, 42, 42);
                    }
                }
            }
        }

        .contacts {
            .title {
                font-size: 18px;
            }

            .contact-us {
                margin-top: 25px;

                ul li {
                    margin: 15px 0;
                    list-style-type: none;
                }
            }
        }
    }


    @media (max-width: 1292px) {
        .footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 250px 0 100px;
            height: 100%;

            .logo {
                img {
                    width: 100px;
                    // padding: 0 0 20px 0;
                }

                .text {
                    padding: 20px 0;
                }

                .service {

                    a:nth-child(2) {
                        margin-left: 20px;
                    }

                    a {
                        img {
                            width: 150px;
                        }
                    }
                }
            }
        }

        @media (max-width: 1110px) {
            .footer {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 150px 0 100px;
                height: 100%;
            }

            @media (max-width: 982px) {
                .footer {
                    display: flex;
                    align-items: flex-start;
                    justify-content: start;
                    flex-direction: column;
                    padding: 30px 0 0 50px;
                }
            }
        }
    }
</style>