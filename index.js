import ModalWrapper from './ModalWrapper'

export default {
  install(Vue, options = { tagName: 'ModalWrapper' }) {
    Vue.component(options.tagName, ModalWrapper)

    Vue.prototype.$modalHub = new Vue() // Global modal event bus
  }
}
