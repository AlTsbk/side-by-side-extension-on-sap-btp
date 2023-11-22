sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("riskmanagementfreestyle.controller.MainView", {
            onInit: function () {
                
            },

            onTableRowPress: function(oEvent){
                this.getView("SimpleForm").bindElement({
                    path:oEvent.getSource().getBindingContextPath() + "/miti"
                  });
            }
        });
    });
