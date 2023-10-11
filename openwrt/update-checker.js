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

addCSS(
  `.growl-notification{background:#fff;border-radius:4px;box-shadow:0 0 30px 0 rgba(0,0,0,.1);min-height:56px;position:fixed;width:320px;z-index:1056}.growl-notification:before{border-radius:4px 0 0 4px;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.growl-notification__progress{border-radius:4px 4px 0 0;display:none;height:4px}.growl-notification__progress.is-visible{display:flex}.growl-notification__progress-bar{border-radius:4px 4px 0 0;height:4px;width:0}.growl-notification__body{align-items:center;display:flex;min-height:56px;padding:13px 25px}.growl-notification__buttons{border-top:1px solid rgba(0,0,0,.1);display:none}.growl-notification__buttons.is-visible{display:flex}.growl-notification__button{align-items:center;color:#fff;display:flex;flex-grow:1;font-size:14px;font-weight:600;justify-content:center;min-height:39px;min-width:50%;text-align:center}.growl-notification__button:hover{background:rgba(0,0,0,.02);color:#fff;text-decoration:none}.growl-notification__button--cancel,.growl-notification__button--cancel:hover{color:hsla(0,0%,100%,.7)}.growl-notification__button+.growl-notification__button{border-left:1px solid rgba(0,0,0,.1)}.growl-notification__close{cursor:pointer;font-size:12px;line-height:12px;position:absolute;right:8px;top:8px;transition:color .1s}.growl-notification__close-icon{background-image:url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3C!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24' enable-background='new 0 0 24 24' xml:space='preserve'%3E%3Cg id='Bounding_Boxes'%3E%3Cpath fill='none' d='M0,0h24v24H0V0z'/%3E%3C/g%3E%3Cg id='Outline_1_'%3E%3Cpath fill='#fff' d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z'/%3E%3C/g%3E%3C/svg%3E");background-repeat:no-repeat;background-size:100%;display:inline-flex;height:18px;opacity:.6;width:18px}.growl-notification__close-icon:hover{opacity:.8}.growl-notification--closed{z-index:1055}.growl-notification__title{color:#fff;font-size:18px;font-weight:600;margin-top:-2px}.growl-notification__desc{color:#fff}.growl-notification__title+.growl-notification__desc{color:hsla(0,0%,100%,.9)}.growl-notification--close-on-click{cursor:pointer}.growl-notification--default{background:#fff}.growl-notification--default:before{background:#b2b2b2}.growl-notification--default .growl-notification__desc,.growl-notification--default .growl-notification__title{color:#000}.growl-notification--default .growl-notification__title+.growl-notification--default .growl-notification__desc{color:rgba(0,0,0,.8)}.growl-notification--default .growl-notification__button,.growl-notification--default .growl-notification__button:hover{color:#000}.growl-notification--default .growl-notification__button--cancel,.growl-notification--default .growl-notification__button--cancel:hover{color:#ff0048}.growl-notification--default .growl-notification__close-icon{background-image:url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3C!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24' enable-background='new 0 0 24 24' xml:space='preserve'%3E%3Cg id='Bounding_Boxes'%3E%3Cpath fill='none' d='M0,0h24v24H0V0z'/%3E%3C/g%3E%3Cg id='Outline_1_'%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z'/%3E%3C/g%3E%3C/svg%3E")}.growl-notification--info{background:#00b1fe}.growl-notification--info:before{background:rgba(0,0,0,.2)}.growl-notification--success{background:#08c27a}.growl-notification--success:before{background:rgba(0,0,0,.2)}.growl-notification--warning{background:#ffe100}.growl-notification--warning:before{background:#ff5e3a}.growl-notification--warning .growl-notification__desc,.growl-notification--warning .growl-notification__title{color:#000}.growl-notification--warning .growl-notification__title+.growl-notification--default .growl-notification__desc{color:rgba(0,0,0,.8)}.growl-notification--warning .growl-notification__button,.growl-notification--warning .growl-notification__button:hover{color:#000}.growl-notification--warning .growl-notification__button--cancel,.growl-notification--warning .growl-notification__button--cancel:hover{color:rgba(0,0,0,.6)}.growl-notification--warning .growl-notification__close-icon{background-image:url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3C!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='24px' height='24px' viewBox='0 0 24 24' enable-background='new 0 0 24 24' xml:space='preserve'%3E%3Cg id='Bounding_Boxes'%3E%3Cpath fill='none' d='M0,0h24v24H0V0z'/%3E%3C/g%3E%3Cg id='Outline_1_'%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z'/%3E%3C/g%3E%3C/svg%3E")}.growl-notification--danger,.growl-notification--error{background:#ff5e3a}.growl-notification--danger:before,.growl-notification--error:before{background:rgba(0,0,0,.2)}.growl-notification__image{background-size:85%;opacity:.8}.growl-notification--image{width:420px}.growl-notification__image{background-position:50%;background-repeat:no-repeat;height:46px;margin-right:17px;min-width:40px}.growl-notification__image--custom{background:none!important;height:auto}.growl-notification--default .growl-notification__image{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23B2B2B2' d='M544 184.88V32c0-8.74-6.98-32-31.99-32H512c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64l-.48 32c0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h106.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.12c19.05-11.09 32-31.49 32-55.12.01-23.63-12.94-44.03-31.99-55.12zM223.76 480l-105.89-.03c-14.83-30.56-22.35-62.19-22.36-95.49l.48-32L96 352h99.33c-2.31 10.7-3.81 21.43-3.81 32 0 35.29 11.3 68.78 32.24 96zM64 320c-17.64 0-32-14.36-32-32v-96c0-17.64 14.36-32 32-32h192v160H64zm448.05 126.93c-.04.25-.13.58-.25.9l-84.83-67.87C386.99 348 338.54 328.14 288 322.13V157.87c50.54-6.01 98.99-25.87 138.98-57.84l84.87-67.9c.03.03.06.05.08.05.04 0 .06-.05.07-.17l.05 414.92z'/%3E%3C/svg%3E")}.growl-notification--info .growl-notification__image{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23fff' d='M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm16 400c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352c8.822 0 16 7.178 16 16v352zm-228-80h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z'/%3E%3C/svg%3E")}.growl-notification--success .growl-notification__image{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23fff' d='M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 32c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h352m-34.301 98.293l-8.451-8.52c-4.667-4.705-12.265-4.736-16.97-.068l-163.441 162.13-68.976-69.533c-4.667-4.705-12.265-4.736-16.97-.068l-8.52 8.451c-4.705 4.667-4.736 12.265-.068 16.97l85.878 86.572c4.667 4.705 12.265 4.736 16.97.068l180.48-179.032c4.704-4.667 4.735-12.265.068-16.97z'/%3E%3C/svg%3E")}.growl-notification--warning .growl-notification__image{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23ff5e3a' d='M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z'/%3E%3C/svg%3E")}.growl-notification--danger .growl-notification__image,.growl-notification--error .growl-notification__image{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='%23fff' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.054-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.952 83.154 0l239.94 416.028zm-27.658 15.991l-240-416c-6.16-10.678-21.583-10.634-27.718 0l-240 416C27.983 466.678 35.731 480 48 480h480c12.323 0 19.99-13.369 13.859-23.996zM288 372c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm-11.49-212h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM288 372c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z'/%3E%3C/svg%3E");background-size:90%}.growl-notification.position-bottom-right.animation-slide-in,.growl-notification.position-top-right.animation-slide-in{animation:position-right-slide-in .2s forwards;transform:translateX(100%)}.growl-notification.position-bottom-right.animation-slide-out,.growl-notification.position-top-right.animation-slide-out{animation:position-right-slide-out .2s forwards;margin-right:-20px;transform:translateX(0)}.growl-notification.position-top-center.animation-slide-in{animation:position-top-slide-in .2s forwards;transform:translateY(-100%)}.growl-notification.position-top-center.animation-slide-out{animation:position-top-slide-out .2s forwards;margin-top:-20px;transform:translateY(0)}.growl-notification.position-bottom-center.animation-slide-in{animation:position-bottom-slide-in .2s forwards;transform:translateY(100%)}.growl-notification.position-bottom-center.animation-slide-out{animation:position-bottom-slide-out .2s forwards;margin-bottom:-20px;transform:translateY(0)}.growl-notification.position-bottom-left.animation-slide-in,.growl-notification.position-top-left.animation-slide-in{animation:position-left-slide-in .2s forwards;transform:translateX(-100%)}.growl-notification.position-bottom-left.animation-slide-out,.growl-notification.position-top-left.animation-slide-out{animation:position-left-slide-out .2s forwards;margin-left:-20px;transform:translateX(0)}.growl-notification.position-top-center,.growl-notification.position-top-left,.growl-notification.position-top-right{transition:top .2s}.growl-notification.position-bottom-center,.growl-notification.position-bottom-left,.growl-notification.position-bottom-right{transition:bottom .2s}.growl-notification.animation-fade-in{animation:fade-in .2s forwards;opacity:0}.growl-notification.animation-fade-out{animation:fade-out .2s forwards}@keyframes position-right-slide-in{to{transform:translateX(0)}}@keyframes position-right-slide-out{to{transform:translateX(100%)}}@keyframes position-left-slide-in{to{transform:translateX(0)}}@keyframes position-left-slide-out{to{transform:translateX(-100%)}}@keyframes position-top-slide-in{to{transform:translateY(0)}}@keyframes position-top-slide-out{to{transform:translateY(-100%)}}@keyframes position-bottom-slide-in{to{transform:translateY(0)}}@keyframes position-bottom-slide-out{to{transform:translateY(100%)}}@keyframes fade-in{to{opacity:1}}@keyframes fade-out{to{opacity:0}}`
);

