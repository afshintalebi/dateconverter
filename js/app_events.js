/**
 * Call when body is loaded
 * @returns {undefined}
 */
function onBodyLoad() {
    document.getElementById('loading').remove();
    document.getElementById('body').style.display='block';
    document.addEventListener("deviceready", onDeviceReady,false);
}
/**
 * Call when device is ready
 * @returns {undefined}
 */
function onDeviceReady() {
    
}
/**
 * Onsen UI event fired on loading page 
 */
document.addEventListener("pageinit", function(event) {
//  if (event.target.id == "homePage") {
//      if(appDate != 'undefined') {
//        var dateInfo=appDate.allDate();
//        document.getElementById("weekDay").innerHTML = dateInfo.jalali.weekDayName;
//        document.getElementById("currentHijriDate").innerHTML = dateInfo.jalali.day+' '+dateInfo.jalali.monthName+' '+dateInfo.jalali.year;
//        document.getElementById("currentGhamariDate").innerHTML = dateInfo.ghamari.day+' '+dateInfo.ghamari.monthName+' '+dateInfo.ghamari.year;
//        document.getElementById("currentGregorianDate").innerHTML = dateInfo.gregorian.monthName+' '+dateInfo.gregorian.day+', '+dateInfo.gregorian.year;
//      }
//  }
}, false);