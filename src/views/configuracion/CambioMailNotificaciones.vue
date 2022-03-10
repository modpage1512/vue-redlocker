<template>
  <p>Este es el que usara para las notificaciones</p>
  <br />
  <form action="">
    <label for="contraseña">Nuevo Email: </label><br />
    <input type="password" /><br />
    <label for="contraseña">Confirmar EMail: </label><br />
    <input type="password" /><br />
    <label for="contraseña">Por favor ingrese su contraseña: </label><br />
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
        Cambiar EMail
      </button>
    </div>
  </form>
</template>
