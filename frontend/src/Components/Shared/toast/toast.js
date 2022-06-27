import { SUCCESS, ERROR, WARNING } from './types';
import { toast } from 'react-toastify';
const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showToast = (type, message) => {
    switch(type) {
        case SUCCESS:
            toast.success(message, toastConfig);
            return ;
        case ERROR:
            toast.error(message, toastConfig);
            return ;
        case WARNING:
            toast.warning(message, toastConfig);
            return;
    }
}