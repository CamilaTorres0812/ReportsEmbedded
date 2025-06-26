import {
  require_powerbi
} from "./chunk-5CF2AKLF.js";
import {
  __commonJS
} from "./chunk-GZBIO5IJ.js";

// node_modules/powerbi-report-authoring/dist/powerbi-report-authoring.js
var require_powerbi_report_authoring = __commonJS({
  "node_modules/powerbi-report-authoring/dist/powerbi-report-authoring.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_powerbi()) : "function" == typeof define && define.amd ? define(["powerbi-client"], t) : "object" == typeof exports ? exports["powerbi-report-authoring"] = t(require_powerbi()) : e["powerbi-report-authoring"] = t(e["powerbi-client"]);
    }(self, (e) => (() => {
      var t = {
        913: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.Config = void 0;
          var r2 = function() {
            function e3() {
            }
            return e3.version = "2.0.0", e3;
          }();
          t2.Config = r2;
        },
        758: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.Errors = void 0;
          var r2 = function() {
            function e3() {
            }
            return e3.PowerBIClientIsNotInitialized = "powerbi-client module is not initialized. Please import powerbi-client script before importing powerbi-report-authoring.", e3;
          }();
          t2.Errors = r2;
        },
        733: (e2, t2, r2) => {
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.extensions = void 0;
          var i2 = r2(856), o2 = r2(230), n = r2(379);
          t2.extensions = [new o2.ReportExtensions(), new i2.PageExtensions(), new n.VisualExtensions()];
        },
        856: (e2, t2, r2) => {
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.PageExtensions = void 0;
          var i2 = r2(719), o2 = r2(913), n = r2(758), s = function() {
            function e3() {
            }
            return e3.post = function(t3, r3, i3) {
              var n2 = e3.hpm(t3), s2 = e3.uid(t3), u = e3.contentWindow(t3), a = o2.Config.version;
              return n2.post(r3, i3, {
                uid: s2,
                "x-report-authoring-sdk-version": a
              }, u).then(function(e4) {
                return e4.body;
              }, function(e4) {
                throw e4.body;
              });
            }, e3.contentWindow = function(e4) {
              return e4.report.iframe.contentWindow;
            }, e3.uid = function(e4) {
              return e4.report.config.uniqueId;
            }, e3.hpm = function(e4) {
              return e4.report.service.hpm;
            }, e3.prototype.initialize = function() {
              null != i2.Page ? (i2.Page.prototype.createVisual = function(t3, r3, o3) {
                var n2 = this, s2 = {
                  visualType: t3,
                  layout: r3,
                  autoFocus: o3
                };
                return e3.post(this, "/report/pages/" + this.name + "/createVisual", s2).then(function(e4) {
                  var t4 = e4.visual;
                  return {
                    visual: new i2.VisualDescriptor(n2, t4.name, t4.title, t4.type, t4.layout)
                  };
                }, function(e4) {
                  throw e4;
                });
              }, i2.Page.prototype.deleteVisual = function(t3) {
                return e3.post(this, "/report/pages/" + this.name + "/deleteVisual", {
                  visualName: t3
                });
              }) : console.error(n.Errors.PowerBIClientIsNotInitialized);
            }, e3;
          }();
          t2.PageExtensions = s;
        },
        230: (e2, t2, r2) => {
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.ReportExtensions = void 0;
          var i2 = r2(719), o2 = r2(913), n = r2(758), s = function() {
            function e3() {
            }
            return e3.get = function(t3, r3) {
              var i3 = e3.hpm(t3), n2 = e3.uid(t3), s2 = e3.contentWindow(t3), u = o2.Config.version;
              return i3.get(r3, {
                uid: n2,
                "x-report-authoring-sdk-version": u
              }, s2).then(function(e4) {
                return e4.body;
              }, function(e4) {
                throw e4.body;
              });
            }, e3.contentWindow = function(e4) {
              return e4.iframe.contentWindow;
            }, e3.uid = function(e4) {
              return e4.config.uniqueId;
            }, e3.hpm = function(e4) {
              return e4.service.hpm;
            }, e3.prototype.initialize = function() {
              null != i2.Report ? (i2.Report.prototype.getVisualCapabilities = function(t3) {
                if (!t3) throw {
                  message: "visualType parameter is missing"
                };
                return e3.get(this, "/report/visuals/types/" + t3 + "/capabilities");
              }, i2.Report.prototype.getAvailableVisualTypes = function() {
                return e3.get(this, "/report/availableVisualTypes");
              }) : console.error(n.Errors.PowerBIClientIsNotInitialized);
            }, e3;
          }();
          t2.ReportExtensions = s;
        },
        379: (e2, t2, r2) => {
          Object.defineProperty(t2, "__esModule", {
            value: true
          }), t2.VisualExtensions = void 0;
          var i2 = r2(719), o2 = r2(913), n = r2(758), s = function() {
            function e3() {
            }
            return e3.delete = function(t3, r3, i3) {
              return e3.sendRequestWithBody(t3, "delete", r3, i3);
            }, e3.post = function(t3, r3, i3) {
              return e3.sendRequestWithBody(t3, "post", r3, i3);
            }, e3.put = function(t3, r3, i3) {
              return e3.sendRequestWithBody(t3, "put", r3, i3);
            }, e3.sendRequestWithBody = function(t3, r3, i3, n2) {
              var s2 = e3.hpm(t3), u = e3.uid(t3), a = e3.contentWindow(t3), p = o2.Config.version;
              return s2[r3](i3, n2, {
                uid: u,
                "x-report-authoring-sdk-version": p
              }, a).then(function(e4) {
                return e4.body;
              }, function(e4) {
                throw e4.body;
              });
            }, e3.get = function(t3, r3) {
              var i3 = e3.hpm(t3), n2 = e3.uid(t3), s2 = e3.contentWindow(t3), u = o2.Config.version;
              return i3.get(r3, {
                uid: n2,
                "x-report-authoring-sdk-version": u
              }, s2).then(function(e4) {
                return e4.body;
              }, function(e4) {
                throw e4.body;
              });
            }, e3.contentWindow = function(e4) {
              return e4.page.report.iframe.contentWindow;
            }, e3.uid = function(e4) {
              return e4.page.report.config.uniqueId;
            }, e3.hpm = function(e4) {
              return e4.page.report.service.hpm;
            }, e3.prototype.initialize = function() {
              null != i2.VisualDescriptor ? (i2.VisualDescriptor.prototype.changeType = function(t3) {
                return e3.post(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/changeType", {
                  visualType: t3
                });
              }, i2.VisualDescriptor.prototype.getCapabilities = function() {
                return e3.get(this, "/report/visuals/types/" + this.type + "/capabilities");
              }, i2.VisualDescriptor.prototype.getDataFieldDisplayName = function(t3, r3) {
                return e3.get(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/dataroles/" + t3 + "/fields/" + r3 + "/displayName");
              }, i2.VisualDescriptor.prototype.setDataFieldDisplayName = function(t3, r3, i3) {
                return e3.put(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/dataroles/" + t3 + "/fields/" + r3 + "/displayName", {
                  newDisplayName: i3
                });
              }, i2.VisualDescriptor.prototype.addDataField = function(t3, r3, i3) {
                return e3.post(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/dataroles/" + t3 + "/fields/" + i3, r3);
              }, i2.VisualDescriptor.prototype.getDataFields = function(t3) {
                return e3.get(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/dataroles/" + t3 + "/fields");
              }, i2.VisualDescriptor.prototype.removeDataField = function(t3, r3) {
                var i3 = "/report/pages/" + this.page.name + "/visuals/" + this.name + "/dataroles/" + t3 + "/fields/" + r3;
                return e3.delete(this, i3, r3);
              }, i2.VisualDescriptor.prototype.getProperty = function(t3) {
                return e3.post(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/property", t3);
              }, i2.VisualDescriptor.prototype.setProperty = function(t3, r3) {
                return e3.put(this, "/report/pages/" + this.page.name + "/visuals/" + this.name + "/property", {
                  selector: t3,
                  value: r3
                });
              }, i2.VisualDescriptor.prototype.resetProperty = function(e4) {
                return this.setProperty(e4, {
                  schema: "http://powerbi.com/product/schema#default",
                  value: {}
                });
              }) : console.error(n.Errors.PowerBIClientIsNotInitialized);
            }, e3;
          }();
          t2.VisualExtensions = s;
        },
        719: (t2) => {
          "use strict";
          t2.exports = e;
        }
      }, r = {};
      function i(e2) {
        var o2 = r[e2];
        if (void 0 !== o2) return o2.exports;
        var n = r[e2] = {
          exports: {}
        };
        return t[e2](n, n.exports, i), n.exports;
      }
      var o = {};
      return (() => {
        var e2 = o;
        Object.defineProperty(e2, "__esModule", {
          value: true
        }), e2.startAuthoring = void 0;
        var t2 = i(733);
        function r2() {
          t2.extensions.forEach(function(e3) {
            e3.initialize();
          });
        }
        e2.startAuthoring = r2, r2();
      })(), o;
    })());
  }
});
export default require_powerbi_report_authoring();
/*! Bundled license information:

powerbi-report-authoring/dist/powerbi-report-authoring.js:
  (*! For license information please see powerbi-report-authoring.js.LICENSE.txt *)
*/
//# sourceMappingURL=powerbi-report-authoring.js.map
