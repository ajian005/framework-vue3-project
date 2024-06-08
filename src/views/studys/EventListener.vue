<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <!-- 使此按钮生效 -->
  <button>Count is: {{ count }}</button>
</template>