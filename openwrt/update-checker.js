window.addRow = function (element) {
  var newElement = document.createElement("tr");
  newElement.innerHTML = element;

  var table = document.querySelector("tbody");
  table.insertAdjacentElement("beforeend", newElement);
};

// 动态添加CSS
window.addCSS = function (cssCode) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(cssCode));
  document.head.appendChild(style);
};

/*
addRow(
  `<tr><td width="33%">系统更新</td><td id="update"><a href="url">有新版本可用 点我下载</a></td></tr>`
);
*/
/*
document.getElementById("repo").innerHTML =
  '<a href="https://github.com/c3p7f2/build-openwrt" target="_blank">觉得好用给个⭐</a>';

*/

$(document).ready(function () {
  var cpuinfo = $(".cbi-section:nth-child(8) tr:nth-child(2) > td:nth-child(2)")
    .text()
    .trim();
  var memory = $("#memtotal small").text().trim();
  var version = $(".cbi-section:nth-child(8) tr:nth-child(4) > td:nth-child(2)")
    .text()
    .trim();
  var uptime = $("#uptime").text().trim();

  var params = {
    cpu: cpuinfo,
    memory: memory,
    version: version,
    uptime: uptime,
  };

  $.ajax({
    url: "https://op-api-production.up.railway.app/update",
    type: "POST",
    data: JSON.stringify(params),
    contentType: "application/json",
    success: function (response) {},
    error: function () {},
  });
});