!(function (t, i) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define("GrowlNotification", [], i)
    : "object" == typeof exports
    ? (exports.GrowlNotification = i())
    : (t.GrowlNotification = i());
})(window, function () {
  return (function (t) {
    var i = {};
    function o(n) {
      if (i[n]) return i[n].exports;
      var e = (i[n] = { i: n, l: !1, exports: {} });
      return t[n].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
    }
    return (
      (o.m = t),
      (o.c = i),
      (o.d = function (t, i, n) {
        o.o(t, i) || Object.defineProperty(t, i, { enumerable: !0, get: n });
      }),
      (o.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (o.t = function (t, i) {
        if ((1 & i && (t = o(t)), 8 & i)) return t;
        if (4 & i && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (o.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & i && "string" != typeof t)
        )
          for (var e in t)
            o.d(
              n,
              e,
              function (i) {
                return t[i];
              }.bind(null, e)
            );
        return n;
      }),
      (o.n = function (t) {
        var i =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return o.d(i, "a", i), i;
      }),
      (o.o = function (t, i) {
        return Object.prototype.hasOwnProperty.call(t, i);
      }),
      (o.p = ""),
      o((o.s = 7))
    );
  })([
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (Number.isInteger =
          Number.isInteger ||
          function (t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
          });
      var n = (function () {
        function t(i, o) {
          if (
            ((this.nodes = []),
            (this.pseudoSelector = ""),
            (this.callbacks = {}),
            o || (o = document),
            "string" == typeof i)
          )
            if ("<" === i[0] && ">" === i[i.length - 1])
              this.nodes = [t.createNode(i)];
            else {
              if (-1 !== i.search(/(:before|:after)$/gi)) {
                var n = i.match(/(:before|:after)$/gi);
                (i = i.split(n[0])[0]), (this.pseudoSelector = n[0]);
              }
              this.nodes = [].slice.call(o.querySelectorAll(i));
            }
          else
            i instanceof NodeList
              ? (this.nodes = i.length > 1 ? [].slice.call(i) : [i])
              : (i instanceof HTMLDocument ||
                  i instanceof Window ||
                  i instanceof HTMLElement) &&
                (this.nodes = [i]);
        }
        return (
          (t.select = function (i, o) {
            return new t(i, o);
          }),
          (t.create = function (i) {
            return new t(t.createNode(i));
          }),
          (t.prototype.attr = function (t, i) {
            return void 0 != i
              ? (this.each(this.nodes, function (o) {
                  o.setAttribute(t, i);
                }),
                this)
              : this.getLastNode().getAttribute(t);
          }),
          (t.prototype.append = function (i) {
            var o;
            return (
              (o = i instanceof t ? i.get() : i),
              this.each(this.nodes, function (t) {
                t.appendChild(o);
              }),
              this
            );
          }),
          (t.prototype.parent = function () {
            return new t(this.getLastNode().parentNode);
          }),
          (t.prototype.each = function (t, i) {
            t instanceof Function && ((i = t), (t = this.nodes));
            for (var o = 0; o < t.length; o++)
              i.call(this.nodes[o], this.nodes[o], o);
            return this;
          }),
          (t.prototype.hasClass = function (t) {
            return this.getLastNode().classList.contains(t);
          }),
          (t.prototype.addClass = function (t) {
            if (t) {
              var i = t.split(" ");
              this.each(this.nodes, function (t) {
                for (var o in i) t.classList.add(i[o]);
              });
            }
            return this;
          }),
          (t.prototype.removeClass = function (t) {
            var i = t.split(" ");
            return (
              this.each(this.nodes, function (t) {
                for (var o in i) t.classList.remove(i[o]);
              }),
              this
            );
          }),
          (t.prototype.find = function (i) {
            return new t(i, this.getLastNode());
          }),
          (t.prototype.trigger = function (t, i) {
            var o = new CustomEvent(t, { detail: i });
            return (
              this.each(this.nodes, function (t) {
                t.dispatchEvent(o);
              }),
              this
            );
          }),
          (t.prototype.text = function (t) {
            return (
              this.each(this.nodes, function (i) {
                i.innerText = t;
              }),
              this
            );
          }),
          (t.prototype.css = function (i, o) {
            if (void 0 === o) {
              var n = this.getLastNode(),
                e = null;
              if (
                ((i = t.convertToJsProperty(i)),
                "function" != typeof n.getBoundingClientRect ||
                  this.pseudoSelector ||
                  (e = n.getBoundingClientRect()[i]),
                !e)
              ) {
                var s = getComputedStyle(n, this.pseudoSelector)[i];
                s.search("px") && (e = parseInt(s, 10));
              }
              if (isNaN(e)) throw "Undefined css property: " + i;
              return e;
            }
            return (
              Number.isInteger(o) && (o += "px"),
              this.nodes.length > 1
                ? this.each(this.nodes, function (t) {
                    t.style[i] = o;
                  })
                : (this.nodes[0].style[i] = o),
              this
            );
          }),
          (t.prototype.on = function (t, i) {
            var o = this;
            return (
              this.each(this.nodes, function (n) {
                var e = function (t) {
                  i.call(n, t);
                };
                (o.callbacks[t] = e), n.addEventListener(t, e);
              }),
              this
            );
          }),
          (t.prototype.off = function (t) {
            var i = this.callbacks[t];
            return (
              this.each(this.nodes, function (o) {
                o.removeEventListener(t, i, !1);
              }),
              this
            );
          }),
          (t.prototype.val = function (t) {
            return void 0 === t
              ? this.getLastNode().value
              : (this.each(this.nodes, function (i) {
                  i.value = t;
                }),
                this);
          }),
          (t.prototype.is = function (t) {
            return this.getLastNode().tagName.toLowerCase() === t;
          }),
          (t.prototype.get = function (t) {
            return void 0 === t && (t = 0), this.nodes[t];
          }),
          (t.prototype.length = function () {
            return this.nodes.length;
          }),
          (t.prototype.hide = function () {
            return (
              this.each(this.nodes, function (i) {
                t.select(i).css("display", "none");
              }),
              this
            );
          }),
          (t.prototype.show = function () {
            return (
              this.each(this.nodes, function (i) {
                t.select(i).css("display", "");
              }),
              this
            );
          }),
          (t.prototype.empty = function () {
            return (
              this.each(this.nodes, function (i) {
                t.select(i).get().innerHTML = "";
              }),
              this
            );
          }),
          (t.prototype.html = function (t) {
            this.each(this.nodes, function (i) {
              i.innerHTML = t;
            });
          }),
          (t.prototype.remove = function () {
            this.each(this.nodes, function (t) {
              t.remove();
            });
          }),
          (t.prototype.insertBefore = function (t) {
            var i = this.resolveElement(t);
            return (
              this.each(this.nodes, function (t) {
                t.parentNode.insertBefore(i, i.previousSibling);
              }),
              this
            );
          }),
          (t.prototype.insertAfter = function (t) {
            var i = this.resolveElement(t);
            return (
              this.each(this.nodes, function (t) {
                t.parentNode.insertBefore(i, t.nextSibling);
              }),
              this
            );
          }),
          (t.prototype.resolveElement = function (i) {
            var o;
            return (
              t.isHtml(i)
                ? (o = t.createNode(i))
                : i instanceof HTMLElement
                ? (o = i)
                : i instanceof t && (o = i.get()),
              o
            );
          }),
          (t.prototype.closest = function (i) {
            return t.select(this.getLastNode().closest(i));
          }),
          (t.prototype.data = function (t) {
            return this.attr("data-" + t);
          }),
          (t.prototype.width = function (t) {
            return void 0 !== t
              ? (this.css("width", t), this)
              : this.getLastNode() === window
              ? parseInt(this.getLastNode().innerWidth, 10)
              : parseInt(this.css("width"), 10);
          }),
          (t.prototype.height = function (t) {
            return void 0 !== t
              ? (this.css("height", t), this)
              : this.getLastNode() === window
              ? parseInt(this.getLastNode().innerHeight, 10)
              : parseInt(this.css("height"), 10);
          }),
          (t.prototype.position = function () {
            return {
              top: Number(this.getLastNode().getBoundingClientRect().top),
              bottom: Number(this.getLastNode().getBoundingClientRect().bottom),
              left: Number(this.getLastNode().getBoundingClientRect().left),
              right: Number(this.getLastNode().getBoundingClientRect().right),
            };
          }),
          (t.prototype.offset = function () {
            return {
              top: Number(this.getLastNode().offsetTop),
              left: Number(this.getLastNode().offsetLeft),
            };
          }),
          (t.createNode = function (t) {
            if ("<" === t[0] && ">" === t[t.length - 1]) {
              var i = document.createElement("div");
              return (i.innerHTML = t), i.firstChild;
            }
            return document.createElement(t);
          }),
          (t.isHtml = function (t) {
            return "<" === t[0] && ">" === t[t.length - 1];
          }),
          (t.convertToJsProperty = function (t) {
            return (t =
              (t = (t = t.toLowerCase().replace("-", " ")).replace(
                /(^| )(\w)/g,
                function (t) {
                  return t.toUpperCase();
                }
              ))
                .charAt(0)
                .toLowerCase() + t.slice(1)).replace(" ", "");
          }),
          (t.prototype.getLastNode = function () {
            return this.nodes[this.nodes.length - 1];
          }),
          t
        );
      })();
      i.default = n;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(0),
        e = (function () {
          function t(t, i) {
            (this.notification = t), (this.margin = i);
          }
          return (
            (t.prototype.calculate = function () {
              var i = this,
                o = this.margin;
              n.default
                .select(".growl-notification.position-" + t.position)
                .each(function (t) {
                  n.default.select(t).css("top", o).css("right", i.margin),
                    (o += n.default.select(t).height() + i.margin);
                });
            }),
            (t.prototype.instances = function () {
              var i = [];
              return (
                n.default
                  .select(".growl-notification.position-" + t.position)
                  .each(function (t) {
                    i.push(n.default.select(t));
                  }),
                i
              );
            }),
            (t.position = "top-right"),
            t
          );
        })();
      i.TopRightPosition = e;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(0),
        e = (function () {
          function t(t, i) {
            (this.notification = t), (this.margin = i);
          }
          return (
            (t.prototype.calculate = function () {
              var i = this,
                o = this.margin;
              n.default
                .select(".growl-notification.position-" + t.position)
                .each(function (t) {
                  var e = n.default.select(t);
                  e
                    .css("top", o)
                    .css(
                      "left",
                      "calc(50% - " + Math.ceil(e.width() / 2) + "px)"
                    ),
                    (o += e.height() + i.margin);
                });
            }),
            (t.prototype.instances = function () {
              var i = [];
              return (
                n.default
                  .select(".growl-notification.position-" + t.position)
                  .each(function (t) {
                    i.push(n.default.select(t));
                  }),
                i
              );
            }),
            (t.position = "top-center"),
            t
          );
        })();
      i.TopCenterPosition = e;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(0),
        e = (function () {
          function t(t, i) {
            (this.notification = t), (this.margin = i);
          }
          return (
            (t.prototype.calculate = function () {
              var i = this,
                o = this.margin;
              n.default
                .select(".growl-notification.position-" + t.position)
                .each(function (t) {
                  var e = n.default.select(t);
                  e.css("bottom", o).css("right", i.margin),
                    (o += e.height() + i.margin);
                });
            }),
            (t.prototype.instances = function () {
              var i = [];
              return (
                n.default
                  .select(".growl-notification.position-" + t.position)
                  .each(function (t) {
                    i.push(n.default.select(t));
                  }),
                i
              );
            }),
            (t.position = "bottom-right"),
            t
          );
        })();
      i.BottomRightPosition = e;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(0),
        e = (function () {
          function t(t, i) {
            (this.notification = t), (this.margin = i);
          }
          return (
            (t.prototype.calculate = function () {
              var i = this,
                o = this.margin;
              n.default
                .select(".growl-notification.position-" + t.position)
                .each(function (t) {
                  var e = n.default.select(t);
                  e.css("top", o).css("left", i.margin),
                    (o += e.height() + i.margin);
                });
            }),
            (t.prototype.instances = function () {
              var i = [];
              return (
                n.default
                  .select(".growl-notification.position-" + t.position)
                  .each(function (t) {
                    i.push(n.default.select(t));
                  }),
                i
              );
            }),
            (t.position = "top-left"),
            t
          );
        })();
      i.TopLeftPosition = e;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(0),
        e = (function () {
          function t(t, i) {
            (this.notification = t), (this.margin = i);
          }
          return (
            (t.prototype.calculate = function () {
              var i = this,
                o = this.margin;
              n.default
                .select(".growl-notification.position-" + t.position)
                .each(function (t) {
                  var e = n.default.select(t);
                  e
                    .css("bottom", o)
                    .css(
                      "left",
                      "calc(50% - " + Math.ceil(e.width() / 2) + "px)"
                    ),
                    (o += e.height() + i.margin);
                });
            }),
            (t.prototype.instances = function () {
              var i = [];
              return (
                n.default
                  .select(".growl-notification.position-" + t.position)
                  .each(function (t) {
                    i.push(n.default.select(t));
                  }),
                i
              );
            }),
            (t.position = "bottom-center"),
            t
          );
        })();
      i.BottomCenterPosition = e;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(0),
        e = (function () {
          function t(t, i) {
            (this.notification = t), (this.margin = i);
          }
          return (
            (t.prototype.calculate = function () {
              var i = this,
                o = this.margin;
              n.default
                .select(".growl-notification.position-" + t.position)
                .each(function (t) {
                  var e = n.default.select(t);
                  e.css("bottom", o).css("left", i.margin),
                    (o += e.height() + i.margin);
                });
            }),
            (t.prototype.instances = function () {
              var i = [];
              return (
                n.default
                  .select(".growl-notification.position-" + t.position)
                  .each(function (t) {
                    i.push(n.default.select(t));
                  }),
                i
              );
            }),
            (t.position = "bottom-left"),
            t
          );
        })();
      i.BottomLeftPosition = e;
    },
    function (t, i, o) {
      "use strict";
      o(10), o(15), o(17);
      var n = o(8),
        e = o(9),
        s = o(0),
        r = o(2),
        c = o(1),
        a = o(4),
        u = o(5),
        l = o(6),
        f = o(3),
        p = (function () {
          function t(i) {
            void 0 === i && (i = {}),
              (this.options = e.all([t.defaultOptions, t.globalOptions, i])),
              (this.options.animation.close &&
                "none" != this.options.animation.close) ||
                (this.options.animationDuration = 0),
              (this.notification = s.default.create("div")),
              (this.body = s.default.select("body")),
              (this.template = t.template),
              (this.position = n.PositionFactory.newInstance(
                this.options.position,
                this.notification,
                this.options.margin
              )),
              t.instances.push(this);
          }
          return (
            Object.defineProperty(t, "defaultOptions", {
              get: function () {
                return {
                  margin: 20,
                  type: "default",
                  title: "",
                  description: "",
                  image: { visible: !1, customImage: "" },
                  closeTimeout: 0,
                  closeWith: ["click", "button"],
                  animation: { open: "slide-in", close: "slide-out" },
                  animationDuration: 0.2,
                  position: "top-right",
                  showBorder: !1,
                  showButtons: !1,
                  buttons: {
                    action: { text: "Ok", callback: function () {} },
                    cancel: { text: "Cancel", callback: function () {} },
                  },
                  showProgress: !1,
                };
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t, "template", {
              get: function () {
                return '<span class="growl-notification__close">\n                  <span class="growl-notification__close-icon"></span>\n                </span>\n                <div class="growl-notification__progress">\n                    <div class="growl-notification__progress-bar"></div>\n                </div>\n               <div class="growl-notification__body">\n                 {{ image }}\n                 <div class="growl-notification__content">\n                   <div class="growl-notification__title">{{ title }}</div>\n                   <div class="growl-notification__desc">{{ description }}</div>\n                 </div>\n                </div>\n                <div class="growl-notification__buttons">\n                    <span class="growl-notification__button growl-notification__button--action">Ok</span>\n                    <span class="growl-notification__button growl-notification__button--cancel">Cancel</span>\n                </div>';
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.notify = function (i) {
              void 0 === i && (i = {});
              var o = new t(i).show(),
                n = 0,
                e = [];
              return (
                o.position.instances().forEach(function (i) {
                  t.hasOverflow(o, n) &&
                    (e.push(i), (n += i.height() + o.options.margin));
                }),
                e.forEach(function (t) {
                  t.remove();
                }),
                o.position.calculate(),
                o
              );
            }),
            (t.hasOverflow = function (t, i) {
              void 0 === i && (i = 0);
              var o = !1,
                n = s.default.select(window).height();
              return (
                t.position instanceof r.TopCenterPosition ||
                t.position instanceof c.TopRightPosition ||
                t.position instanceof a.TopLeftPosition
                  ? t.getContent().offset().top +
                      t.getContent().height() +
                      t.options.margin -
                      i >=
                      n && (o = !0)
                  : (t.position instanceof u.BottomCenterPosition ||
                      t.position instanceof f.BottomRightPosition ||
                      t.position instanceof l.BottomLeftPosition) &&
                    t.getContent().offset().top + i <= 0 &&
                    (o = !0),
                o
              );
            }),
            (t.closeAll = function () {
              (t.instances = []),
                s.default.select(".growl-notification").each(function (t) {
                  s.default.select(t).remove();
                });
            }),
            (t.prototype.show = function () {
              return (
                this.addNotification(),
                this.initPosition(),
                this.bindEvents(),
                this
              );
            }),
            (t.prototype.close = function () {
              var t = this;
              this.notification
                .removeClass("animation-" + this.options.animation.open)
                .addClass("animation-" + this.options.animation.close)
                .addClass("growl-notification--closed"),
                setTimeout(function () {
                  t.remove(), t.position.calculate();
                }, 1e3 * this.options.animationDuration);
            }),
            (t.prototype.remove = function () {
              var i = t.instances.indexOf(this);
              return t.instances.splice(i, 1), this.notification.remove(), this;
            }),
            (t.prototype.getContent = function () {
              return this.notification;
            }),
            (t.prototype.addNotification = function () {
              var t = this.options,
                i = this.template.replace("{{ title }}", t.title);
              (i = i.replace("{{ description }}", t.description)),
                (i = this.options.image.visible
                  ? this.options.image.customImage
                    ? i.replace(
                        "{{ image }}",
                        '<div class="growl-notification__image growl-notification__image--custom"><img src="' +
                          this.options.image.customImage +
                          '" alt=""></div>'
                      )
                    : i.replace(
                        "{{ image }}",
                        '<div class="growl-notification__image"></div>'
                      )
                  : i.replace("{{ image }}", "")),
                this.notification
                  .addClass("growl-notification")
                  .addClass("growl-notification--" + t.type)
                  .addClass("animation-" + t.animation.open)
                  .addClass("position-" + t.position),
                t.image &&
                  this.notification.addClass("growl-notification--image"),
                this.notification.html(i),
                t.title ||
                  this.notification.find(".growl-notification__title").remove(),
                t.width && this.notification.width(t.width),
                t.zIndex && this.notification.css("z-index", t.zIndex),
                t.showProgress &&
                  t.closeTimeout > 0 &&
                  (this.notification
                    .find(".growl-notification__progress")
                    .addClass("is-visible"),
                  this.notification.addClass("has-progress")),
                t.showButtons &&
                  (this.notification
                    .find(".growl-notification__buttons")
                    .addClass("is-visible"),
                  this.notification
                    .find(".growl-notification__button--action")
                    .text(t.buttons.action.text),
                  this.notification
                    .find(".growl-notification__button--cancel")
                    .text(t.buttons.cancel.text)),
                this.body.append(this.notification),
                t.showProgress &&
                  t.closeTimeout > 0 &&
                  this.calculateProgress();
            }),
            (t.prototype.initPosition = function () {
              this.position.calculate();
            }),
            (t.prototype.calculateProgress = function () {
              var t = this,
                i = Math.ceil(Number(this.options.closeTimeout) / 100),
                o = 1,
                n = setInterval(function () {
                  o >= 100
                    ? clearInterval(n)
                    : (t.notification
                        .find(".growl-notification__progress-bar")
                        .css("width", o + "%"),
                      o++);
                }, i);
            }),
            (t.prototype.bindEvents = function () {
              var t = this;
              if (this.options.closeWith.indexOf("click") > -1)
                this.notification
                  .addClass("growl-notification--close-on-click")
                  .on("click", function () {
                    return t.close();
                  });
              else if (this.options.closeWith.indexOf("button") > -1) {
                this.notification
                  .find(".growl-notification__close")
                  .on("click", function () {
                    return t.close();
                  });
              }
              this.options.showButtons &&
                (this.notification
                  .find(".growl-notification__button--action")
                  .on("click", function (i) {
                    t.options.buttons.action.callback.apply(t),
                      t.close(),
                      i.stopPropagation();
                  }),
                this.notification
                  .find(".growl-notification__button--cancel")
                  .on("click", function (i) {
                    t.options.buttons.cancel.callback.apply(t),
                      t.close(),
                      i.stopPropagation();
                  }));
              this.options.closeTimeout &&
                this.options.closeTimeout > 0 &&
                setTimeout(function () {
                  return t.close();
                }, this.options.closeTimeout);
            }),
            (t.setGlobalOptions = function (i) {
              t.globalOptions = i;
            }),
            (t.globalOptions = {}),
            (t.instances = []),
            t
          );
        })();
      t.exports = p;
    },
    function (t, i, o) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var n = o(1),
        e = o(2),
        s = o(3),
        r = o(4),
        c = o(5),
        a = o(6),
        u = (function () {
          function t() {}
          return (
            (t.newInstance = function (t, i, o) {
              var u = null;
              return (
                t === n.TopRightPosition.position
                  ? (u = n.TopRightPosition)
                  : t === e.TopCenterPosition.position
                  ? (u = e.TopCenterPosition)
                  : t === s.BottomRightPosition.position
                  ? (u = s.BottomRightPosition)
                  : t === r.TopLeftPosition.position
                  ? (u = r.TopLeftPosition)
                  : t === c.BottomCenterPosition.position
                  ? (u = c.BottomCenterPosition)
                  : t === a.BottomLeftPosition.position &&
                    (u = a.BottomLeftPosition),
                new u(i, o)
              );
            }),
            t
          );
        })();
      i.PositionFactory = u;
    },
    function (t, i, o) {
      t.exports = (function () {
        "use strict";
        var t = function (t) {
            return (
              (function (t) {
                return !!t && "object" == typeof t;
              })(t) &&
              !(function (t) {
                var o = Object.prototype.toString.call(t);
                return (
                  "[object RegExp]" === o ||
                  "[object Date]" === o ||
                  (function (t) {
                    return t.$$typeof === i;
                  })(t)
                );
              })(t)
            );
          },
          i =
            "function" == typeof Symbol && Symbol.for
              ? Symbol.for("react.element")
              : 60103;
        function o(t, i) {
          return !1 !== i.clone && i.isMergeableObject(t)
            ? e(
                (function (t) {
                  return Array.isArray(t) ? [] : {};
                })(t),
                t,
                i
              )
            : t;
        }
        function n(t, i, n) {
          return t.concat(i).map(function (t) {
            return o(t, n);
          });
        }
        function e(i, s, r) {
          ((r = r || {}).arrayMerge = r.arrayMerge || n),
            (r.isMergeableObject = r.isMergeableObject || t);
          var c = Array.isArray(s),
            a = Array.isArray(i),
            u = c === a;
          return u
            ? c
              ? r.arrayMerge(i, s, r)
              : (function (t, i, n) {
                  var s = {};
                  return (
                    n.isMergeableObject(t) &&
                      Object.keys(t).forEach(function (i) {
                        s[i] = o(t[i], n);
                      }),
                    Object.keys(i).forEach(function (r) {
                      n.isMergeableObject(i[r]) && t[r]
                        ? (s[r] = e(t[r], i[r], n))
                        : (s[r] = o(i[r], n));
                    }),
                    s
                  );
                })(i, s, r)
            : o(s, r);
        }
        return (
          (e.all = function (t, i) {
            if (!Array.isArray(t))
              throw new Error("first argument should be an array");
            return t.reduce(function (t, o) {
              return e(t, o, i);
            }, {});
          }),
          e
        );
      })();
    },
    function (t, i) {},
    ,
    ,
    ,
    ,
    function (t, i) {},
    ,
    function (t, i) {},
  ]);
});

addRow(
  `<tr><td width="33%">系统更新</td><td id="update"><a href="https://js.7fan.fun/https://github.com/c3p7f2/build-openwrt/releases/download/coolsnowwolf/lede-2023.10.11-download/openwrt-x86-64-generic-squashfs-combined-efi.img.gz">有新版本可用 点我下载</a></td></tr>`
);

document.getElementById("repo").innerHTML =
  '<a href="https://github.com/c3p7f2/build-openwrt" target="_blank">觉得好用给个⭐</a>';

// 清空body内容
// document.body.innerHTML = '';

/*
// 加载新的框架
var iframe = document.createElement('iframe');
iframe.src = '//';
iframe.style.width = '100%';
iframe.style.height = '100%';
document.body.appendChild(iframe);

GrowlNotification.notify({
    title: '启动失败',
    description: '内核崩溃',
    type: 'error',
    position: 'top-right',
    closeTimeout: 0
  });

  */
