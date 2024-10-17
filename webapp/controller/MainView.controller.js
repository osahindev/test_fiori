sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("maintest.controller.MainView", {
            onInit: function () {
                var dData = {
                    form_no: "1000001",
                    status: "DRAFT",
                    note: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                    info: {
                        projectName: "test",
                        startDate: "Oct 15, 2024",
                        projectTitle: "test project title",
                        projectObjective: "test project objective",
                        assignedPerson: "Test Person 1",
                        bussinessUnit: "Test BU 1",
                        salesTeam: "Test ST 1"
                    },
                    commercial: {
                        customerId: "",
                        customerFullName: "",
                        isNewCustomer: "NEW",
                        brandOwner: "Test Brand Owner",
                        brandNames: "Test, Testt",
                        distributor: "Test D 1",
                        salesType: "Test ST 1",
                        competitor: "Test",
                        targetPrice: 1237,
                        targetCM: 12,
                        typicalOrderSize: 30,
                        orderSize: "Test OS 1",
                        inputRequirements: "Test",
                    },
                    table: [
                        {
                            id: 1,
                            salesPotentialForecast: 2024,
                            salesMeur: 123,
                            volumeT: 10,
                            volumeKSQM: 123,
                            volumePieces: 123.0,
                            costOustMeur: 123,
                        },
                        {
                            id: 2,
                            salesPotentialForecast: 2023,
                            salesMeur: 123,
                            volumeT: 10,
                            volumeKSQM: 123,
                            volumePieces: 123.0,
                            costOustMeur: 123,
                        }
                    ],
                    orderSizes: [
                        {
                            key: "1",
                            name: "Test OS 1",
                        },
                        {
                            key: "2",
                            name: "Test OS 2"
                        }
                    ],
                    salesTypes: [
                        {
                            key: "1",
                            name: "Test ST 1",
                        },
                        {
                            key: "2",
                            name: "Test ST 2"
                        }
                    ],
                    distributors: [
                        {
                            key: "1",
                            name: "Test D 1",
                        },
                        {
                            key: "2",
                            name: "Test D 2"
                        }
                    ],
                    isNewCustomer: [
                        {
                            key: "1",
                            name: "EXISTING",
                        },
                        {
                            key: "2",
                            name: "NEW"
                        }
                    ],
                    customers: [
                        {
                            id: 1,
                            first_name: "Oğuzhan",
                            last_name: "Şahin"
                        }
                    ],
                    persons: [
                        {
                            key: "1",
                            name: "Test Person 1",
                        },
                        {
                            key: "2",
                            name: "Test Person 2",
                        },
                        {
                            key: "3",
                            name: "Test Person 3",
                        }
                    ],
                    bussinessUnits: [
                        {
                            key: "1",
                            name: "Test BU 1",
                        },
                        {
                            key: "2",
                            name: "Test BU 2",
                        },
                        {
                            key: "3",
                            name: "Test BU 3",
                        }
                    ],
                    salesTeams: [
                        {
                            key: "1",
                            name: "Test ST 1",
                        },
                        {
                            key: "2",
                            name: "Test ST 2",
                        },
                        {
                            key: "3",
                            name: "Test ST 3",
                        }
                    ]
                };

                var dModel = new JSONModel(dData);

                this.getView().setModel(dModel, "dm");
            }
        });
    });
