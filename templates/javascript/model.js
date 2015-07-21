'use strict';

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.model:<%= classedName %>Model
 * @description
 * # <%= classedName %>Model
 * Model of the <%= scriptAppName %>
 */
angular.module('<%= scriptAppName %>')
  .factory('<%= classedName %>Model', function () {
   
   /*OBJECT DEFINITION*/
   
   /**	
     * <%= classedName %>Model Object
     *
     * @param obj
     */
    var <%= classedName %>Model = function (obj) {
      this.data = obj.data
    };
	
	/*CONSTRUCTOR*/
	
	/**
     * Static constructor 
     * @param value
     * @returns {DepartingTrain}
     */
    <%= classedName %>Model.create = function(value){
		return new <%= classedName %>Model({data : value});
	}
	
	/*METHOD*/
	
	/**
     * Object method	 
     * 
     */
	<%= classedName %>Model.prototype.foo = function(){
		console.log(this.data);
	};
	
	
	return <%= classedName %>Model;
	
   
  });

  
  
  