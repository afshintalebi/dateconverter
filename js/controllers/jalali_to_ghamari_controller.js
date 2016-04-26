app.controller('jalaliToGhamariCtrl', function($scope,dateConvertor) {
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
        if(!$scope.shToGhFrm.$invalid) {
            var date=dateConvertor.jalaliToGhamari($scope.fromShToGhYear,$scope.fromShToGhMonth,$scope.fromShToGhDay);
            $scope.setConvertedDate(date[2]+' '+dateConvertor.getMonthName(date[1],'ghamari')+' '+date[0]);
        }
    }
    /**
     * validate jajali year
     *@returns {undefined}
     */
    $scope.validateJalaliYear = function() {
        var result=true;
        var yearValue=$scope.fromShToGhYear;
        var itemInvalid=false;
        var formInvalid=false;
        if(!yearValue) {
            $scope.fromShToGhYearMessage='سال را وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(yearValue <= 0) {
            $scope.fromShToGrhYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
        }
        $scope.shToGhFrm.fromShToGhYear.$invalid=itemInvalid;
        $scope.shToGhFrm.$invalid=formInvalid;
    };
    /**
     * validate jajali moth
     *@returns {undefined}
     */
    $scope.validateJalaliMonth = function () {
        if(!$scope.shToGhFrm.fromShToGhYear.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var monthValue=$scope.fromShToGhMonth;
            if(!monthValue) {
                $scope.fromShToGhMonthMessage='ماه را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && (monthValue < 1 || monthValue > 12)) {
                $scope.fromShToGhMonthMessage='ماه باید عددی بین 1 تا 12 باشد';
                itemInvalid=true;
                formInvalid=true;
            }
            $scope.shToGhFrm.fromShToGhMonth.$invalid=itemInvalid;
            $scope.shToGhFrm.$invalid=formInvalid;
        }
    };
    /**
     * validate jajali day
     *@returns {undefined}
     */
    $scope.validateJalaliDay = function () {
        if(!$scope.shToGhFrm.fromShToGhYear.$invalid && !$scope.shToGhFrm.fromShToGhMonth.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var yearValue=$scope.fromShToGhYear;
            var monthValue=$scope.fromShToGhMonth;
            var dayValue=$scope.fromShToGhDay;
            
            if(!dayValue) {
                $scope.fromShToGhDayMessage='روز را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result) {
                var dayResult=true;
                if(monthValue >= 1 && monthValue <=6 && (dayValue < 1 || dayValue > 31)) {
                    $scope.fromShToGhDayMessage='روز باید عددی بین 1 تا 31 باشد';
                    dayResult=false;
                } else if(monthValue >= 7 && monthValue <=11 && (dayValue < 1 || dayValue > 30)) {
                    $scope.fromShToGhDayMessage='روز باید عددی بین 1 تا 30 باشد';
                    dayResult=false;
                } else if(monthValue == 12) {
                    var leapYear = typeof appDate !== 'undefined' ? appDate.isJalaliLeapYear(yearValue)  : false;
                    if(leapYear && (dayValue < 1 || dayValue > 30))  {
                        dayResult=false;
                        $scope.fromShToGhDayMessage='روز باید عددی بین 1 تا 30 باشد';
                    } else if(!leapYear && (dayValue < 1 || dayValue > 29))  {
                        dayResult=false;
                        $scope.fromShToGhDayMessage='روز باید عددی بین 1 تا 29 باشد';
                    }
                }
                if(!dayResult) {
                    itemInvalid=true;
                    formInvalid=true;
                }
            }
            $scope.shToGhFrm.fromShToGhDay.$invalid=itemInvalid;
            $scope.shToGhFrm.$invalid=formInvalid;
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