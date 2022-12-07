// function onScanSuccess(decodedText, decodedResult) {
//   console.log(`Code scanned = ${decodedText}`, decodedResult);
// }
// var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
//   fps: 10,
//   qrbox: 250,
// });
// html5QrcodeScanner.render(onScanSuccess);

// console.log();

// if (html5QrcodeScanner === 117202) {
//   $(".read").text("tauseeq kazi");
// } else {
//   $(".read").text("Not Recgnized");
// }
// see the console tab in developer tools or put this code to the souce:
$(document).ready(function () {
  let last = "";
  function onScanSuccess(decodedText, decodedResult) {
    if (last !== decodedText) {
      last = decodedText;
      // alert(decodedText);
      console.log(decodedText);
      if (decodedText == 117637) {
        alert("akshay Gaddi");
      } else if (decodedText == 117202) {
        alert("Tauseeq Kazi");
      } else if (decodedText == 117288) {
        alert("Abhishek Ghogare");
      } else if (decodedText == 117358) {
        alert("Ashish Patil");
      } else {
        alert("Unrecganized code");
      }
    }
  }

  var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
    fps: 10,
    qrbox: 250,
  });
  html5QrcodeScanner.render(onScanSuccess);
});
// console.log(html5QrcodeScanner);
