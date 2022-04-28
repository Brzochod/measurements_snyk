<template>
  <Teleport to="body">
    <div class="modal" v-if="showModal">data id: {{data.id}}</div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { DataItem } from '../../../../libs/api-interfaces/src' 

const props = defineProps<{
  showModal: boolean,
  data: DataItem
}>()

</script>


<style lang="css">

</style>

    // .modal {
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     width: 100vw;
    //     height: 100vh;
    //     background-color: rgba(0,0,0,.8)
    // }