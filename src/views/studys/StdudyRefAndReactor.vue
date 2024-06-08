<script setup>
import {reactive} from 'vue';
import { ref } from 'vue';
// 组件逻辑
// 此处声明一些响应式状态
// reactive
const counter = reactive({
  count: 0
})
console.log(counter.count) // 0
counter.count++

// ref
const message = ref('Hello World!')
console.log(message.value) // 'Hello World!'
// message.value = 'Changed'


</script>

<template>
  <h1>Make me dynamic!</h1>
  <br/>
  <h1>{{ message }}</h1>
  <br/>
  <h1>
  <p>Count is: {{ counter.count }}</p>
  </h1>
</template>
