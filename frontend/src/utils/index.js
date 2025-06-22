import { toast } from 'react-toastify';

let toastId = null;

export const handleSuccess = (message) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      theme: 'light',
    });
  }
};

export const handleError = (message) => {
  if (!toast.isActive(toastId)) {
    toastId = toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      theme: 'colored',
    });
  }
};
