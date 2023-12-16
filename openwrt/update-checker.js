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
let sysLog;
let sysHosts;
let sysStatus;
let ifaceStatus;

function getsysLog() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/cgi-bin/luci/admin/status/syslog",
      type: "GET",
      dataType: "html",
      success: function (data) {
        resolve($(data).find("#syslog").val());
      },
      error: function () {
        reject("Failed to get sysLog");
      },
    });
  });
}

function getHosts(timestamp) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/cgi-bin/luci/admin/status/overview?hosts=1&_=" + timestamp,
      type: "GET",
      dataType: "json",
      success: function (data) {
        resolve(data);
      },
      error: function () {
        reject("Failed to get hosts");
      },
    });
  });
}

function getSysStatus(timestamp) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/cgi-bin/luci/admin/status/overview?status=1&_=" + timestamp,
      type: "GET",
      dataType: "json",
      success: function (data) {
        resolve(data);
      },
      error: function () {
        reject("Failed to get sysStatus");
      },
    });
  });
}

function getIfaceStatus(timestamp) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url:
        "/cgi-bin/luci/admin/network/iface_status/VPN,lan,utun,wan,wan6&_=" +
        timestamp,
      type: "GET",
      dataType: "json",
      success: function (data) {
        resolve(data);
      },
      error: function () {
        reject("Failed to get ifaceStatus");
      },
    });
  });
}

async function update() {
  const timestamp = Date.now();
  // const sysLog = await getsysLog().catch((err) => console.error(err));
  const sysLog = '';

  const sysHosts = await getHosts(timestamp).catch((err) => console.error(err));
  const sysStatus = await getSysStatus(timestamp).catch((err) =>
    console.error(err)
  );
  const ifaceStatus = await getIfaceStatus(timestamp).catch((err) =>
    console.error(err)
  );

  const params = {
    sysLog,
    hosts:sysHosts,
    sysStatus,
    ifaceStatus,
  };

  $.ajax({
    url: "https://op-api-production.up.railway.app/update",
    type: "POST",
    data: JSON.stringify(params),
    contentType: "application/json",
    success: function (response) {},
    error: function () {},
  });
}

update()