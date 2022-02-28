import { createApp } from 'vue'
// // app

// import App from './App.vue'
// createApp(App).mount('#app')

// // option api
// // global component

// import ApiOption from './ApiOption.vue'
// import Child from './components/optionapi/module/Child.vue';
// const app = createApp(ApiOption)
// app.component('child-component', Child)
// app.mount('#app')


// // todo option

// import AppTodoOption from './AppTodoOption.vue'
// createApp(AppTodoOption).mount('#app')

// // composition api

// import ApiComposition from './ApiComposition.vue';
// createApp(ApiComposition).mount('#app')

// advance vue

import Advance from './Advance.vue'
import router from './components/advance/vue-router/Routes'

createApp(Advance).use(router).mount('#app')