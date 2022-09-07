<template>
    <div class="partenaire">
        <div class="max">
            <div class="cards-img release">
                <img src="../assets/img/produits.jpg" alt="">
                <div class="positon">
                    <div class="ville">
                        ABIDJAN
                    </div>
                    <div class="donaime">
                        INDUSTRIES
                    </div>
                </div>
                <div class="name">
                    MALI ZOZAN
                </div>
            </div>
            <div class="cards-img release">
                <img src="../assets/img/produits.jpg" alt="">
                <div class="positon">
                    <div class="ville">
                        ABIDJAN
                    </div>
                    <div class="donaime">
                        INDUSTRIES
                    </div>
                </div>
                <div class="name">
                    MALI ZOZAN
                </div>
            </div>
            <div class="cards-img release">
                <img src="../assets/img/produits.jpg" alt="">
                <div class="positon">
                    <div class="ville">
                        ABIDJAN
                    </div>
                    <div class="donaime">
                        INDUSTRIES
                    </div>
                </div>
                <div class="name">
                    MALI ZOZAN
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BoutiquePartenaire',
        mounted() {
            const ratio = .1
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: ratio
            }
            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > ratio) {
                        entry.target.classList.add('release-show')
                        observer.unobserve(entry.target)
                    }
                });
            }
            const observer = new IntersectionObserver(callback, options);
            // observer.observe(document.querySelector('.release'))
            document.querySelectorAll('.release').forEach(function (r) {
                observer.observe(r)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .partenaire {

        padding: 100px 50px;

        .max {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            height: 100%;

            .cards-img {
                position: relative;
                width: 350px;
                height: 350px;

                img {
                    position: relative;
                    width: 100%;
                    border-radius: 15px;
                    object-fit: cover;
                    transition: all .5s ease;

                    &:hover {
                        transform: scale(1.05);
                    }

                }

                .positon {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 20px 5px;
                    color: #fff;
                }

                .name {
                    padding: 0 5px;
                    color: #fff;
                }
            }
        }

        .release {
            opacity: 0;
            transform: translateY(30px);
        }

        .release-show {
            opacity: 1;
            transform: translateY(0px);
            transition: 1.9s cubic-bezier(.5, 0, 0, 1);
        }
    }
</style>