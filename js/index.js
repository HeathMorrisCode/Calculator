"use strict";

var app = new Vue({
	el: "#app",
	data: {
		currentNumber: "",
		previousNumber: "",
		currentOperator: "",
		showingResult: false
	},
	methods: {
		clearTrigger: function clearTrigger(kind) {
			if (kind == 'soft') {
				console.log("Soft Clear");
				this.currentNumber = "";
			} else if (kind == 'hard') {
				console.log("Hard Clear");
				this.currentNumber = "";
				this.previousNumber = "";
				this.currentOperator = "";
			}
		},
		numTrigger: function numTrigger(num) {

			if (this.showingResult) {
				this.clearTrigger('hard');
				this.showingResult = false;
			}

			if (num == '.') {
				if (this.currentNumber.indexOf('.') == -1) {
					this.currentNumber += num.toString();
				}
			} else {
				this.currentNumber += num.toString();
			}
		},
		keyTrigger: function keyTrigger(key) {
			if (!this.currentNumber && !this.previousNumber) {
				return false;
			}

			this.showingResult = false;

			if (!this.currentOperator) {
				this.previousNumber = this.currentNumber;
				this.currentNumber = "";

				this.currentOperator = key;
				console.log("User entered " + key + " operator");
			} else {
				this.eqTrigger();

				this.previousNumber = this.currentNumber;
				this.currentNumber = "";

				this.currentOperator = key;
				console.log("User entered " + key + " operator");
			}
		},
		eqTrigger: function eqTrigger() {
			var button = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

			if (!this.currentNumber) {
				console.log("No current number");
				this.currentNumber = this.previousNumber;
				// console.log("Now current number is "+ this.currentNumber);
				this.previousNumber = "";
				// console.log("Now prev number is "+ this.previousNumber);
				this.currentOperator = "";
			} else {
				switch (this.currentOperator) {
					case "+":
						console.log("adding");
						this.currentNumber = (parseFloat(this.previousNumber) + parseFloat(this.currentNumber)).toString();
						this.currentOperator = "";
						break;
					case "-":
						console.log("subtracting");
						this.currentNumber = (parseFloat(this.previousNumber) - parseFloat(this.currentNumber)).toString();
						this.currentOperator = "";
						break;
					case "÷":
						console.log("dividing");
						this.currentNumber = (parseFloat(this.previousNumber) / parseFloat(this.currentNumber)).toString();
						this.currentOperator = "";
						break;
					case "x":
						console.log("multiplying");
						this.currentNumber = (parseFloat(this.previousNumber) * parseFloat(this.currentNumber)).toString();
						this.currentOperator = "";
						break;
					default:
				}
			}

			if (button) {
				this.showingResult = true;
				console.log("Showing Result");
			}
		}
	}
});