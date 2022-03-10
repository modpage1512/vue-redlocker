<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">Reservas</h3>
  </div>
  <div class="flex m-100 p-3.5 justify-start">
    <button
      class="
        flex flex-end
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        mx-3
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      @click="ordenChoice(1)"
    >
      Crear Reserva
    </button>
    <button
      class="
        flex flex-end
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        mx-3
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      @click="ordenChoice(2)"
    >
      Crear desde fenicio
    </button>

    <button
      class="
        flex flex-end
        bg-blue-500
        hover:bg-blue-400
        text-white
        font-bold
        py-2
        px-4
        border-b-4 border-blue-700
        hover:border-blue-500
        rounded
      "
      @click="ordenChoice(3)"
    >
      Ver/Editar
    </button>
  </div>
  <hr class="bg-black w-full h-2 my-4" />

  <reservas v-if="orden === 1"></reservas>
  <reservas-fenicio v-else-if="orden === 2"></reservas-fenicio>
  <ver-editar-reservas v-else></ver-editar-reservas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Reservas from './Reservas.vue';
import ReservasFenicio from './ReservasFenicio.vue';
import VerEditarReservas from './VerEditarRerservas.vue';

export default defineComponent({
  components: {
    reservas: Reservas,
    'reservas-fenicio': ReservasFenicio,
    'ver-editar-reservas': VerEditarReservas,
  },
  data() {
    return {
      orden: 1,
    };
  },
  methods: {
    ordenChoice(num: number) {
      this.orden = num;
    },
  },
});
</script>