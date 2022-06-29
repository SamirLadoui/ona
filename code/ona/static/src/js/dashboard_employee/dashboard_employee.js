odoo.define("ona.dashboard_employee", function (require) {
  "use strict";

  var AbstractAction = require("web.AbstractAction");
  // var ajax = require("web.ajax");
  var core = require("web.core");
  var session = require("web.session");
  // var QWeb = core.qweb;
  // var rpc = require("web.rpc");
  // var WebClient = require("web.WebClient");
  var DashboardEmployee = AbstractAction.extend({
    template: "dashboard_employee_template",
    jsLibs: [
      // "/web/static/lib/Chart/Chart.js",
      "/ona/static/src/js/dashboard_employee/lib/app.bundle.js",
    ],
    assetsLibs: ["dashboard_employee_template"],
    init: function (parent, context) {
      this._super(parent, context);
    },
    start: function () {
      // var widget = this;
      var lang = session.user_context.lang;
      $("#app").ready(function () {
        var dashboard = dashboardEmployee.new(lang, "#app", {
          // ajax,
          core,
          // rpc,
          // widget,
          // session,
        });
        // dashboard.unmount();
        dashboard.render();
      });
    },
  });

  core.action_registry.add("DashboardEmployee", DashboardEmployee);

  return DashboardEmployee;
});
