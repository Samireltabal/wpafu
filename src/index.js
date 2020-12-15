import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Tooltip, Toast, Popover } from 'bootstrap';
import { CanvasDesigner } from './js/canvas';

console.log("hello, world");
console.log("hello, world from hot reloading");

function showToast(toast) {
  toast.show()
}
var designer = new CanvasDesigner();
// both links are mandatory
// widget.html will internally use widget.js
designer.widgetHtmlURL = 'https://www.webrtc-experiment.com/Canvas-Designer/widget.html'; // you can place this file anywhere
designer.widgetJsURL = 'https://www.webrtc-experiment.com/Canvas-Designer/widget.js';     // you can place this file anywhere
var canvas = document.getElementById('canvas_div');

$(document).ready(function(){
  designer.appendTo(canvas);
  var toast = document.getElementById('myToast')
  toast = new Toast(toast);
  showToast(toast)
  $('#toastButton').on('click', function () {
    showToast(toast)
  })
});
