!function(e, t) {for (var n in t) e[n] = t[n];}(exports, function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = { i: r, l: !1, exports: {} };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag &&
    Object.defineProperty(e, Symbol.toStringTag,
      { value: "Module" }), Object.defineProperty(e, "__esModule",
      { value: !0 });
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default",
      { enumerable: !0, value: e }), 2 & t && "string" !=
    typeof e) for (var o in e) n.d(r, o,
      function(t) {return e[t];}.bind(null, o));
    return r;
  }, n.n = function(e) {
    var t = e && e.__esModule
      ? function() {return e.default;}
      : function() {return e;};
    return n.d(t, "a", t), t;
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([
  function(e, t) {e.exports = require("react");},
  function(e, t) {e.exports = require("antd");},
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0), o = n.n(r), l = n(1), u = [
      {
        title: "parent 1",
        key: "0-0",
        children: [
          {
            title: "parent 1-0",
            key: "0-0-0",
            disabled: !0,
            children: [
              { title: "leaf", key: "0-0-0-0", disableCheckbox: !0 },
              { title: "leaf", key: "0-0-0-1" }]
          },
          {
            title: "parent 1-1",
            key: "0-0-1",
            children: [
              {
                title: o.a.createElement("span",
                  { style: { color: "#1890ff" } }, "sss"), key: "0-0-1-0"
              }]
          }]
      }];
    t.default = function() {
      return o.a.createElement(l.Tree, {
        checkable: !0,
        defaultExpandedKeys: ["0-0-0", "0-0-1"],
        defaultSelectedKeys: ["0-0-0", "0-0-1"],
        defaultCheckedKeys: ["0-0-0", "0-0-1"],
        onSelect: function(e, t) {console.log("selected", e, t);},
        onCheck: function(e, t) {console.log("onCheck", e, t);},
        treeData: u
      });
    };
  }]));