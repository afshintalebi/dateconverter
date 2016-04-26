var app=angular.module('dateConvertor', ['onsen']);

function exitFromApplication() {
    navigator.notification.confirm(
        'مایل به خروج از برنامه می باشید ؟',  // message
        function(buttonIndex){ 
            if(buttonIndex == 1) {
                navigator.app.exitApp();
            }
        },// callback to invoke with index of button pressed
        'خروج',            // title
        ['تائید','انصراف']          // buttonLabels
    );
}