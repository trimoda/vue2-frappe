import { Chart } from './components/Charts'

export {
  VueFrappe: Chart
}

export default {
    install (Vue, options) {
        Vue.component('vue-frappe', Chart)
    }
}
