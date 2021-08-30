import { createToast } from 'mosha-vue-toastify';

let config = {
    position: 'bottom-center',
    transition: 'zoom',
    hideProgressBar: 'true',
    showCloseButton: 'false',
}

function toastSuccess (text) {
    config.type = 'success';
    createToast (text, config)
}

function toastDanger (text) {
    config.type = 'danger';    
    createToast (text, config)
}

export {toastSuccess, toastDanger};