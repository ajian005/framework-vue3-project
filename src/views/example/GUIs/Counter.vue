<!--
https://eugenkiss.github.io/7guis/tasks/#counter
-->

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <table>
  {{ count }}
  <button @click="count++">Count</button>
</table>
</template>