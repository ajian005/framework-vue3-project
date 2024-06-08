

<script setup lang="ts">
   import { ref, reactive } from 'vue';
   import { RouterLink, RouterView } from 'vue-router'
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
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper2">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="StdudyRefAndReactor">StdudyRefAndReactor</RouterLink>
        <RouterLink to="AttributeBinding">AttributeBinding</RouterLink>
        <RouterLink to="EventListener">EventListener</RouterLink>
        <RouterLink to="Test1">Test1</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
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
