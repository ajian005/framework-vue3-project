<script setup>
import { ref } from 'vue'
import ChildComp2 from '../../components/ChildComp.vue'


const greeting = ref('Hello from parent')
</script>

<template>
  <ChildComp2 :msg="greeting" />
</template>