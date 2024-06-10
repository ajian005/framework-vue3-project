<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
        <RouterLink to="/studyIndex">StudyIndex</RouterLink>
        <RouterLink to="/StdudyRefAndReactor">StdudyRefAndReactor</RouterLink>
        <RouterLink to="/AttributeBinding">AttributeBinding</RouterLink>
        <RouterLink to="/EventListener">EventListener</RouterLink>
        <RouterLink to="/FormBiding">EventListener</RouterLink>
        <RouterLink to="/ConditionalRendering">ConditionalRendering</RouterLink>
        <RouterLink to="/ListRendering">ListRendering</RouterLink>
        <RouterLink to="/ComputedProperty">ComputedProperty</RouterLink>
        <RouterLink to="/LifeCicle">LifeCicle</RouterLink>
        <RouterLink to="/Watchers">Watchers</RouterLink>
        <RouterLink to="/ComponentCreat">ComponentCreat</RouterLink>
        <RouterLink to="/Props">Props</RouterLink>
        <RouterLink to="/EmitsParent">EmitsParent</RouterLink>
        <RouterLink to="/SlotParent">SlotParent</RouterLink>
        <RouterLink to="/markdownEditor">markdownEditor</RouterLink>
        <RouterLink to="/GridWithSortAndFilter">GridWithSortAndFilter</RouterLink>
        <RouterLink to="/TreeViewApp">TreeViewApp</RouterLink>
        <RouterLink to="/SVGGraphApp">SVGGraphApp</RouterLink>
        <RouterLink to="/ModalWithTransitionsApp">ModalWithTransitionsApp</RouterLink>
        <RouterLink to="/ListWithTransitionsApp">ListWithTransitionsApp</RouterLink>
        <RouterLink to="/TodoMVCApp">TodoMVCApp</RouterLink>
        <RouterLink to="/Counter">Counter</RouterLink>
        <RouterLink to="/TemperatureConverter">TemperatureConverter</RouterLink>
        <RouterLink to="/FlightBooker">FlightBooker</RouterLink>
        <RouterLink to="/Timer">Timer</RouterLink>
        <RouterLink to="/CRUD">CRUD</RouterLink>
        <RouterLink to="/CircleDrawer">CircleDrawer</RouterLink>
        <RouterLink to="/CellsApp">CellsApp</RouterLink>

        
        
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 50vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;

}

nav {
  width: 10%;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 10px) {
  header {
    display: flex;
    place-items: left;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
