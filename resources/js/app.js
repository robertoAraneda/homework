require("./bootstrap");

window.Vue = require("vue");
import Vuex from "vuex";
import Vuetify from "vuetify";

Vue.use(Vuetify);
Vue.use(Vuex);

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

const app = new Vue({
    el: "#app"
});
