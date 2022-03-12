import Card from "./Card.vue";

export default {
    install(Vue, options) {
        Vue.component("c-card", Card);
    }
}
