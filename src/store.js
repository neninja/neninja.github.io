import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'Randomaster',
        url: 'https://github.com/nenitf/kros-randomaster/#readme',
        langs: ['python'],
        frameworks: ['flask'],
        libs: []
      },
      {
        name: 'Kamas',
        url: 'https://github.com/nenitf/kamas/#readme',
        langs: ['javascript'],
        frameworks: [],
        libs: ['jquery']
      },
      {
        name: 'Carrinho top',
        url: 'https://github.com/nenitf/carrinho-top/#readme',
        langs: ['javascript'],
        frameworks: ['vuejs'],
        libs: []
      },
      {
        name: 'Yugo',
        url: 'https://github.com/nenitf/yugo/#readme',
        langs: ['go', 'javascript'],
        frameworks: ['vuejs'],
        libs: []
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
