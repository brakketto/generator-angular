angular.module('<%= scriptAppName %>.development', [])
  .constant('CONFIG', {

    /**CORDOVA
     * onDevice : is deployed or debug?
     * */
    isCordovaApp : !!window.cordova
  });
  
  
  angular.module('<%= scriptAppName %>.production', [])
  .constant('CONFIG', {

    /**CORDOVA
     * onDevice : is deployed or debug?
     * */
    isCordovaApp : !!window.cordova
  });