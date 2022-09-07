<template>
    <div class="ve">
        <div class="cards release">
            <a :href="'https://'+el.slug+'.mplaces.net'" target="_blank" style="text-decoration: none;">
                <div class="cards-img">
                    <img :src="this.img+el.coverimages[0].imageName.substr(0, 2)+'/'+el.coverimages[0].imageName"
                        alt="">
                </div>
                <div class="cards-info">
                    <div class="position">{{el.categories.title}}</div>
                    <div class="name">{{el.title}}</div>
                    <div class="btn">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABlElEQVRoge3av04cMRDH8c+hUCBRUyJERU8ZyhQ06XgEJOh4BaTwBtCkpkAoJSUoEpB0EQ1PQAOCgjJXIP4UqxPHasWtfevDSP5KrtaemZ/H3vX4jkIrpvENu7jC+ceGE8YMvuMnbvFca1kzh3Ucoe9t4JfYkbGQBWzhGA9eA33EP2xjaah/NkJ6WMYP1SwPz3pflY11VXaaqAupL7mmlmRP/a45ucc+1jDbYnyMkCQZHBjeU72JpiPHp+o/McNJhUwFh5MpRUhuFCG5UYTkRhGSG0VIbhQhuVGE5EZqIb9wmNhHMDGFVR//I8cH9f8SYDiGIzwl9hHMpEvdIMpm74C/2l8Jjbz36gU4HiyLkDHvje9qmfVIv9nbMO7EoOyRpJyLuAPOUUgTnb62u/6OdGrvs2RkJEVIbhQhuVGE5EaMkANsevvT8zjEnnyjOWkwdqO9sHoATUeR0HY2MBZ68lzECr5iFfO153c4VdUaf3AxFPy4ZUBSlrChysq19zOWtNTtenZGZSyFz4lQz9in+pvTh/ACRga7zCry6jcAAAAASUVORK5CYII="
                            style="width: 30px;" />
                        <router-link to="" class="link">voir plus</router-link>
                    </div>
                </div>
                <div class="mini-card">
                    Vedettes
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BoutiquesVedettes',
        props: ['el'],
        data() {
            return {
                mobile: null,
                windowWidth: null,
                mobileNav: null,
                img: process.env.VUE_APP_IMAGES_BOUTIQUE,
                nbr: 3
            }
        },
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
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

    .ve {
        .cards {
            position: relative;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            border-radius: 15px;
            transition: all .5s ease;

            &:hover{
                transform: scale(1.06);
            }

            .cards-img {
                width: 250px;
                height: 250px;

                img {
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                }
            }

            .cards-info {
                padding: 0 10px;
                text-decoration: none;

                .position {
                    padding: 25px 0;
                    font-size: .9rem;
                    font-family: 'Roboto', sans-serif;
                    color: #000;
                }
                .name {
                    padding: 5px 0;
                    font-size: 1.2rem;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 600;
                    color: #000;
                }
                .btn {
                    padding: 10px 0;

                    .link {
                        text-decoration: none;
                        color: #000;
                        padding: 0 5px;
                    }
                }
            }

            .mini-card {
                position: absolute;
                left: 3%;
                top: 59%;
                width: 100px;
                height: 25px;
                background-color: #ffcc01;
                display: flex;
                border-radius: 20px;
                align-items: center;
                justify-content: center;
                font-family: 'Roboto', sans-serif;
                font-weight: 600;
                color: #fff;
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