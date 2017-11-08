"use strict";   
Object.defineProperty(Array.prototype, 'pushIfDoesntExist', {
            enumerable: false,  
            value: function(item) {
               //code to check if item exists in the clicked list array
                if(this.indexOf(item) === -1) {
                    this.push(item);
                    return true;
                }
                return false;
               
            }
});
var Testing = {

        
        clickedList : [],        
        applyListeners: function() {
            //converting HTML collection into an Array
            var nodes = Array.from(document.getElementsByTagName("li"));                    
            var self = this;
            //used forEach to replace "for" for readability and performance               
            nodes.forEach(function(node){
                node.addEventListener("click", function() {
                    self.checkItemExists(self, this.textContent);
                }, false);                   
            });                    
            
        },
        //checks if Item exists in the array and display data
        checkItemExists: function(testObj, arrElem){                                   
            testObj.clickedList.pushIfDoesntExist(arrElem);
            testObj.displayData();                    
        },
        displayData: function() {
            var textBox = document.getElementById("clickedElements");
            textBox.textContent = this.clickedList.join(', ');
        }
};
Testing.applyListeners();