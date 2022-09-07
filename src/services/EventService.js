import axiox from "axios"

const apiMplace = axiox.create({
    baseURL: process.env.VUE_APP_API,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getBanners() {
        return apiMplace.get("/home/banner?page=1");
    },

    getCount() {
        return apiMplace.get("/home/store/count");
    },
    getVedette() {
        return apiMplace.get("/home/store/featured");
    },
    getCount2() {
        return apiMplace.get("/home/product/count");
    },
    getCount3() {
        return apiMplace.get("/home/service/count");
    },
    getPopularboutique() {
        return apiMplace.get("/home/store/popular");
    },
    getPopularproduit() {
        return apiMplace.get("/home/product/popular");
    },
    getPopularservice() {
        return apiMplace.get("/home/search/services/poulet/1");
    },
    getAllproduit() {
        return apiMplace.get("/home/search/product/poulet/2");
    },

    // getSearch(name) {
    //     return apiMplace.get(`/home/search/product/${name}/2`);
    // },
    // getSearch() {
    //     return apiMplace.get(`/home/search/product/poulet/2`);
    // },
};