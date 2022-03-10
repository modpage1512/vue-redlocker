<template>
  <h4 class="text-2xl font-medium text-gray-700">Datos del nuevo Usuario</h4>

  <form action="">
    <label for="">input1: </label><br />
    <input type="text" /><br />
    <label for="">input2: </label><br />
    <input type="text" /><br />
    <label for="">input3: </label><br />
    <input type="text" /><br />
    <label for="">input4: </label><br />
    <input type="text" /><br />
    <label for="">input5: </label><br />
    <input type="text" /><br />
    <label for="">input6: </label><br />
    <input type="text" /><br />

    <hr class="bg-black w-full h-2 my-4" />

    <h4 class="text-2xl font-medium text-gray-700">Usuario</h4>
    <label for="input7"></label><br />
    <input type="text" />

    <div class="flex justify-end">
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
        "
      >
        + Crear Usuario
      </button>
    </div>
  </form>
  <ver-editar></ver-editar>
</template>

