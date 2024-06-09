<script setup>
import { ref } from 'vue'

const pElementRef = ref(null)
import { onMounted } from 'vue'

  onMounted(()=>{
    pElementRef.value.textContent = "ABCDEFG";
  })
</script>

<template>
  <p ref="pElementRef">Hello</p>
</template>