define(["sugar-web/activity/activity"], function (activity) {

	// Manipulate the DOM only when it is ready.
	requirejs(['domReady!'], function (doc) {

		// Initialize the activity.
		activity.setup();
		//Calculate Tip
		function bill_split() {
		  var billAmt = document.getElementById("billamt").value;
		  var numOfPeople = document.getElementById("peopleamt").value;

		  //validate input
		  if (billAmt === "") {
		    alert("Please enter values");
		    return;
		  }
		  //Check to see if this input is empty or less than or equal to 1
		  if (numOfPeople === "" || numOfPeople <= 1) {
		    numOfPeople = 1;
		    document.getElementById("each").style.display = "none";
		  } else {
		    document.getElementById("each").style.display = "block";
		  }

		  //Calculate tip
		  var total = billAmt / numOfPeople;
		  //round to two decimal places
		  total = Math.round(total * 100) / 100;
		  //next line allows us to always have two digits after decimal point
		  total = total.toFixed(2);
		  //Display the tip
		  document.getElementById("totalTip").style.display = "block";
		  document.getElementById("tip").innerHTML = total;

		}

		//Hide the tip amount on load
		document.getElementById("totalTip").style.display = "none";
		document.getElementById("each").style.display = "none";

		//click to call function
		document.getElementById("calculate").onclick = function() {
		  bill_split();

		};
	});

});
