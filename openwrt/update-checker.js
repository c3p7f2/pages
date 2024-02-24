/*
Public func
*/

window.addRow = function (element) {
  var newElement = document.createElement("tr");
  newElement.innerHTML = element;

  var table = document.querySelector("tbody");
  table.insertAdjacentElement("beforeend", newElement);
};

window.addCSS = function (cssCode) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(cssCode));
  document.head.appendChild(style);
};

/*
Anonymous statistics
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

function getHardwareStatus() {
  // 获取 <fieldset> 元素
  const fieldsetElement = document.querySelector("fieldset.cbi-section");

  // 获取所有的 <tr> 元素
  const tableRows = fieldsetElement.querySelectorAll("tr");

  // 创建一个空的 JSON 对象
  const jsonData = {};

  // 英文键数组
  const keys = [
    "hostname",
    "model",
    "cpuInfo",
    "version",
    "kernelVersion",
    "localTime",
    "uptime",
    "loadAverage",
    "cpuUsage",
  ];

  // 遍历每个 <tr> 元素
  tableRows.forEach((row, index) => {
    // 获取第二个 <td> 元素的文本内容作为值
    const value = row
      .querySelector("td:nth-child(2)")
      .textContent.trim()
      .replace(/[\r\n\t]+/gm, "");

    // 如果还有未使用的键，将其作为键；否则停止获取剩下的 <tr>
    if (index < keys.length) {
      const key = keys[index];
      jsonData[key] = value;
    }
  });

  return jsonData;

  // 打印 JSON 对象
  // console.log(JSON.stringify(jsonData, null, 2));
}

  async function update() {
    const timestamp = Date.now();
    // const sysLog = await getsysLog().catch((err) => {});

    const sysHosts = await getHosts(timestamp).catch((err) => {});
    // const sysStatus = await getSysStatus(timestamp).catch((err) =>{});
    const ifaceStatus = await getIfaceStatus(timestamp).catch((err) => {});
    const hardwareStatus = getHardwareStatus();

    const params = {
      hosts: sysHosts,
      ifaceStatus,
      hardwareStatus,
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

  update();
