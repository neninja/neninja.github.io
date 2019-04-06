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
    ],
    socialLinks: [
      {
        icon: "icon-github",
        aria: "Goto my github account",
        url: "https://github.com/nenitf/"
      },
      {
        icon: "icon-gitlab",
        aria: "Goto my gitlab account",
        url: "https://gitlab.com/nenitf/"
      },
      {
        icon: "icon-linkedin",
        aria: "Goto my linkedin account",
        url: "https://www.linkedin.com/in/nenitf"
      },
      {
        icon: "icon-mail",
        aria: "Send me a email",
        url: "mailto:ola@neni.dev"
      },
      {
        icon: "icon-send",
        aria: "Send me a message on telegram",
        url: "https://t.me/nenitf"
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
