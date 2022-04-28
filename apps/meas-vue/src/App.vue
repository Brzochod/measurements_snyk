<template>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Time</th>
      <th>T1</th>
      <th>T2</th>
    </tr>
  </thead>
    <tr v-for="row in data" :key="row.id" @click="showModal(row.id)">
      <td>{{row.id}}</td>
      <td>{{row.time}}</td>
      <td>{{row.t1}}</td>
      <td>{{row.t2}}</td>
    </tr>
  </table>
  <Modal :showModal="true" />
</template>

<script setup lang="ts">
  import { DataItem } from '../../../libs/api-interfaces/src' 
  import { ref, onMounted } from 'vue'
  import Modal from './components/Modal.vue'

  let data = ref<DataItem[]>([])
  let selectedItem = ref<DataItem>()
  let isModalVisible = ref<boolean>(false)


  const showModal = (id: string) => {
    console.log(data.value)
    selectedItem.value = data.value.find(item => item.id === id)
    console.log(selectedItem.value);
  }

  onMounted(async () => {
    data.value = await fetch('http://localhost:3333/api/list', {
      method: 'GET'
    }).then(response => response.json())
  });
</script>