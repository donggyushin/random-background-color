var script = document.createElement("script");
script.src = "//code.jquery.com/jquery-1.11.0.min.js";
//처음에 네모칸 16칸 생성하는 함수

function buildSquare() {
  document.write("<div class='row'>");
  for (j = 0; j < 16; j++) {
    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;
    document.write("<div class='item' id=" + j + "></div>");
    document.getElementById(j).style.backgroundColor =
      "rgb(" + r + "," + g + "," + b + ")";
  }
  document.write("</div>");
}

buildSquare();
