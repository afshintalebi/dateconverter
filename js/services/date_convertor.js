/**
 * @version 0.01
 * @author Afshin Talebi
 * This is a service for convert date based on calenders
 * It is accessible in controllers $dateConvertor
 */
app.service('dateConvertor', function() {
    /**
     * check appDate library is defined or not
     * @returns {Boolean}
     */
    this.isExistDateLibrary = function () {
        var result = typeof appDate === 'undefined' ? false : true;
        if(!result) {
            console.error('appDate library don\'t include to the application');
        }
        return result;
    },
    /**
     * retrun month name based on calender
     * @param {Number} month
     * @param {String} type
     * @returns {String|undefined}
     */
    this.getMonthName = function(month,type) {
        if(this.isExistDateLibrary()) {
            if(!month) {
             console.error('Month elements is empty');
             return;
            }
            if(!type) {
             console.error('Type of calendar is empty');
             return;
            }
            return appDate.getMonthName(month,type);
        }
    }
    /**
     * COnver Jalali date to Gregorian date
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns {Array|undefined}
     */
    this.jalaliToGregorian = function(year,month,day) {
        if(this.isExistDateLibrary()) {
            if(!year || !month || !day) {
             console.error('Date elements is empty');
             return;
            }
            return appDate.jalaliToGregorian(year,month,day);
        }
    }
    /**
     * Convert Gregorian date to Jalali date
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns {Array|undefined}
     */
    this.gregorianToJalali = function (year,month,day) {
        if(this.isExistDateLibrary()) {
            if(!year || !month || !day) {
             console.error('Date elements is empty');
             return;
            }
            var dateObj=new Date(''+year+' '+month+' '+day+'');
            return appDate.gregorianToJalali(dateObj.getFullYear(),(dateObj.getMonth()+1),dateObj.getDate());
        }
    }
    /**
     * Conver Ghamari date to Gregorian date
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns {Array|undefined}
     */
    this.ghamariToGregorian = function (year,month,day) {
        if(this.isExistDateLibrary()) {
            if(!year || !month || !day) {
             console.error('Date elements is empty');
             return;
            }
            return appDate.ghamariToGregorian(year,month,day);
        }
    }
    /**
     * Convert Gregorian date to Ghamari date
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns {Array|undefined}
     */
    this.gregorianToGhamari = function (year,month,day) {
        if(this.isExistDateLibrary()) {
            if(!year || !month || !day) {
             console.error('Date elements is empty');
             return;
            }
            var dateObj=new Date(''+year+' '+month+' '+day+'');
            return appDate.gregorianToGhamari(dateObj.getFullYear(),(dateObj.getMonth()+1),dateObj.getDate());
        }
    }
    /**
     * Conver Jalali date to Ghamari date
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns {Array|undefined}
     */
    this.jalaliToGhamari = function (year,month,day) {
        if(this.isExistDateLibrary()) {
            if(!year || !month || !day) {
             console.error('Date elements is empty');
             return;
            }
            var greDate = appDate.jalaliToGregorian(year,month,day);
            return appDate.gregorianToGhamari(greDate[0],greDate[1],greDate[2]);
        }
    }
    /**
     * Convert Ghamari date to Jalali date
     * @param {Number} year
     * @param {Number} month
     * @param {Number} day
     * @returns {Array|undefined}
     */
    this.ghamariToJalali = function (year,month,day) {
        if(this.isExistDateLibrary()) {
            if(!year || !month || !day) {
             console.error('Date elements is empty');
             return;
            }
            var greDate = appDate.ghamariToGregorian(year,month,day);
            return appDate.gregorianToJalali(greDate[0],greDate[1],greDate[2]);
        }
    }
    /**
     * return all type of calenders
     * @returns {Array|undefined}
     */
    this.allDate = function () {
        if(this.isExistDateLibrary()) {
            return appDate.allDate();
        }
    }
});