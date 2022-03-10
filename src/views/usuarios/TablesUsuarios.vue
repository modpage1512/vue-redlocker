<template>
  <div class="md:px-16 py-8 w-full">
    <div class="shadow overflow-auto rounded border-b border-gray-200">
      <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-red w-full">
          <tr>
            <th
              class="
                w-1/3
                text-center
                py-3
                px-4
                uppercase
                font-semibold
                text-sm text-white
              "
            >
              Name<br />
            </th>
            <th
              class="
                w-1/3
                text-center
                py-3
                px-4
                uppercase
                font-semibold
                text-sm text-white
              "
            >
              Last name
            </th>
            <th
              class="
                text-center
                py-3
                text-white
                px-4
                uppercase
                font-semibold
                text-sm
              "
            >
              Phone<br />
            </th>
            <th
              class="
                text-center text-white
                py-3
                px-4
                uppercase
                font-semibold
                text-sm
              "
            >
              Email <br />
            </th>
            <th
              class="
                text-center
                py-3
                px-4
                text-white
                uppercase
                font-semibold
                text-sm
              "
            >
              Funciones
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-700">
          <tr>
            <td class="w-1/3 text-left py-3 px-4">Lian</td>
            <td class="w-1/3 text-left py-3 px-4">Smith</td>
            <td class="text-left py-3 px-4">
              <a class="hover:text-blue-500" href="tel:622322662">622322662</a>
            </td>
            <td class="text-left py-3 px-4">
              <a class="hover:text-blue-500" href="mailto:jonsmith@mail.com"
                >jonsmith@mail.com</a
              >
            </td>
            <td>
              <div class="flex">
                <reenviar-modal></reenviar-modal>
                <edit-modal></edit-modal>
                <qr-modal></qr-modal>
                <delete-modal></delete-modal>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {};
  },
  methods: {},
});
</script>