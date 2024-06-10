<script setup>
import { ref } from 'vue'
import ChildComp5 from  '../../components/SlotComp.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp5> Message: {{msg}} </ChildComp5>
</template>
