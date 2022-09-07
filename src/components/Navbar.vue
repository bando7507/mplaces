<template>
    <div class="navbar">
        <div class="max-width">
            <nav>
                <div class="logo">
                    <img src="../assets/logom.png" alt="">
                </div>
                <ul v-show="!mobile" class="navigation">
                    <li>
                        <router-link class="link active" to="/">Home</router-link>
                    </li>
                    <li>
                        <Dropdown title="Explorez" />
                    </li>
                    <li>
                        <router-link class="link" :to="{name: 'Apropos'}">A propos</router-link>
                    </li>
                    <li>
                        <router-link class="link" :to="{name: 'Contacts'}">Contact</router-link>
                    </li>
                    <li>
                        <router-link class="link-span" @click="toogleModale" :to="{name: ''}"><span>Se connecter</span>
                        </router-link>
                    </li>
                </ul>
                <div class="icon" @click="toggleMobileNav">
                    <i v-show="mobile" class="fa fa-align-justify"></i>
                </div>

                <transition name="fade">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <div class="remove">
                            <i @click="toggleMobileNav" class="fa fa-times" aria-hidden="true"></i>

                        </div>
                        <li>
                            <router-link class="link" :to="{name: ''}">Home</router-link>
                        </li>
                        <li>
                            Explorez
                            <div class="link--drop">
                                <router-link :to="{name: ''}" class="link">Boutiques</router-link>
                                <router-link :to="{name: ''}" class="link">Produits</router-link>
                                <router-link :to="{name: ''}" class="link">Services</router-link>
                                <router-link :to="{name: ''}" class="link">Boutiques à proximité</router-link>
                            </div>
                        </li>
                        <li>
                            <router-link class="link" :to="{name: ''}">A propos</router-link>
                        </li>
                        <li>
                            <router-link class="link" :to="{name: ''}">Contact</router-link>
                        </li>
                    </ul>
                </transition>
            </nav>
        </div>


        <Modale :revel="revel" :toogleModale="toogleModale" />
    </div>
</template>

<script>
    import Dropdown from './Dropdown.vue'
    import Modale from './Modale.vue'

    export default {
        name: 'NavBar',
        components: {
            Dropdown,
            Modale
        },
        data() {
            return {
                scrollNav: null,
                mobile: null,
                mobileNav: null,
                windowWidth: null,
                revel: false
            }
        },

        created() {
            window.addEventListener('resize', this.checkScreen)
            this.checkScreen()
        },

        methods: {
            toggleMobileNav() {
                this.mobileNav = !this.mobileNav
            },
            checkScreen() {
                this.windowWidth = window.innerWidth
                if (this.windowWidth <= 914) {
                    this.mobile = true
                    return;
                }

                this.mobile = false
                this.mobileNav = false
                return;
            },

            toogleModale() {
                this.revel = !this.revel
            }
        },

        mounted() {
            const links = document.querySelectorAll('.link')

            links.forEach((link) => {
                link.addEventListener('click', () => {
                    if (link.classList.contains('active')) {
                        return false
                    }
                    const el = document.querySelector('.active')

                    el.classList.remove('active')

                    link.classList.add('active')
                })
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/stylenavbar.scss";
</style>