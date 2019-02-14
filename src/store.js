import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: 'Randomaster',
        url: 'https://github.com/ceife/kros-randomaster/#readme',
        langs: ['python'],
        frameworks: ['flask'],
        libs: []
      },
      {
        name: 'Kamas',
        url: 'https://github.com/ceife/kamas/#readme',
        langs: ['javascript'],
        frameworks: [],
        libs: ['jquery']
      },
      {
        name: 'Carrinho top',
        url: 'https://github.com/ceife/carrinho-top/#readme',
        langs: ['javascript'],
        frameworks: ['vuejs'],
        libs: []
      },
      {
        name: 'Yugo',
        url: 'https://github.com/ceife/yugo/#readme',
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
