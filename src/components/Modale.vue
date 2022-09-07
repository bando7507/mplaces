<template>
    <div class="modale" v-if="revel">
        <div class="overlay" @click="toogleModale"></div>
        <form class="form">
            <div class="title">Welcome</div>
            <div class="subtitle">
                <router-link to="" class="li" @click="toggleCo">S'inscrire</router-link>
                <router-link to="" class="li acti" @click="toggleCoremove">Se Connecter</router-link>
            </div>
            <!-- connection --- code -->
            <div class="input-container ic1" v-show="!conect">
                <input id="login" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="login" class="placeholder">Emain</label>
            </div>
            <div class="input-container ic2" v-show="!conect">
                <input id="psw" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="psw" class="placeholder">mot de passe</label>
            </div>
            <button type="text" class="submit" v-show="!conect">se connecter</button>
            <!-- inscription --- code -->
            <div class="input-container ic1" v-show="iscrip">
                <input id="first" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="first" class="placeholder">Votre Nom</label>
            </div>
            <div class="input-container ic2" v-show="iscrip">
                <input id="last" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="last" class="placeholder">Votre/Vos Prenom(s)</label>
            </div>
            <div class="input-container ic2" v-show="iscrip">
                <textarea id="email" class="textarea" type="text" placeholder=" "></textarea>
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Rédiger votre demande</label>
            </div>
            <div class="input-container ic1" v-show="iscrip">
                <input id="password" class="input" type="password" placeholder=" " />
                <div class="cut"></div>
                <label for="password" class="placeholder">Mot de passe</label>
            </div>
            <div class="input-container ic2" v-show="iscrip">
                <input id="passwordconf" class="input" type="password" placeholder=" " />
                <div class="cut"></div>
                <label for="passwordconf" class="placeholder">Confirmer Mot de passe</label>
            </div>
            <button type="text" class="submit" v-show="iscrip">inscription</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ModaleContent',
        props: {
            revel: {
                Boolean
            },
            toogleModale: {
                Function
            }
        },
        data() {
            return {
                iscrip: null,
                conect: null,
            }
        },

        methods: {
            toggleCo() {
                this.conect = true
                this.iscrip = true
            },
            toggleCoremove() {
                this.conect = false
                this.iscrip = false
            },

        },

        mounted() {
            const links = document.querySelectorAll('.li')

            links.forEach((item) => {
                console.log(item)

                item.addEventListener('click', () => {
                    if (item.classList.contains('acti')) {
                        return false
                    }

                    const el = document.querySelector('.acti')
                    el.classList.remove('acti')
                    item.classList.add('acti')
                })
            })
        }


    }
</script>

<style lang="scss" scoped>
    .modale {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.5);
        }
    }

    .form {
        border-radius: 20px;
        box-sizing: border-box;
        height: 100%;
        padding: 20px;
        width: 500px;
        z-index: 999;

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
        margin-top: 30px;

        .li:nth-child(1) {
            text-decoration: none;
            color: #fff
        }

        .li:nth-child(2) {
            text-decoration: none;
            color: #fff;
            margin-left: 25px;
        }

        .li:hover {
            color: #6dc2f8;
        }

        .li.acti {
            color: #6dc2f8
        }
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
        background-image: rgba(0, 0, 0, 0.5);
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


    .input:not(:placeholder-shown)~.placeholder,
    .textarea:not(:placeholder-shown)~.placeholder {
        color: #808097;
    }


    .input:focus~.placeholder,
    .textarea:focus~.placeholder {
        color: #dc2f55;
        font-size: 19px;
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
</style>