<template>
    <div class="ve">
        <div class="cards">
            <div class="cards-img">
                <img :src="this.img+'/'+el.productImages[0].imageName.substr(0, 2)+'/'+el.productImages[0].imageName"
                    alt="">
            </div>
            <div class="cards-info">
                <div class="position">element</div>
                <div class="name">vente de bomme</div>
                <div class="btn">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABlElEQVRoge3av04cMRDH8c+hUCBRUyJERU8ZyhQ06XgEJOh4BaTwBtCkpkAoJSUoEpB0EQ1PQAOCgjJXIP4UqxPHasWtfevDSP5KrtaemZ/H3vX4jkIrpvENu7jC+ceGE8YMvuMnbvFca1kzh3Ucoe9t4JfYkbGQBWzhGA9eA33EP2xjaah/NkJ6WMYP1SwPz3pflY11VXaaqAupL7mmlmRP/a45ucc+1jDbYnyMkCQZHBjeU72JpiPHp+o/McNJhUwFh5MpRUhuFCG5UYTkRhGSG0VIbhQhuVGE5EZqIb9wmNhHMDGFVR//I8cH9f8SYDiGIzwl9hHMpEvdIMpm74C/2l8Jjbz36gU4HiyLkDHvje9qmfVIv9nbMO7EoOyRpJyLuAPOUUgTnb62u/6OdGrvs2RkJEVIbhQhuVGE5EaMkANsevvT8zjEnnyjOWkwdqO9sHoATUeR0HY2MBZ68lzECr5iFfO153c4VdUaf3AxFPy4ZUBSlrChysq19zOWtNTtenZGZSyFz4lQz9in+pvTh/ACRga7zCry6jcAAAAASUVORK5CYII=" />
                    <router-link to="" class="link">voir plus</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AllProducts',
        data() {
            return {
                mobile: null,
                windowWidth: null,
                mobileNav: null,
                nbr: 3,
                img: process.env.VUE_APP_IMAGES_STORE
            }
        },
        props: {
            el: {
                Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ve {
        padding: 20px;

        .cards {
            border: 1px solid #000;
            border-radius: 15px;

            .cards-img {
                width: 250px;
                height: 250px;

                img {
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                    width: 100%;
                    height: 250px;
                }
            }
        }
    }
</style>