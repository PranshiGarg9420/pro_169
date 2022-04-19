AFRAME.registerComponent("markerhandler", {
    init: async function() {
      this.el.addEventListener("markerFound", () => {
        console.log("marker is found");
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost");
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function() {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderButtton = document.getElementById("order-button");
      var orderSummaryButtton = document.getElementById("order-summary-button");
  
      // Handling Click Events
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://media.istockphoto.com/vectors/hand-drawn-text-support-quote-vector-id1251581856",
          title: "Thanks For Order !",
          text: "Please Visit Again",
          timer: 2000,
          buttons: false
        });
      });
  
      orderSummaryButtton.addEventListener("click", () => {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work In Progress"
        });
      });
    },
  
    handleMarkerLost: function() {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });


