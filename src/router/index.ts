import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test.vue')
    },
    {
      path: '/test1',
      name: 'test1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/studys/Test1.vue')
    },
    {
      path: '/StudyIndex',
      name: 'StudyIndex',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudyIndex.vue'),
      children: [
        {
          path: "/StudyIndex/StdudyRefAndReactor",
          name: "StdudyRefAndReactor",
          component: () => import("../views/studys/StdudyRefAndReactor.vue"),
        },
        {
          path: "/StudyIndex/StdudyRefAndReactor",
          name: "StdudyRefAndReactor",
          component: () => import("../views/studys/StdudyRefAndReactor.vue"),
        },
        
        {
          path: "/StudyIndex/AttributeBinding",
          name: "AttributeBinding",
          component: () => import("../views/studys/AttributeBinding.vue"),
        },
      ]
    },
    {
      path: '/StdudyRefAndReactor',
      name: 'StdudyRefAndReactor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/studys/StdudyRefAndReactor.vue')
    },
    {
      path: "/AttributeBinding",
      name: "AttributeBinding",
      component: () => import("../views/studys/AttributeBinding.vue"),
    },
    {
      path: "/EventListener",
      name: "EventListener",
      component: () => import("../views/studys/EventListener.vue"),
    },
    {
      path: "/FormBiding",
      name: "FormBiding",
      component: () => import("../views/studys/FormBiding.vue"),
    },
    {
      path: "/ConditionalRendering",
      name: "ConditionalRendering",
      component: () => import("../views/studys/ConditionalRendering.vue"),
    },
    {
      path: "/ListRendering",
      name: "ListRendering",
      component: () => import("../views/studys/ListRendering.vue"),
    },
    {
      path: "/ComputedProperty",
      name: "ComputedProperty",
      component: () => import("../views/studys/ComputedProperty.vue"),
    },
    {
      path: "/LifeCicle",
      name: "LifeCicle",
      component: () => import("../views/studys/LifeCicle.vue"),
    },
    {
      path: "/Watchers",
      name: "Watchers",
      component: () => import("../views/studys/Watchers.vue"),
    },
    {
      path: "/ComponentCreat",
      name: "ComponentCreat",
      component: () => import("../views/studys/ComponentCreat.vue"),
    },
    
    {
      path: "/Props",
      name: "Props",
      component: () => import("../views/studys/Props.vue"),
    },
    
    {
      path: "/EmitsParent",
      name: "EmitsParent",
      component: () => import("../views/studys/EmitsParent.vue"),
    },
    {
      path: "/SlotParent",
      name: "SlotParent",
      component: () => import("../views/studys/SlotParent.vue"),
    },
    {
      path: "/markdownEditor",
      name: "markdownEditor",
      component: () => import("../views/example/markDown/markdownEditor.vue"),
    },
    {
      path: "/GridWithSortAndFilter",
      name: "GridWithSortAndFilter",
      component: () => import("../views/example/GridWithSortAndFilter/GridWithSortAndFilter.vue"),
    },
    {
      path: "/TreeViewApp",
      name: "TreeViewApp",
      component: () => import("../views/example/TreeView/TreeViewApp.vue"),
    },
    {
      path: "/SVGGraphApp",
      name: "SVGGraphApp",
      component: () => import("../views/example/SVGGraph/SVGGraphApp.vue"),
    },
    {
      path: "/ModalWithTransitionsApp",
      name: "ModalWithTransitionsApp",
      component: () => import("../views/example/ModalWithTransitions/ModalWithTransitionsApp.vue"),
    },
    {
      path: "/ListWithTransitionsApp",
      name: "ListWithTransitionsApp",
      component: () => import("../views/example/ListWithTransitions/ListWithTransitionsApp.vue"),
    },
    {
      path: "/TodoMVCApp",
      name: "TodoMVCApp",
      component: () => import("../views/example/TodoMVC/TodoMVCApp.vue"),
    },
    {
      path: "/Counter",
      name: "Counter",
      component: () => import("../views/example/GUIs/Counter.vue"),
    },
    
    {
      path: "/TemperatureConverter",
      name: "TemperatureConverter",
      component: () => import("../views/example/GUIs/TemperatureConverter.vue"),
    },

    {
      path: "/FlightBooker",
      name: "FlightBooker",
      component: () => import("../views/example/GUIs/FlightBooker.vue"),
    },
    {
      path: "/Timer",
      name: "Timer",
      component: () => import("../views/example/GUIs/Timer.vue"),
    },
    
    {
      path: "/CRUD",
      name: "CRUD",
      component: () => import("../views/example/GUIs/CRUD.vue"),
    },
    {
      path: "/CircleDrawer",
      name: "CircleDrawer",
      component: () => import("../views/example/GUIs/CircleDrawer.vue"),
    },
    {
      path: "/CellsApp",
      name: "CellsApp",
      component: () => import("../views/example/GUIs/Cells/CellsApp.vue"),
    },
    
    
    
    
  ]
})

export default router
