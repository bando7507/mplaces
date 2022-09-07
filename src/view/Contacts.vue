<template>
    <div class="contacts">
        <Navbar />
        <div class="heigth"></div>
        <div class="banner">
            <div class="left">
                <h1 class="title">Nous Contacter</h1>
                <p class="para">Nous sommes à l'écoute</p>
            </div>
            <div class="right">
            </div>
        </div>

        <div class="containt--contacts">
            <div class="contacts--left">
                <div class="max-width">
                    <div class="title">
                        Nos Contacts
                    </div>
                    <div class="text--1">
                        Contact Direct
                    </div>
                    <div class="text--2">
                        info@mplaces.net
                        <br>
                        <br>
                        (+225) 07 07 76 97 98 / 05 65 28 57 98
                    </div>
                    <div class="text--3">
                        Siège
                    </div>
                    <div class="text--4">
                        Marcory Résidentiel, Abidjan , Côte D'Ivoire
                        <a href="#">Voir sur la carte</a>
                    </div>

                    <div class="nav">
                        <div class="nav--title">
                            Nos Services
                        </div>
                        <ul>
                            <li>Mise en bannière du site officiel sur nos différents sites</li>
                            <li>Mise en avant du site officiel sur nos différentes applications</li>
                            <li>Campagne de publicités du site officiel par Email</li>
                            <li>Campagne de publicité du site officiel par SMS</li>
                            <li>Campagne de publicité du site officiel par Notification Push (Android)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="contacts--right">
                <div class="max-width">

                    <div class="form">

                        <div class="title">Welcome</div>
                        <div class="subtitle">Lorem, ipsum dolor sit ame</div>
                        <div class="input-container ic1">
                            <input id="firstname" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label for="firstname" class="placeholder">Votre Nom</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="lastname" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label for="lastname" class="placeholder">Votre/Vos Prenom(s)</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="email" class="input" type="text" placeholder=" " />
                            <div class="cut cut-short"></div>
                            <label for="email" class="placeholder">Votre email</label>
                        </div>

                        <div class="input-container ic2">
                            <input id="number" class="input" type="text" placeholder=" " />
                            <div class="cut"></div>
                            <label for="number" class="placeholder">Numero de téléphone</label>
                        </div>

                        <div class="input-container ic2">
                            <textarea id="email" class="textarea" type="text" placeholder=" "></textarea>
                            <div class="cut cut-short"></div>
                            <label for="email" class="placeholder">Rédiger votre demande</label>
                        </div>

                        <button type="text" class="submit">submit</button>
                    </div>

                </div>
            </div>

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
        name: 'ContactsContent',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .contacts {
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

        .containt--contacts {
            display: flex;
            align-items: center;
            justify-content: space-between;


            .contacts--left {
                width: 100%;

                .max-width {
                    padding: 50px 70px;

                    .title {
                        font-size: 2rem;
                        padding-bottom: 20px;
                    }

                    .text--1 {
                        padding: 20px 0;
                        font-size: 18px;
                       
                    }

                    .text--2 {
                        padding-bottom: 20px;
                        font-size: 14px;
                        color: #5d5d5d;
                    }

                    .text--3 {
                        padding-bottom: 18px;
                        font-size: 18px;
                        
                    }

                    .text--4 {
                        padding-bottom: 20px;
                        font-size: 14px;
                        color: #5d5d5d;
                    }

                    .nav {
                        .nav--title {
                            padding: 20px 0;
                            font-size: 2rem;
                        }

                        ul {
                            li {
                                padding: 7px 0;
                                font-size: 0.8rem;
                                color: #5d5d5d;
                            }
                        }
                    }

                }
            }

            .contacts--right {
                width: 100%;
                padding: 65px 0;
                height: 100%;


                .max-width {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;


                    .form {
                        background-color: #6dc2f8;
                        border-radius: 20px;
                        box-sizing: border-box;
                        height: 650px;
                        padding: 20px;
                        width: 500px;
                    }

                    .title {
                        color: #eee;
                        font-family: sans-serif;
                        font-size: 36px;
                        font-weight: 600;
                        margin-top: 30px;
                    }

                    .subtitle {
                        color: #eee;
                        font-family: sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        margin-top: 10px;
                    }

                    .input-container {
                        height: 50px;
                        position: relative;
                        width: 100%;
                    }

                    .ic1 {
                        margin-top: 40px;
                    }

                    .ic2 {
                        margin-top: 30px;
                    }

                    .input {
                        background-color: #303245;
                        border-radius: 12px;
                        border: 0;
                        box-sizing: border-box;
                        color: #eee;
                        font-size: 18px;
                        height: 100%;
                        outline: 0;
                        padding: 4px 20px 0;
                        width: 100%;
                    }

                    .textarea {
                        background-color: #303245;
                        border-radius: 12px;
                        border: 0;
                        box-sizing: border-box;
                        color: #eee;
                        font-size: 18px;
                        height: 80px;
                        outline: 0;
                        padding: 4px 20px 0;
                        width: 100%;
                        resize: none;
                    }

                    .cut {
                        background-color: #6dc2f8;
                        border-radius: 10px;
                        height: 20px;
                        left: 20px;
                        position: absolute;
                        top: -20px;
                        transform: translateY(0);
                        transition: transform 200ms;
                        width: 130px;
                    }

                    .cut-short {
                        width: 130px;
                    }

                    .input:focus~.cut,
                    .input:not(:placeholder-shown)~.cut {
                        transform: translateY(8px);
                    }

                    .textarea:focus~.cut,
                    .textarea:not(:placeholder-shown)~.cut {
                        transform: translateY(8px);
                    }

                    .placeholder {
                        color: #65657b;
                        font-family: sans-serif;
                        left: 20px;
                        line-height: 14px;
                        pointer-events: none;
                        position: absolute;
                        transform-origin: 0 50%;
                        transition: transform 200ms, color 200ms;
                        top: 20px;
                    }

                    .input:focus~.placeholder,
                    .input:not(:placeholder-shown)~.placeholder {
                        transform: translateY(-30px) translateX(10px) scale(0.75);
                    }

                    .textarea:focus~.placeholder,
                    .textarea:not(:placeholder-shown)~.placeholder {
                        transform: translateY(-30px) translateX(10px) scale(0.75);
                    }

                    .input:not(:placeholder-shown)~.placeholder {
                        color: #808097;
                    }

                    .textarea:not(:placeholder-shown)~.placeholder {
                        color: #808097;
                    }

                    .input:focus~.placeholder {
                        color: #dc2f55;
                    }

                    .textarea:focus~.placeholder {
                        color: #dc2f55;
                    }

                    .submit {
                        background-color: #08d;
                        border-radius: 12px;
                        border: 0;
                        box-sizing: border-box;
                        color: #eee;
                        cursor: pointer;
                        font-size: 18px;
                        height: 50px;
                        margin-top: 38px;
                        // outline: 0;
                        text-align: center;
                        width: 100%;
                    }

                    .submit:active {
                        background-color: #06b;
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


    @media (max-width: 915px) {
        .contacts {

            .containt--contacts {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
            }
        }

    }
</style>