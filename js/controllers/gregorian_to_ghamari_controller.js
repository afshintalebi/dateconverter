app.controller('gregorianToGhamariCtrl', function($scope,dateConvertor) {
    /**
     * validate date
     * @returns {undefined}
     */
    $scope.allValidation = function () {
        $scope.validateGregorianYear();
        $scope.validateGregorianMonth();
        $scope.validateGregorianDay();
    };
    /**
     * convert date
     * @returns {undefined}
     */
    $scope.convert = function () {
        $scope.allValidation();
        if(!$scope.greToGhFrm.$invalid) {
//            convert to ghamari date
            var date=dateConvertor.gregorianToGhamari($scope.fromGreToGhYear,$scope.fromGreToGhMonth,$scope.fromGreToGhDay);
//            showing converted date
            $scope.setConvertedDate(date[2]+' '+dateConvertor.getMonthName(date[1],'ghamari')+' '+date[0]);
        }
    };
    /**
     * validate gregorian year
     * @returns {undefined}
     */
    $scope.validateGregorianYear = function() {
        var result=true;
        var yearValue=$scope.fromGreToGhYear;
        var itemInvalid=false;
        var formInvalid=false;
        if(!yearValue) {
            $scope.fromGreToGhYearMessage='سال را وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
            result=false;
        }
        if(yearValue <= 0) {
            $scope.fromGreToGhYearMessage='سال را صحیح وارد نمائید';
            itemInvalid=true;
            formInvalid=true;
        }
        $scope.greToGhFrm.fromGreToGhYear.$invalid=itemInvalid;
        $scope.greToGhFrm.$invalid=formInvalid;
    };
    /**
     * validate gregorian moth
     * @returns {undefined}
     */
    $scope.validateGregorianMonth = function () {
        if(!$scope.greToGhFrm.fromGreToGhYear.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var monthValue=$scope.fromGreToGhMonth;
            if(!monthValue) {
                $scope.fromGreToGhMonthMessage='ماه را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result && (monthValue < 1 || monthValue > 12)) {
                $scope.fromGreToGhMonthMessage='ماه باید عددی بین 1 تا 12 باشد';
                itemInvalid=true;
                formInvalid=true;
            }
            $scope.greToGhFrm.fromGreToGhMonth.$invalid=itemInvalid;
            $scope.greToGhFrm.$invalid=formInvalid;
        }
    };
    /**
     * validate gregorian day
     * @returns {undefined}
     */
    $scope.validateGregorianDay = function () {
        if(!$scope.greToGhFrm.fromGreToGhYear.$invalid && !$scope.greToGhFrm.fromGreToGhMonth.$invalid) {
            var result=true;
            var itemInvalid=false;
            var formInvalid=false;
            var yearValue=$scope.fromGreToGhYear;
            var monthValue=$scope.fromGreToGhMonth;
            var dayValue=$scope.fromGreToGhDay;
            
            if(!dayValue) {
                $scope.fromGreToGhDayMessage='روز را وارد نمائید';
                itemInvalid=true;
                formInvalid=true;
                result=false;
            }
            if(result) {
//                var dayResult=true;
                if(dayValue < 1 || dayValue > 31) {
                    $scope.fromGreToGhDayMessage='روز باید عددی بین 1 تا 31 باشد';
                    itemInvalid=true;
                    formInvalid=true;
//                    dayResult=false;
                }
            }
            $scope.greToGhFrm.fromGreToGhDay.$invalid=itemInvalid;
            $scope.greToGhFrm.$invalid=formInvalid;
        }
    };
    /**
     * set value of converted date 
     * @param {string} value
     * @return {undefined}
     */
    $scope.setConvertedDate = function(value) {
        $scope.convertedDate=value;
    };
    /**
     * empty converted date
     * @return {undefined}
     */
    $scope.emptyConvertedDate = function() {
        $scope.convertedDate='';
    };
});