import { ToastOptions, toast } from "react-toastify"

export enum ToastifyType {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
    DEFAULT = 'default'
}

export const BUIToastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
}

export const BUIToastContainer = (content: string, type: ToastifyType, options?: ToastOptions) => {
    switch (type) {
        case ToastifyType.SUCCESS:
            return toast.success(content, options);
        case ToastifyType.INFO:
            return toast.info(content, options);
        case ToastifyType.WARNING:
            return toast.warning(content, options);
        case ToastifyType.ERROR:
            return toast.error(content, options);
        case ToastifyType.DEFAULT:
            return toast(content, options);
    }
}

export const BUIToastComponents = (content: string, type: ToastifyType) => {
    return BUIToastContainer(content, type, BUIToastOptions);
}