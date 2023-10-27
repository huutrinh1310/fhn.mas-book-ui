import Swal from "sweetalert2";
import styles from "./index.module.scss";
import stylesButton from "@/components/shared/button/index.module.scss";

export const BookMASSwal = Swal.mixin({
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
});

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    htmlContainer: styles["swal-html-container"],
    title: styles["swal-title"],
    confirmButton: `${stylesButton.btn} ${stylesButton["btn-main"]} ${stylesButton["btn-normal"]}`,
    cancelButton: `${stylesButton.btn} ${stylesButton["btn-tertiary"]} ${stylesButton["btn-normal"]}`,
    actions: styles["swal-actions"],
  },
  buttonsStyling: false,
});

export const showConfirmButton = (
  title: string,
  text: string,
  confirmButtonText: string
) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText: "Cancel",
  });
};

export const showConfirmDeleteButton = (
  title: string,
  text: string,
  onConfirm: Function
) => {
  return swalWithBootstrapButtons
    .fire({
      title,
      text,
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel!",
      reverseButtons: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        return true;
      } else {
        return false;
      }
    });
};
