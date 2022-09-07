<template>
    <div class="side">
        <div class="side-title">
            Filtre
            <i class="fas fa-clock"></i>
        </div>
        <div class="menu-item">
            <router-link to="/Beaute" class="link">
                <div class="link-container">
                    Beauté
                </div>
            </router-link>
            <router-link to="/Restauration" class="link">
                <div class="link-container">
                    Restauration
                </div>
            </router-link>
            <router-link to="/Mode" class="link">
                <div class="link-container">
                    Mode
                </div>
            </router-link>
            <router-link to="/Divers" class="link">
                <div class="link-container">
                    Divers
                </div>
            </router-link>
            <router-link to="/Vetements" class="link">
                <div class="link-container">
                    Vêtements
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBar'

    }
</script>

<style lang="scss" scoped>
    .side {
        display: flex;
        // align-items: center;
        flex-direction: column;

        padding: 50px;

        .side-title {
            margin-bottom: 50px;
            font-size: 2.5rem;
        }

        .menu-item {

            .link {
                text-decoration: none;

                .link-container {
                    color: #000;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
            }
        }
    }
</style>