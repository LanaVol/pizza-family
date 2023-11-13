import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import bannerCoupon from "../img/banner.png";

// TEMPLATE MODAL WINDOWS
function showModalWindowSuccess(message) {
  Swal.fire({
    position: "center",
    showConfirmButton: true,
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
}

function showModalWindowError(message) {
  Swal.fire({
    icon: "error",
    confirmButtonColor: "#ff8c42",
    title: `${message}`,
  });
}

function showBannerCoupon() {
  Swal.fire({
    width: 950,
    background: "#ff8c4230",
    imageUrl: bannerCoupon,
    imageWidth: 900,
    imageHeight: 350,
    imageAlt: "Custom image",
    showConfirmButton: false,
    showCloseButton: true,
  });
}

export { showBannerCoupon, showModalWindowError, showModalWindowSuccess };
