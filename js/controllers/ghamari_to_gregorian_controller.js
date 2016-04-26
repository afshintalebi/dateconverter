app.controller('ghamariToGregorianCtrl', function($scope,dateConvertor) {
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
        if(!$scope.ghToGreFrm.$invalid) {
            var date=dateConvertor.ghamariToGregorian($scope.fromGhToGreYear,$scope.fromGhToGreMonth,$scope.fromGhToGreDay);
            $scope.setConvertedDate(dateConvertor.getMonthName(date[1],'gregorian')+' '+date[2]+', '+date[0]);
        }
    }
    /**
     * Validate gregorian year
     * @returns {undefined}
     */
    $scope.validateGhamariYear = function() {
        var result=true;
        var yearValue=$scope.fromGhToGreYear;
        var itemInvalid=false;
        var formInvalid=false;
        if(!yearValue) {
            $scope.fromGhToGreYearMessage='سال را وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(yearValue <= 0) {
            $scope.fromGhToGreYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
        }
        $scope.ghToGreFrm.fromGhToGreYear.$invalid=itemInvalid;
        $scope.ghToGreFrm.$invalid=formInvalid;
    };
    /**
     * validate gregorian moth
     *@returns {undefined}
     */
    $scope.validateGhamariMonth = function () {
        if(!$scope.ghToGreFrm.fromGhToGreYear.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var monthValue=$scope.fromGhToGreMonth;
            if(!monthValue) {
                $scope.fromGhToGreMonthMessage='ماه را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && (monthValue < 1 || monthValue > 12)) {
                $scope.fromGhToGreMonthMessage='ماه باید عددی بین 1 تا 12 باشد';
                itemInvalid=true;
                formInvalid=true;
            }
            $scope.ghToGreFrm.fromGhToGreMonth.$invalid=itemInvalid;
            $scope.ghToGreFrm.$invalid=formInvalid;
        }
    };
    /**
     * validate gregorian day
     *@returns {undefined}
     */
    $scope.validateGhamariDay = function () {
        if(!$scope.ghToGreFrm.fromGhToGreYear.$invalid && !$scope.ghToGreFrm.fromGhToGreMonth.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var yearValue=$scope.fromGhToGreYear;
            var monthValue=$scope.fromGhToGreMonth;
            var dayValue=$scope.fromGhToGreDay;
            
            if(!dayValue) {
                $scope.fromGhToGreDayMessage='روز را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result) {
                var dayResult=true;
                if(dayValue < 1 || dayValue > 31) {
                    $scope.fromGhToGreDayMessage='روز باید عددی بین 1 تا 31 باشد';
                    itemInvalid=true;
                    formInvalid=true;
//                    dayResult=false;
                }
            }
            $scope.ghToGreFrm.fromGhToGreDay.$invalid=itemInvalid;
            $scope.ghToGreFrm.$invalid=formInvalid;
        }
    };
    /**
     * set value of converted date 
     * @param {string} value
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