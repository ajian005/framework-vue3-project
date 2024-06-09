<script setup>
import { ref } from 'vue'
import ChildComp5 from  '../../components/EmitsComp.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp5></ChildComp5>
</template>
