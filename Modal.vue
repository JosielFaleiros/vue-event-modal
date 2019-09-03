<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="col-12 modal-header pt-0 pb-0">
                <div class="">
                  <slot name="modalTitle">
                  </slot>
                </div>
                <a href="javascript:void(0);" class="close btn btn-link p-0 m-1 justify-content-end">
                  <span @click="$emit('close')" aria-hidden="true" class="pl-1 pr-1">&times;</span>
                </a>
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
              <div class="modal-footer">
                <a href="javascript:void(0);" role="button" class="btn rounded btn-secondary" @click="$emit('close')">
                  Cancelar
                </a>
                <a
                  @click="$emit('save')"
                  href="javascript:void(0);" role="button" class="btn rounded btn-primary">Salvar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .modal-dialog {
    /*max-width: 900px;*/
  }
</style>
