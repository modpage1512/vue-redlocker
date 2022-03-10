<template>
  <h3 class="text-3xl font-medium text-gray-700">Configuracion</h3>
  <hr class="bg-black w-full h-2 my-4" />

  <div class="flex">
    <button
      class="
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        mx-3
        my-4
        w-full
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      @click="ordenComponents(1)"
    >
      Cambio de contraseña
    </button>
    <button
      class="
        w-full
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        mx-3
        my-4
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      @click="ordenComponents(2)"
    >
      Cambio de Mail(principal)
    </button>
    <button
      class="
        w-full
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        mx-3
        my-4
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      @click="ordenComponents(3)"
    >
      Cambio de Mail(envio de notificaciones)
    </button>
  </div>

  <div v-if="orden === 1">
    <cambio-contrasena></cambio-contrasena>
  </div>
  <div v-else-if="orden === 2">
    <cambio-email></cambio-email>
  </div>
  <div v-else-if="orden === 3">
    <cambio-notificaciones></cambio-notificaciones>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CambioContraseña from './CambioContraseña.vue';
import CambioMail from './CambioMail.vue';
import CambioMailNotificaciones from './CambioMailNotificaciones.vue';

export default defineComponent({
  components: {
    'cambio-contrasena': CambioContraseña,
    'cambio-email': CambioMail,
    'cambio-notificaciones': CambioMailNotificaciones,
  },
  data() {
    return {
      orden: 1,
    };
  },
  methods: {
    ordenComponents(num: number) {
      this.orden = num;
    },
  },
});
</script>