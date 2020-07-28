var QRCode = require("qrcode-svg");
var svg = new QRCode("Hello World!").svg();

var qrcode = new QRCode({
  content: "http://www.dampfschiffbrugg.ch/de/anmeldungen/vollmond",
  padding: 4,
  width: 256,
  height: 256,
  color: "#000000",
  background: "#ffffff",
  ecl: "M",
});
qrcode.save("vollmond.svg", function(error) {
  if (error) throw error;
  console.log("Done!");
});