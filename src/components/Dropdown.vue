<template>
    <div class="dropdown" @click=" isOpen = !isOpen">
        <router-link class="link" :to="{name: ''}"> {{ title }}
            <svg viewBox="0 0 1030 638" width="10" :class="{ 'effet': click, 'effet-reverse': clickReverse, }">
                <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
                    fill="#000"></path>
            </svg>
            <transition name="fade" appear="">
                <div class="sub-menu" v-if="isOpen">
                    <div class="menu-items">
                        <router-link to="/Boutiques" class="link">Boutiques</router-link>
                        <router-link to="/Produits" class="link">Produits</router-link>
                        <router-link to="/Services" class="link">Services</router-link>
                        <router-link :to="{name: ''}" class="link">Boutiques à proximité</router-link>
                    </div>
                </div>
            </transition>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'DropDown',
        props: [
            'title'
        ],
        data() {
            return {
                isOpen: false,
                click: false,
                clickReverse: true

            }
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown {
        svg {
            width: 15px;
            margin-left: 10px;
            position: relative;
        }

        .link {
            color: #000;
            font-weight: 500;
            list-style: none;
            text-decoration: none;
            text-align: center;
            position: relative;
            font-size: 16px;
            transition: .4s ease all;
            padding: 10px 0;
            font-family: 'Roboto', sans-serif;

            &:hover {
                color: #6dc2f8;
            }
        }


        .sub-menu {
            position: absolute;
            top: calc(100% + 5px);
            width: 250px;
            background-color: rgba(255, 255, 255, 0.19);
            padding: 0 10px;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;

            .menu-items {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: start;

                .link {
                    font: 15px;
                    text-transform: capitalize;
                }
            }
        }


        @media (max-width: 1019px) {
            .link {
                font-size: 14px;
            }
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: 0.5s;

    }

    .fade-enter-from,
    .fade-leave-to {
        transform: translateY(-50px);
        opacity: 0;
    }

    .fade-enter-to {
        transform: translateX(0);
    }
</style>