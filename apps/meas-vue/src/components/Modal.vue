<template>
  <Teleport to="body">
    <div v-if="showModal">OPENED MODAL</div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  showModal: boolean
}>()

console.log(props.showModal)
</script>