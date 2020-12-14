import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Tooltip, Toast, Popover } from 'bootstrap';
console.log("hello, world");
console.log("hello, world from hot reloading");

function showToast(toast) {
  toast.show()
}

$(document).ready(function(){
  var toast = document.getElementById('myToast')
  toast = new Toast(toast);
  showToast(toast)
  $('#toastButton').on('click', function () {
    showToast(toast)
  })
});
