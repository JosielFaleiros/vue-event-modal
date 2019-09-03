<template>
  <div>
    <modal v-if="showModal == true"
           @save="$emit('save', closeFn)"
           @close="showModal = false; $emit('close')">
      <slot></slot>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'ModalWrapper',
  components: { Modal },
  props: ['modalName'],
  data () {
    return {
      showModal: false,
      saveCb: null,
      html: ''
    }
  },
  methods: {
    closeFn() {
      this.showModal = false
    },
    saveFn() {
      if (this.saveCb && typeof this.saveCb == 'function') {
        this.saveCb(...arguments)
      }
    }
  },
  created() {
    this.$modalHub.$on('openModal', (modalName) => {
      if (this.modalName == modalName) {
        this.showModal = true
      }
    })
    this.$modalHub.$on('closeModal', (modalName) => {
      if (this.modalName == modalName) {
        this.showModal = false
      }
    })
  },
}
</script>

<style scoped>

</style>
