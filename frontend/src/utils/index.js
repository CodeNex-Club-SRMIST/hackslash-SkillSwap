// utils/index.js
import { toast } from 'react-toastify';

export const handleSuccess = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'light',
  });
};

export const handleError = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
  });
};
