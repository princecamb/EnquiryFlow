// sap.ui.define(
//     [
//         "sap/ui/core/mvc/Controller"
//     ],
//     function(BaseController) {
//       "use strict";
  
//       return BaseController.extend("Enquiryworkflow.workflowuimodule.controller.App", {
//         onInit() {
//         }
//       });
//     }
//   );

sap.ui.define(["sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/HTML"], function (MessageToast, JSONModel, BaseController, HTML) {
  "use strict";

  return BaseController.extend(
    "Enquiryworkflow.workflowuimodule.controller.App",
    {
      // Assuming you're within your controller

      onInit: function () {
        // Call the function to check the ID and update attributes
        debugger
        var oUploadSet = this.byId("uploadSet1");
        oUploadSet.setMode("None");
        var oUploadButton = sap.ui.getCore().byId("__component1---App--uploadSet1-uploader-fu_button");
        if (oUploadButton) {
          oUploadButton.setVisible(false); // Hide the button
        }
        
      },

  //     onBeforeRendering: function () {
  //         debugger
         
  //         setTimeout(async function() {
  //             var oView = this.getView();
  //             var oModel = new sap.ui.model.json.JSONModel();
  //             debugger
  //             var oData = oView.oPropagatedProperties.oModels.context.oData;
  //             // var VehicleDetails = oData.vehicle;
  //             // debugger
  //             // console.log(VehicleDetails);
  //             // oModel.setData({Vehicles: VehicleDetails});
  //             // oView.setModel(oModel, "myVehicle");
  //             var baseUrl1 = oData.link;
  //             debugger
  //             const fileurl1 = oData.filelink;
  //             debugger
  //             var salesOrg = oData.SalesOrg;
  //             // var distribution = oData.DistributionChannel;


  //             // Construct the AJAX URL with shid
  //             var baseUrl1 = "https://3c552736trial-dev-mahindra-sales-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/SH";
  //             debugger
  //             var filterUrl = baseUrl1 + `?$filter=sHId eq '${salesOrg}'`;
  //             //var filterUrl1 = baseUrl1 + `?$filter=sHId eq '${distribution}'`;
  //             // const call = await $.ajax({
  //             //   url: filterUrl,
  //             //   method: "GET"});
  //             //   oModel.setData({ SalesOrgDescription: call.value[0].sHDescription });
  //             //   console.log(oModel);
  //             //   oView.setModel(oModel, "SalesModel");

              


  //             $.ajax({
  //               url: filterUrl,
  //               method: "GET",
  //               success: function (oData) {
                    
  //                       // Update the model with the retrieved shdescription
  //                       oModel.setData({ SalesOrgDescription: oData.value[0].sHDescription });
  //                       oView.setModel(oModel, "SalesModel");
        
  //                       // Debugging/logging
  //                       console.log("SH Description:", shDescription);
  //                       console.log(oView);
  //                   } ,
                
              
  //               error: function (jqXHR, textStatus, errorThrown) {
  //                   console.error("Error fetching data: " + textStatus + " " + errorThrown);
  //               },
  //           });

  
  //             // Perform AJAX request to retrieve data
  //             $.ajax({
  //                 url: baseUrl1,
  //                 method: "GET",
  //                 success: function (oData) {
  //                   console.log(oData);
  //                   oModel.setData({Vehicles: oData.value });
  //                   debugger
  //                   oView.setModel(oModel, "myVehicle");
  //                   console.log(oView)
  //                 },
  //                 error: function (jqXHR, textStatus, errorThrown) {
  //                   console.error(
  //                     "Error fetching data: " + textStatus + " " + errorThrown
  //                   );
  //                 },
  //               });
             
  
  //             // Perform AJAX request to retrieve data
  //             $.ajax({
  //                 url: fileurl1,
  //                 method: "GET",
  //                 success: function(oData) {
  //                     console.log("Files", oData);
  //                     var oModel = new JSONModel();
  //                     oModel.setData({ Files: oData.value });
  //                     debugger
  //                     oView.setModel(oModel, "myModel");

  //                 },
  //                 error: function(jqXHR, textStatus, errorThrown) {
  //                     console.error("Error fetching data: " + textStatus + ' ' + errorThrown);
  //                 }
  //             });
  //             const baseUrlComments = oData.commentlink;
  //             debugger
  //             // $.ajax({
  //             //     url: baseUrlComments,
  //             //     method: "GET",
  //             //     success: function(oData) {
  //             //         const formattedComments = oData.value.map(function(oComment) {
  //             //             return `Comment: ${oComment.commentsText}\nCreated At: ${oComment.createdAt}\nCreated By: ${oComment.createdBy}`;
  //             //         }).join("\n\n");
                      
  //             //         console.log(formattedComments);
                      
  //             //         const oCommentModel = new JSONModel({ Comment: formattedComments });
  //             //         oView.setModel(oCommentModel, "commentModel");
  //             //     },
  //             //     error: function(jqXHR, textStatus, errorThrown) {
  //             //         console.error("Error fetching Comments data:", textStatus, errorThrown);
  //             //     }
  //             $.ajax({
  //               url: baseUrlComments,
  //               method: "GET",
  //               success: function(oData) {
  //                   // Regular expression to match comments starting with a 10-digit number
  //                   const regex = /^\d{10}/;
                    
  //                   // Filter out comments that match the criteria
  //                   const filteredComments = oData.value
  //                       .filter(comment => !regex.test(comment.commentsText)) // Exclude comments that start with a 10-digit number
  //                       .map(function(oComment) {
  //                           return `Comment: ${oComment.commentsText}\nCreated At: ${oComment.createdAt}\nCreated By: ${oComment.createdBy}`;
  //                       })
  //                       .join("\n\n");
                    
  //                   // Log filtered comments
  //                   console.log(filteredComments);
    
  //                   // Set filtered comments to the model
  //                   const oCommentModel = new JSONModel({ Comment: filteredComments });
  //                   oView.setModel(oCommentModel, "commentModel");
  //               },
  //               error: function(jqXHR, textStatus, errorThrown) {
  //                   console.error("Error fetching Comments data:", textStatus, errorThrown);
  //               }
  //             });                
  //             debugger
        

  //     }.bind(this), 1000) ;    
      
  // },

  onBeforeRendering: async function () {
    debugger;
  
    setTimeout(function () {
      var oView = this.getView();
      var oModel = new sap.ui.model.json.JSONModel();
      debugger;
      var oData = oView.oPropagatedProperties.oModels.context.oData;
      var salesOrg = oData.SalesOrg;
  
      var baseUrl1 = "https://44f10b5ftrial-dev1-mahindra-sales-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/SH";
      var filterUrl = baseUrl1 + `?$filter=sHId eq '${salesOrg}'`;
  
      $.ajax({
        url: filterUrl,
        method: "GET",
        success: function (oData12) {
          var descri = oData12.value[0].sHDescription;
          oModel.setData({SalesOrgDescription:descri});
          oView.setModel(oModel, "SalesModel");
          debugger
          console.log("SH Description:", descri);
          console.log(oView);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error fetching data: " + textStatus + " " + errorThrown);
        },
      });
    }.bind(this), 1000);

    setTimeout(function () {
      var oView = this.getView();
      var oModel = new sap.ui.model.json.JSONModel();
      debugger;
      var oData = oView.oPropagatedProperties.oModels.context.oData;
      var districhannel = oData.DistributionChannel;
  
      var baseUrl2 = "https://44f10b5ftrial-dev1-mahindra-sales-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/SH";
      var filterUrl1 = baseUrl2 + `?$filter=sHId2 eq '${districhannel}' and sHField2 eq 'Distribution Channel'`;
  
      $.ajax({
        url: filterUrl1,
        method: "GET",
        success: function (oData13) {
          var nutty = oData13.value[0].sHDescription2;
          oModel.setData({Distribution:nutty});
          oView.setModel(oModel, "DistributionModel");
          debugger
          console.log("SH Description:", nutty);
          console.log(oView);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error fetching data: " + textStatus + " " + errorThrown);
        },
      });
    }.bind(this), 1000);

    setTimeout(function () {
      var oView = this.getView();
      var oModel = new sap.ui.model.json.JSONModel();
      debugger;
      var oData = oView.oPropagatedProperties.oModels.context.oData;
      var divi = oData.division;
  
      var baseUrl3 = "https://44f10b5ftrial-dev1-mahindra-sales-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/SH";
      var filterUrl2 = baseUrl3 + `?$filter=sHId2 eq '${divi}' and sHField2 eq 'Division'`;
  
      $.ajax({
        url: filterUrl2,
        method: "GET",
        success: function (oData14) {
          var diving = oData14.value[0].sHDescription2;
          oModel.setData({Divis:diving});
          oView.setModel(oModel, "DivisionModel");
          debugger
          console.log("SH Description:", diving);
          console.log(oView);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error fetching data: " + textStatus + " " + errorThrown);
        },
      });
    }.bind(this), 1000);

    setTimeout(function () {
      var oView = this.getView();
      var oModel = new sap.ui.model.json.JSONModel();
      debugger;
      var oData = oView.oPropagatedProperties.oModels.context.oData;
      var docu = oData.DocumentType;
  
      var baseUrl4 = "https://44f10b5ftrial-dev1-mahindra-sales-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/SH";
      var filterUrl3 = baseUrl4 + `?$filter=sHId eq '${docu}'`;
  
      $.ajax({
        url: filterUrl3,
        method: "GET",
        success: function (oData15) {
          var doctype = oData15.value[0].sHDescription;
          oModel.setData({Documentty:doctype});
          oView.setModel(oModel, "DocumentModel");
          debugger
          console.log("SH Description:", doctype);
          console.log(oView);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error("Error fetching data: " + textStatus + " " + errorThrown);
        },
      });
    }.bind(this), 1000);
  
    // setTimeout(function () {
    //   var oView = this.getView();
    //   var oModel1 = new sap.ui.model.json.JSONModel();
    //   debugger;
    //   var oData1 = oView.oPropagatedProperties.oModels.context.oData;
    //   var baseUrl1 = oData1.link;
  
    //   $.ajax({
    //     url: baseUrl1,
    //     method: "GET",
    //     success: function (oData1) {
    //       console.log(oData1);
    //       oModel1.setData({ Vehicles: oData1.value });
    //       oView.setModel(oModel1, "myVehicle");
    //       console.log(oView);
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //       console.error("Error fetching data: " + textStatus + " " + errorThrown);
    //     },
    //   });
    // }.bind(this), 1000);

    setTimeout(async function () {
      debugger
      var oView = this.getView();
      
      debugger;
      var oData1 = oView.oPropagatedProperties.oModels.context.oData;

      if (!oData1) {
        console.warn("No data available in context.");
        return;
      }

      try {
        // Extract link data
        var baseUrl = JSON.parse(oData1.link);

        // Prepare model for the base link data
        var oModel1 = new sap.ui.model.json.JSONModel();
        oModel1.setData({ Vehicles: baseUrl });
        oView.setModel(oModel1, "myVehicle");

        // If data is in array format, log the delivery lead time
      }
      catch (error) {
        console.error("Error during AJAX requests:", error);
      }
    }.bind(this), 300);
  
    setTimeout(function () {
      var oView = this.getView();
      var oModel2 = new sap.ui.model.json.JSONModel();
      debugger;
  
      var oData2 = oView.oPropagatedProperties.oModels.context.oData;
  
      // Check if filelink exists and is an array
      if (oData2.filelink && Array.isArray(oData2.filelink)) {
          const fileData = oData2.filelink;
  
          console.log(fileData); // Check if fileData contains the expected array
  
          // Set the full array to the model
          oModel2.setData({ Files: fileData });
  
          // Set the model to the view
          oView.setModel(oModel2, "myModel");
  
          console.log("Model set successfully:", oModel2.getData());
      } else {
          console.error("filelink is missing or not an array");
      }
  }.bind(this), 1000);
  
  
    // setTimeout(function () {
    //   var oView = this.getView();
    //   var oModel3 = new sap.ui.model.json.JSONModel();
    //   debugger;
    //   var oData3 = oView.oPropagatedProperties.oModels.context.oData;
    //   const baseUrlComments = oData3.commentlink;
  
    //   $.ajax({
    //     url: baseUrlComments,
    //     method: "GET",
    //     success: function (oData3) {
    //       const regex = /^\d{10}/;
    //       const filteredComments = oData3.value
    //         .filter(comment => !regex.test(comment.commentsText))
    //         .map(function (oComment) {
    //           return `Comment: ${oComment.commentsText}\nCreated At: ${oComment.createdAt}\nCreated By: ${oComment.createdBy}`;
    //         })
    //         .join("\n\n");
  
    //       console.log(filteredComments);
  
    //       const oCommentModel = new sap.ui.model.json.JSONModel({ Comment: filteredComments });
    //       oView.setModel(oCommentModel, "commentModel");
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //       console.error("Error fetching Comments data:", textStatus, errorThrown);
    //     },
    //   });
    // }.bind(this), 1000);


    setTimeout(function () {
      debugger;
      var oView = this.getView();
    
      debugger;
      var oData3 = oView.oPropagatedProperties.oModels.context.oData;
    
      if (!oData3) {
        console.warn("No data available in context.");
        return;
      }
    
      try {
        // Parse the comment link data directly from oData37
        var commentsData = JSON.parse(oData3.commentlink);
    
        // Filter and format the comments data
        const regex = /^\d{10}/; // Regex to filter out unwanted comments
        const filteredComments = commentsData
          .filter(comment => !regex.test(comment.commentsText))
          .map(function (oComment) {
            return `Comment: ${oComment.commentsText}\nCreated At: ${oComment.createdAt}\nCreated By: ${oComment.createdBy}`;
          });
    
        // Combine all comments into a single string
        const commentsText = filteredComments.join("\n\n");
    
        // Prepare the model with the combined comments text
        var oModel3 = new sap.ui.model.json.JSONModel({ Comment: commentsText });
        oView.setModel(oModel3, "commentModel");
    
        console.log("Comments data successfully set in the model:", commentsText);
      } catch (error) {
        console.error("Error processing comment data:", error);
      }
    }.bind(this), 300);
    
    





  },
      
  onOpenPressed: function (oEvent) {
    // Base URL for the OData service
    var baseUrl = "https://44f10b5ftrial-dev1-mahindra-sales-srv.cfapps.us10-001.hana.ondemand.com/odata/v4/my/";
    debugger
    
    
    // Get the current file URL from the event source
    let fileurl = oEvent.getSource().getUrl();
    
    // Regex pattern to match the "Files" part of the URL
    var pattern = /EnquiryFiles.*$/;
    debugger
    var match = fileurl.match(pattern);
    
    if (match) {
        // Construct the new entity URL
        var entityUrl = baseUrl + match[0];
        
        // Set the new URL back to the event source
        oEvent.getSource().setUrl(entityUrl);
    } else {
        console.warn("No match found in the URL pattern.");
    }
},
     onBrowseHistoryPress: function () {
        var oDialog = this.byId("commentHistoryDialog");

        if (!oDialog) {
          this.loadFragment({
            name: "PaymentWorkflow.workflowuiPayment.view.CommentHistoryDialog"
          }).then(function (oDialog) {
            oDialog.open();
            this._attachClickOutsideListener(oDialog);
          }.bind(this));
        } else {
          oDialog.open();
          this._attachClickOutsideListener(oDialog);
        }
      },

      onCloseHistoryDialog: function () {
        var oDialog = this.byId("commentHistoryDialog");
        oDialog.close();
        this._detachClickOutsideListener();
      },

      _attachClickOutsideListener: function (oDialog) {
        var $dialog = oDialog.$(); // Get jQuery reference to dialog DOM element
        var that = this;

        this._outsideClickHandler = function (oEvent) {
          if (!$dialog[0].contains(oEvent.target)) {
            that.onCloseHistoryDialog();
          }
        };

        // Attach event listener for clicks outside the dialog
        $(document).on("mousedown", this._outsideClickHandler);
      },

      _detachClickOutsideListener: function () {
        // Remove the click outside event listener
        if (this._outsideClickHandler) {
          $(document).off("mousedown", this._outsideClickHandler);
          this._outsideClickHandler = null;
        }
      },


      onFilterTypeChange: function (oEvent) {
        // Logic for changing the filter in the timeline based on selection
        var sKey = oEvent.getSource().getSelectedKey();
        var oTimeline = this.byId("commentTimeline");
        oTimeline.setGroupBy(sKey);
      },
      onEscapeHandler: function (oPromise) {
        this.byId("commentHistoryDialog").close();
        oPromise.resolve();
      },

      onCloseHistoryDialog: function () {
        this.byId("commentHistoryDialog").close();
      },
    }
  );
});
