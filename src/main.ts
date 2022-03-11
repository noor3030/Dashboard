import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import { createVuetify } from "vuetify";

const app = createApp(App);
app.use(store);
app.use(router);

app.mount("#app");
