app.controller('homeController', function($scope,dateConvertor) {
    if(appDate != 'undefined') {
         var dateInfo=dateConvertor.allDate();
         $scope.weekDay = dateInfo.jalali.weekDayName;
         $scope.currentHijriDate = dateInfo.jalali.day+' '+dateInfo.jalali.monthName+' '+dateInfo.jalali.year;
         $scope.currentGhamariDate = dateInfo.ghamari.day+' '+dateInfo.ghamari.monthName+' '+dateInfo.ghamari.year;
         $scope.currentGregorianDate = dateInfo.gregorian.monthName+' '+dateInfo.gregorian.day+', '+dateInfo.gregorian.year;
     }
    ons.ready(function() {
        // Hide Cordova splash screen when Onsen UI is loaded completely
        
//        navigator.splashscreen.hide()
    });
    
});