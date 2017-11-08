"use strict";

var Testing = {
    clickedList: [],
    //Added "pushIfDoesntExist" function to avoid extending array.prototype
    pushIfDoesntExist: function (arr, item) {
        if (arr.indexOf(item) === -1) {
            arr.push(item);
            return true;
        }
        return false;
    },
    applyListeners: function () {
        //converting HTML collection into an Array
        var nodes = Array.from(document.getElementsByTagName("li"));
        var self = this;
        //Updated the following block of code for readability and performance               
        nodes.forEach(function (node) {
            node.addEventListener("click", function () {
                self.checkItemExists(self, this.textContent);
            }, false);
        });

    },
    //checks if an element exists in the array and display data
    checkItemExists: function (testObj, arrElem) {
        testObj.pushIfDoesntExist(this.clickedList, arrElem);
        testObj.displayData();
    },
    displayData: function () {
        var textBox = document.getElementById("clickedElements");
        textBox.textContent = this.clickedList.join(", ");
    }
};
Testing.applyListeners();