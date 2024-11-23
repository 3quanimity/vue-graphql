import './assets/main.css'

import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './services/appolo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.mount('#app')
