sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	'sap/ui/core/Fragment'
],
function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("maintest.controller.CommercialView", {
        handleCustomerSelectHelp: function(oEvent) {
            var oView = this.getView();
            this.sInputId = oEvent.getSource().getId();
            console.log("test");

            // create value help dialog
            if (!this._pValueHelpDialog) {
                this._pValueHelpDialog = Fragment.load({
                    id: oView.getId(),
                    name: "maintest.view.fragments.CustomerSelect",
                    controller: this
                }).then(function(oValueHelpDialog){
                    oView.addDependent(oValueHelpDialog);
                    return oValueHelpDialog;
                });
            }
    
            // open value help dialog
            this._pValueHelpDialog.then(function(oValueHelpDialog){
                oValueHelpDialog.open();
            });
        },
        handleSelect: function(oEvent) {
            var oSelectedItem = oEvent.getParameter("selectedItem");

            if (oSelectedItem) {
                var oModel = this.getView().getParent().getModel('dm');

                var customers = oModel.getProperty('/customers');
                
                var customData = oSelectedItem.getCustomData();
                var id = 0;

                customData.forEach(function(oCustomData){
                    if(oCustomData.getKey() === "id") {
                        id = oCustomData.getValue();
                    }
                });

                customers.forEach(function(customer){
                    if(customer.id == id) {
                        oModel.setProperty("/commercial/customerId", customer.id);
                        oModel.setProperty("/commercial/customerFullName", customer.first_name + " " + customer.last_name);
                        oModel.setProperty("/commercial/isNewCustomer", "EXISTING");
                    }
                });
            }
        },
        onInit: function () {

        }
    });
});
