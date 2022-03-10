import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Reservas from "./views/reservas/ReservasLayout.vue";
import EstadoCuenta from "./views/estadoCuenta/Ver.vue";
import Usuarios from "./views/usuarios/UsuarioLayout.vue";
import ConfiguracionCuenta from "./views/configuracion/ConfiguracionCuenta.vue";
import Blank from "./views/Blank.vue";
import NotFound from "./views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Reservas",
    component: Reservas,
  },
  {
    path: "/estado-cuenta",
    name: "EstadoCuenta",
    component: EstadoCuenta,
  },
  {
    path: "/configuracion-cuenta",
    name: "ConfiguracionCuenta",
    component: ConfiguracionCuenta,
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: Usuarios,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
