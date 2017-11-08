"use strict";   

var Testing = {        
        clickedList : [],
        pushIfDoesntExist : function (arr, item){    
            if(arr.indexOf(item) === -1) {
                arr.push(item);
                return true;
            }
            return false;
        },
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
            testObj.pushIfDoesntExist(this.clickedList, arrElem);
            testObj.displayData();                    
        },
        displayData: function() {
            var textBox = document.getElementById("clickedElements");
            textBox.textContent = this.clickedList.join(', ');
        }
};
Testing.applyListeners();
