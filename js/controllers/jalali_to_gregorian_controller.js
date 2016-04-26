app.controller('hijriToGregorianCrtl', function($scope,dateConvertor) {
    /**
     * Validate date
     * @returns {undefined}
     */
    $scope.allValidation = function () {
        $scope.validateJalaliYear();
        $scope.validateJalaliMonth();
        $scope.validateJalaliDay();
    }
    /**
     * Convert date
     * @returns {undefined}
     */
    $scope.convert = function () {
        $scope.allValidation();
        if(!$scope.shToGreFrm.$invalid) {
            var date=dateConvertor.jalaliToGregorian($scope.fromShToGreYear,$scope.fromShToGreMonth,$scope.fromShToGreDay);
            $scope.setConvertedDate(dateConvertor.getMonthName(date[1],'gregorian')+' '+date[2]+', '+date[0]);
        }
    }
    /**
     * validate jajali year
     * @returns void
     */
    $scope.validateJalaliYear = function() {
        var result=true;
        var yearValue=$scope.fromShToGreYear;
        var itemInvalid=false;
        var formInvalid=false;
        if(!yearValue) {
            $scope.fromShToGreYearMessage='سال را وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(yearValue <= 0) {
            $scope.fromShToGreYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
        }
        /*if(result && isNaN(yearValue)) {
            $scope.fromShToGreYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(result && yearValue.length !== 4) {
            $scope.fromShToGreYearMessage='سال باید چهار رقمی باشد';
            itemInvalid=true;
            formInvalid=true;
        }*/
        $scope.shToGreFrm.fromShToGreYear.$invalid=itemInvalid;
        $scope.shToGreFrm.$invalid=formInvalid;
    };
    /**
     * validate jajali moth
     * @returns void
     */
    $scope.validateJalaliMonth = function () {
        if(!$scope.shToGreFrm.fromShToGreYear.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var monthValue=$scope.fromShToGreMonth;
            if(!monthValue) {
                $scope.fromShToGreMonthMessage='ماه را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
           /* if(result && isNaN(monthValue)) {
                $scope.fromShToGreMonthMessage='ماه را صحیح وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && monthValue.length > 2) {
                $scope.fromShToGreMonthMessage='ماه باید دو رقمی باشد';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }*/
            if(result && (monthValue < 1 || monthValue > 12)) {
                $scope.fromShToGreMonthMessage='ماه باید عددی بین 1 تا 12 باشد';
                itemInvalid=true;
                formInvalid=true;
            }
            $scope.shToGreFrm.fromShToGreMonth.$invalid=itemInvalid;
            $scope.shToGreFrm.$invalid=formInvalid;
        }
    };
    /**
     * validate jajali day
     * @returns void
     */
    $scope.validateJalaliDay = function () {
        if(!$scope.shToGreFrm.fromShToGreYear.$invalid && !$scope.shToGreFrm.fromShToGreMonth.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var yearValue=$scope.fromShToGreYear;
            var monthValue=$scope.fromShToGreMonth;
            var dayValue=$scope.fromShToGreDay;
            
            if(!dayValue) {
                $scope.fromShToGreDayMessage='روز را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            /*if(result && isNaN(dayValue)) {
                $scope.fromShToGreDayMessage='روز را صحیح وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && dayValue.length > 2) {
                $scope.fromShToGreDayMessage='روز باید دو رقمی باشد';
                itemInvalid=true;
                formInvalid=true;
            }*/
            if(result) {
                var dayResult=true;
                if(monthValue >= 1 && monthValue <=6 && (dayValue < 1 || dayValue > 31)) {
                    $scope.fromShToGreDayMessage='روز باید عددی بین 1 تا 31 باشد';
                    dayResult=false;
                } else if(monthValue >= 7 && monthValue <=11 && (dayValue < 1 || dayValue > 30)) {
                    $scope.fromShToGreDayMessage='روز باید عددی بین 1 تا 30 باشد';
                    dayResult=false;
                } else if(monthValue == 12) {
                    var leapYear = typeof appDate !== 'undefined' ? appDate.isJalaliLeapYear(yearValue)  : false;
                    if(leapYear && (dayValue < 1 || dayValue > 30))  {
                        dayResult=false;
                        $scope.fromShToGreDayMessage='روز باید عددی بین 1 تا 30 باشد';
                    } else if(!leapYear && (dayValue < 1 || dayValue > 29))  {
                        dayResult=false;
                        $scope.fromShToGreDayMessage='روز باید عددی بین 1 تا 29 باشد';
                    }
                }
                if(!dayResult) {
                    itemInvalid=true;
                    formInvalid=true;
                }
            }
            $scope.shToGreFrm.fromShToGreDay.$invalid=itemInvalid;
            $scope.shToGreFrm.$invalid=formInvalid;
        }
    };
    /**
     * set value of converted date 
     * @param {type} value
     */
    $scope.setConvertedDate = function(value) {
        $scope.convertedDate=value;
    };
    /**
     * empty converted date
     * {Void}
     */
    $scope.emptyConvertedDate = function() {
        $scope.convertedDate='';
    };
});