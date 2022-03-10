import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import VueGoogleMaps from "@fawmi/vue-google-maps"
import axios from 'axios';
import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';
import Modal from "./components/modals/ModalBasico.vue"
import DeleteModal from "./components/modals/DeleteModal.vue"
import EditModal from "./components/modals/EditModal.vue"
import QrModal from "./components/modals/QrModal.vue"
import ReenviarModal from "./components/modals/ReenviarModal.vue"
import UpdateQrModal from "./components/modals/UpdateQrModal.vue"

import { store, key } from "./store"


async function data() {

    try {
        const token = await axios.post("https://dev.redelocker.com/api/v2/auth/login", {
            user: "testvue1", password: "johndoe",
        })
        const reservas = await axios.get("https://dev.redelocker.com/api/v2/booking?status=3", {
            headers: { 'Authorization': `Bearer ${token.data.token}`, 'Access-Control-Allow-Origin': "*" }
        })


        console.log(reservas)
    }
    catch (err) {
        console.log(err)
    }
}

data()

const app = createApp(App);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);
app.component("modal", Modal);
app.component("delete-modal", DeleteModal);
app.component("edit-modal", EditModal);
app.component("qr-modal", QrModal);
app.component("reenviar-modal", ReenviarModal);
app.component("update-qr-modal", UpdateQrModal);

app.use(VueGoogleMaps, {
    load: {
        key: ""
    },
});

app.use(router);
app.use(store, key);
app.mount('#app');
