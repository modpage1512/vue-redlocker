<template>
  <h4 class="text-2xl font-medium text-gray-700">Ver/Editar Usuarios</h4>

  <table-usuarios></table-usuarios>
</template>

<script>
import { defineComponent } from 'vue';
import TablesUsuarios from './TablesUsuarios.vue';

export default defineComponent({
  components: {
    'table-usuarios': TablesUsuarios,
  },
  setup() {},
});
</script>
