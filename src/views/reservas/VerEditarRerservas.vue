<template>
  <h3 class="text-xl font-medium text-gray-700 p-4">Ver/Editar Reservas</h3>

  <div class="container flex justify-between">
    <label for="cars"
      >Mostrar

      <select name="cars" id="cars">
        <option value="volvo">10</option>
        <option value="saab">25</option>
        <option value="mercedes">50</option>
        <option value="audi">100</option>
      </select>
      entradas
    </label>

    <div>
      <label for="buscar">buscar: </label>
      <input type="text" />
    </div>
  </div>

  <table-reserva />
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
      my-4
      border-b-4 border-blue-700
      hover:border-blue-500
      rounded
    "
  >
    Excel
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TablesReserva from './TablesReservas.vue';

export default defineComponent({
  components: {
    'table-reserva': TablesReserva,
  },
});
</script>