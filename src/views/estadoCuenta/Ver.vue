<template>
  <h3 class="text-3xl font-medium text-gray-700">Reservas</h3>

  <div class="w-full max-w-sm mt-6 lg:max-w-full lg:flex">
    <div
      class="
        flex-none
        h-48
        overflow-hidden
        text-center
        bg-cover
        rounded-t
        lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l
      "
      style="background-image: url('https://picsum.photos/id/0/192/213')"
      title="Woman holding a mug"
    ></div>
    <div
      class="
        flex flex-col
        justify-between
        p-4
        leading-normal
        bg-white
        border-b border-l border-r border-gray-200
        rounded-b
        lg:border-l-0
        lg:border-t
        lg:border-gray-200
        lg:rounded-b-none
        lg:rounded-r
        w-autos
      "
    >
      <div class="mb-8">
        <div class="mb-2 text-xl text-gray-900">Creditos contratados</div>
        <div class="mb-2 text-4xl font-bold text-gray-900">999999999</div>
      </div>
    </div>
  </div>

  <hr class="bg-black w-full h-2 my-4" />

  <h4 class="text-2xl font-medium text-gray-700 my-5">Estado de cuenta</h4>

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

  <table-estado-cuenta></table-estado-cuenta>
  <div class="flex">
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

    <modal></modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableEstadoCuenta from './TablesEstadoCuenta.vue';

export default defineComponent({
  components: {
    'table-estado-cuenta': TableEstadoCuenta,
  },
});
</script>