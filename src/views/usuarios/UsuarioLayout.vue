<template>
  <h3 class="text-3xl font-medium text-gray-700">Usuarios</h3>
  <div class="flex justify-start">
    <button
      class="
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
        m-4
      "
      @click="cambiarOrden(1)"
    >
      Crear nuevo usuario
    </button>
    <button
      class="
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
        m-4
      "
      @click="cambiarOrden(2)"
    >
      Ver/Editar Usuarios
    </button>
  </div>
  <hr class="bg-black w-full h-2 my-4" />
  <ver-editar v-if="orden === 1"></ver-editar>
  <crear-usuario v-else></crear-usuario>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VerEditarUsuario from './VerEditarUsuario.vue';
import CrearUsuario from './CrearUsuario.vue';

export default defineComponent({
  components: {
    'ver-editar': VerEditarUsuario,
    'crear-usuario': CrearUsuario,
  },
  data() {
    return {
      orden: 1,
    };
  },
  methods: {
    cambiarOrden(num: number) {
      this.orden = num;
    },
  },
});
</script>