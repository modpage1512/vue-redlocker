<template>
  <div class="container mx-auto w-full text-black">
    <form action="">
      <label for="locker">Locker: </label>
      <input type="text" id="locker" name="locker" />
      <label for="tamaño">Tamaño: </label>
      <input type="number" id="tamaño" name="tamaño" />
      <label for="vencimiento">Vencimiento: </label>
      <input type="date" id="vencimiento" name="vencimiento" />

      <section>Mapa de google</section>

      <div class="flex items-center justify-start w-full mb-12">
        <label for="toggleB" class="flex items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input type="checkbox" id="toggleB" class="sr-only" />
            <!-- line -->
            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <!-- dot -->
            <div
              class="
                dot
                absolute
                left-1
                top-1
                bg-white
                w-6
                h-6
                rounded-full
                transition
              "
            ></div>
          </div>
          <!-- label -->
          <div class="ml-3 text-gray-700 font-medium">Toggle Me!</div>
        </label>
      </div>
      <label for="">input1</label>
      <input type="text" name="" id="" />
      <label for="">input2</label>
      <input type="text" name="" id="" />
      <label for="">input3</label>
      <input type="text" name="" id="" />
      <label for="">input4</label>
      <input type="text" name="" id="" />
      <label for="">input5</label>
      <input type="text" name="" id="" />

      <p>linea de texto 1</p>
      <p>linea de texto 2</p>
      <p>linea de texto 3</p>

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
            border-b-4 border-blue-700
            hover:border-blue-500
            rounded
          "
        >
          + Enviar Reserva
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
</script>
