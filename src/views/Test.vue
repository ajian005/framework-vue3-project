<script lang="ts">
   export default {
     name: 'Test',
   };
   
</script>

<script setup lang="ts">
   import { ref, reactive } from 'vue';
   // feature1 计数器
   const counter = reactive({count:0});
   const increment = () => {
    counter.count++;
   }

   // feature2 测试
   const message = ref('Hello, Vue 3 + TypeScript + Vite');

   // feature3 测试
   const msg = '文本插值';

</script>





<template>
  <div class="test">
    <h1>This is an test page</h1>
    <h2>feature1 计数器</h2>
    <p>{{ counter.count }}</p>
    <button @click="increment">Increment</button>
    <br/>

    <h2>feature2 测试</h2>
    <p>{{ message }}</p>
    <br/>

    <h2>feature3 测试  文本插值</h2>
    <p><span>Message: {{ msg }}</span></p>
    <br/>
  </div>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
