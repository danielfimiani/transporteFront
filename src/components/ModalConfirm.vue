<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <h3 class="font-bold text-2xl text-center mb-8">¿Estás seguro?</h3>

          <div class="modal-footer flex justify-between">
            <slot name="footer">
              <button class="modal-default-button btn btn-success" @click="$emit('yes')"> Si</button>
              <button class="modal-default-button btn btn-error" @click="$emit('no')"> No</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 250px;
    margin: 0px auto;
    padding: 30px 40px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    border-radius: 20px;
  }

  .modal-default-button {
    display: block;
    margin-top: 1rem;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>