
// var context = document.getElementById('white_board').getContext("2d");
// $('#white_board').mousedown(function (e) {
//     var mouseX = e.pageX - this.offsetLeft;
//     var mouseY = e.pageY - this.offsetTop;

//     paint = true;
//     addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
//     redraw();
// });
// $('#white_board').mousemove(function (e) {
//     if (paint) {
//         addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, $('#size').val(), true);
//         redraw();
//     }
// });
// $('#white_board').mouseup(function (e) {
//     paint = false;
// });
// $('#white_board').mouseleave(function (e) {
//     paint = false;
// });
// $('#colorSelector').change((e)=>{
//     // console.log(e.target.value)
//     curColor = e.target.value
// })
// var clickX = new Array();
// var clickY = new Array();
// var clickDrag = new Array();
// var lineWidth = new Array();
// var curColor = "#000";
// var clickColor = new Array();
// var paint;

// function addClick(x, y, size, dragging) {
//     clickX.push(x);
//     clickY.push(y);
//     clickDrag.push(dragging);
//     clickColor.push(curColor);
//     lineWidth.push(size);
// }
// function redraw() {
//     context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

//     // context.strokeStyle = "#df4b26";
//     context.lineJoin = "round";
//     // context.lineWidth = ; // change the size of the stroke
    
//     for (var i = 0; i < clickX.length; i++) {
//         context.beginPath();
//         if (clickDrag[i] && i) {
//             context.moveTo(clickX[i - 1], clickY[i - 1]);
//         } else {
//             context.moveTo(clickX[i] - 1, clickY[i]);
//         }
//         context.lineTo(clickX[i], clickY[i]);
//         context.closePath();
//         context.lineWidth = lineWidth[i];
//         context.strokeStyle = clickColor[i]
//         context.stroke();
//     }
// }
// $('#clear_complete').click(function () {
//     let canvas = document.getElementById('white_board')
//     clickX = [];
//     clickY = [];
//     lineWidth = [];
//     clickColor = [];
//     clickDrag = [];
//     context.clearRect(0, 0, canvas.width, canvas.height);
// });