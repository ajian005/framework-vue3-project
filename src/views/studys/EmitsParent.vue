<script setup>
import { ref } from 'vue'
import ChildComp from '../../components/EmitsComp.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <table>
  <ChildComp @response="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</table>
</template>