app.controller('gregorianToJalaliCrtl', function($scope,dateConvertor) {
    /**
     * validate date 
     * @returns {undefined}
     */
    $scope.allValidation = function () {
        $scope.validateGregorianYear();
        $scope.validateGregorianMonth();
        $scope.validateGregorianDay();
    }
    /**
     * convert date
     * @returns {undefined}
     */
    $scope.convert = function () {
        $scope.allValidation();
        if(!$scope.greToShFrm.$invalid) {
//            convert to jalali date
            var date=dateConvertor.gregorianToJalali($scope.fromGreToShYear,$scope.fromGreToShMonth,$scope.fromGreToShDay);
//            showing converted date
            $scope.setConvertedDate(date[2]+' '+dateConvertor.getMonthName(date[1],'jalali')+' '+date[0]);
        }
    }
    /**
     * validate gregorian year
     * @returns {undefined}
     */
    $scope.validateGregorianYear = function() {
        var result=true;
        var yearValue=$scope.fromGreToShYear;
        var itemInvalid=false;
        var formInvalid=false;
        if(!yearValue) {
            $scope.fromGreToShYearMessage='سال را وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(yearValue <= 0) {
            $scope.fromGreToShYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
        }
        $scope.greToShFrm.fromGreToShYear.$invalid=itemInvalid;
        $scope.greToShFrm.$invalid=formInvalid;
    };
    /**
     * validate gregorian moth
     * @returns {undefined}
     */
    $scope.validateGregorianMonth = function () {
        if(!$scope.greToShFrm.fromGreToShYear.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var monthValue=$scope.fromGreToShMonth;
            if(!monthValue) {
                $scope.fromGreToShMonthMessage='ماه را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && (monthValue < 1 || monthValue > 12)) {
                $scope.fromGreToShMonthMessage='ماه باید عددی بین 1 تا 12 باشد';
                itemInvalid=true;
                formInvalid=true;
            }
            $scope.greToShFrm.fromGreToShMonth.$invalid=itemInvalid;
            $scope.greToShFrm.$invalid=formInvalid;
        }
    };
    /**
     * validate gregorian day
     * @returns {undefined}
     */
    $scope.validateGregorianDay = function () {
        if(!$scope.greToShFrm.fromGreToShYear.$invalid && !$scope.greToShFrm.fromGreToShMonth.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var yearValue=$scope.fromGreToShYear;
            var monthValue=$scope.fromGreToShMonth;
            var dayValue=$scope.fromGreToShDay;
            
            if(!dayValue) {
                $scope.fromGreToShDayMessage='روز را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result) {
//                var dayResult=true;
                if(dayValue < 1 || dayValue > 31) {
                    $scope.fromGreToShDayMessage='روز باید عددی بین 1 تا 31 باشد';
                    itemInvalid=true;
                    formInvalid=true;
//                    dayResult=false;
                }
            }
            $scope.greToShFrm.fromGreToShDay.$invalid=itemInvalid;
            $scope.greToShFrm.$invalid=formInvalid;
        }
    };
    /**
     * 
     * set value of converted date 
     * @param {string} value
     * @returns {undefined}
     */
    $scope.setConvertedDate = function(value) {
        $scope.convertedDate=value;
    };
    /**
     * empty converted date
     * @returns {undefined}
     */
    $scope.emptyConvertedDate = function() {
        $scope.convertedDate='';
    };
});