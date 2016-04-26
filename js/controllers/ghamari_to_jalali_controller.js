app.controller('ghamariToJalaliCtrl', function($scope,dateConvertor) {
    /**
     * Validate date
     * @returns {undefined}
     */
    $scope.allValidation = function () {
        $scope.validateGhamariYear();
        $scope.validateGhamariMonth();
        $scope.validateGhamariDay();
    }
    /**
     * Convert date
     * @returns {undefined}
     */
    $scope.convert = function () {
        $scope.allValidation();
        if(!$scope.ghToShFrm.$invalid) {
            var date=dateConvertor.ghamariToJalali($scope.fromGhToShYear,$scope.fromGhToShMonth,$scope.fromGhToShDay);
            $scope.setConvertedDate(date[2]+' '+dateConvertor.getMonthName(date[1],'jalali')+' '+date[0]);
        }
    }
    /**
     * validate gregorian year
     *@returns {undefined}
     */
    $scope.validateGhamariYear = function() {
        var result=true;
        var yearValue=$scope.fromGhToShYear;
        var itemInvalid=false;
        var formInvalid=false;
        if(!yearValue) {
            $scope.fromGhToShYearMessage='سال را وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(yearValue <= 0) {
            $scope.fromGhToShYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
        }
        $scope.ghToShFrm.fromGhToShYear.$invalid=itemInvalid;
        $scope.ghToShFrm.$invalid=formInvalid;
    };
    /**
     * validate gregorian moth
     *@returns {undefined}
     */
    $scope.validateGhamariMonth = function () {
        if(!$scope.ghToShFrm.fromGhToShYear.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var monthValue=$scope.fromGhToShMonth;
            if(!monthValue) {
                $scope.fromGhToShMonthMessage='ماه را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && (monthValue < 1 || monthValue > 12)) {
                $scope.fromGhToShMonthMessage='ماه باید عددی بین 1 تا 12 باشد';
                itemInvalid=true;
                formInvalid=true;
            }
            $scope.ghToShFrm.fromGhToShMonth.$invalid=itemInvalid;
            $scope.ghToShFrm.$invalid=formInvalid;
        }
    };
    /**
     * validate gregorian day
     *@returns {undefined}
     */
    $scope.validateGhamariDay = function () {
        if(!$scope.ghToShFrm.fromGhToShYear.$invalid && !$scope.ghToShFrm.fromGhToShMonth.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var yearValue=$scope.fromGhToShYear;
            var monthValue=$scope.fromGhToShMonth;
            var dayValue=$scope.fromGhToShDay;
            
            if(!dayValue) {
                $scope.fromGhToShDayMessage='روز را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result) {
                var dayResult=true;
                if(dayValue < 1 || dayValue > 31) {
                    $scope.fromGhToShDayMessage='روز باید عددی بین 1 تا 31 باشد';
                    itemInvalid=true;
                    formInvalid=true;
//                    dayResult=false;
                }
            }
            $scope.ghToShFrm.fromGhToShDay.$invalid=itemInvalid;
            $scope.ghToShFrm.$invalid=formInvalid;
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