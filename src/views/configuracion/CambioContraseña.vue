<template>
  <form action="">
    <label for="contraseña">Contraseña actual: </label><br />
    <input type="password" /><br />
    <label for="contraseña">Nueva contraseña: </label><br />
    <input type="password" /><br />
    <label for="contraseña">Confirmar contraseña: </label><br />
    <input type="password" /><br />

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
        Cambiar Contraseña
      </button>
    </div>
  </form>
</template>