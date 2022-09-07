<template>
    <div class="home-services">
        <Navbar />
        <div class="heigth"></div>
        <div>
            {{$route.params.name}}
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    export default {
        name: 'ServicesContent',
        components: {
            Navbar
        }
    }
</script>

<style lang="scss" scoped>
    .home-services {

        height: 100%;
        background: #fff;

        .heigth {
            padding-top: 90px;
        }
    }
</style>