<script setup>
import { ref } from 'vue'

const text = ref('')
const text2 = ref('')


function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <table>
    <tr>传统函数模式</tr>
    <tr>
        <input :value="text" @input="onInput" placeholder="Type here">
    </tr>
    <tr>
        <p>{{ text }}</p>
    </tr>
   <tr>v-model模式</tr>
    <tr>
        <input v-model="text2"  placeholder="Type here2">
    </tr>
    <tr>
        <p>{{ text2 }}</p>
    </tr>
</table>
</template>
