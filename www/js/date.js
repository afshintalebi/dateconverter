/**
 * 
 * Gregorian & Jalali (Hijri_Shamsi,Solar) date converter Functions
 * Copyright(C)2015 JDF.SCR.IR : [ http://jdf.scr.ir/jdf ] version 2.60
 * -------------------------------------------------------------------- 
 * 1461 = 365*4 + 4/4 & 146097 = 365*400 + 400/4 - 400/100 + 400/400 12053 = 365*33 +
 * 32/4 & 36524 = 365*100 + 100/4 - 100/100 * JavaScript Convertor from and to
 * Gregorian and Ghamari (Islami) Functions version: 1.1 _ Edit:
 * http://123.scr.ir
 */

var appDate = {
//        names of week for Jalali date
        sh_week : [ "يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه","شنبه" ],
//        names of week for Gregorian date
        g_week : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday" ],
//        names of week for Ghamari date
	gh_week : [ "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة","السبت" ],
        
//        names of month for Jalali date
        sh_month : [ "-", "فروردين", "ارديبهشت", "خرداد", "تير", "مرداد","شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند" ],
//        names of month for Gregorian date
        g_month : [ "", "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ],
//        names of month for Ghamari date
	gh_month : [ "-", "محرّم", "صفر", "ربيع الأول", "ربيع الثانى","جمادى الأول", "جمادى الثاني", "رجب", "شعبان", "رمضان","شوّال", "ذو القعدة", "ذو الحجة" ],


	/**
	 * convert Gregorian date to Jalali date
	 * 
	 * @param gy
	 * @param gm
	 * @param gd
	 * @returns {Array}
	 */
	gregorianToJalali : function(gy, gm, gd) {
                gy=parseInt(gy);
                gm=parseInt(gm);
                gd=parseInt(gd);
		g_d_m = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ];
		jy = (gy <= 1600) ? 0 : 979;
		gy -= (gy <= 1600) ? 621 : 1600;
		gy2 = (gm > 2) ? (gy + 1) : gy;
		days = (365 * gy) + (parseInt((gy2 + 3) / 4))
				- (parseInt((gy2 + 99) / 100)) + (parseInt((gy2 + 399) / 400))
				- 80 + gd + g_d_m[gm - 1];
		jy += 33 * (parseInt(days / 12053));
		days %= 12053;
		jy += 4 * (parseInt(days / 1461));
		days %= 1461;
		jy += parseInt((days - 1) / 365);
		if (days > 365)
			days = (days - 1) % 365;
		jm = (days < 186) ? 1 + parseInt(days / 31)
				: 7 + parseInt((days - 186) / 30);
		jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
		return [ jy, jm, jd ];
	},
	/**
	 * convert Jalali date to Gregorian date
	 * 
	 * @param jy
	 * @param jm
	 * @param jd
	 * @returns {Array}
	 */
	jalaliToGregorian : function(jy, jm, jd) {
            jy=parseInt(jy);
            jm=parseInt(jm);
            jd=parseInt(jd);
            gy = (jy <= 979) ? 621 : 1600;
            jy -= (jy <= 979) ? 0 : 979;
            days = (365 * jy) + ((parseInt(jy / 33)) * 8)
                            + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd
                            + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
            gy += 400 * (parseInt(days / 146097));
            days %= 146097;
            if (days > 36524) {
                    gy += 100 * (parseInt(--days / 36524));
                    days %= 36524;
                    if (days >= 365)
                            days++;
            }
            gy += 4 * (parseInt((days) / 1461));
            days %= 1461;
            gy += parseInt((days - 1) / 365);
            if (days > 365)
                    days = (days - 1) % 365;
            gd = days + 1;
            sal_a = [ 0, 31,
                            ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28,
                            31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
            for (gm = 0; gm < 13; gm++) {
                    v = sal_a[gm];
                    if (gd <= v)
                            break;
                    gd -= v;
            }
            return [ gy, gm, gd ];
	},
	/**
	 * convert Gregorian date to Ghamari date
	 * 
	 * @param year
	 * @param month
	 * @param day
	 * @returns {Array}
	 */
	gregorianToGhamari : function(year, month, day) {
            year=parseInt(year);
            month=parseInt(month);
            day=parseInt(day);
            if (year > 1582 || (year == 1581 && month > 9 && day > 14)) {
                    int1 = parseInt((month - 14) / 12);
                    jd = parseInt((1461 * (year + 4800 + int1)) / 4)
                                    + parseInt((367 * (month - 2 - (12 * (int1)))) / 12)
                                    - parseInt((3 * (parseInt((year + 4900 + int1) / 100))) / 4)
                                    + day - 32075;
            } else {
                    jd = (367 * year)
                                    - parseInt((7 * (year + 5001 + parseInt((month - 9) / 7))) / 4)
                                    + parseInt((275 * month) / 9) + day + 1729777;
            }
            l = jd - 1948440 + 10632;
            n = parseInt((l - 1) / 10631);
            l = l - 10631 * n + 354;
            j = ((parseInt((10985 - l) / 5316)) * (parseInt((50 * l) / 17719)))
                            + ((parseInt(l / 5670)) * (parseInt((43 * l) / 15238)));
            l = l - (parseInt((30 - j) / 15)) * (parseInt((17719 * j) / 50))
                            - (parseInt(j / 16)) * (parseInt((15238 * j) / 43)) + 29;
            month = parseInt((24 * l) / 709);
            day = l - parseInt((709 * month) / 24);
            year = (30 * n) + j - 30;
            return [ year, month, day ];
	},
	/**
	 * convert Ghamari date to Gregorian date
	 * 
	 * @param year
	 * @param month
	 * @param day
	 * @returns {Array}
	 */
	ghamariToGregorian : function(year, month, day) {
            year=parseInt(year);
            month=parseInt(month);
            day=parseInt(day);
            jd = parseInt(((11 * year) + 3) / 30) + (354 * year) + (30 * month)
                            - parseInt((month - 1) / 2) + day + 1948440 - 385;
            if (jd > 2299160) {
                    l = jd + 68569;
                    n = parseInt((4 * l) / 146097);
                    l = l - parseInt((146097 * n + 3) / 4);
                    i = parseInt((4000 * (l + 1)) / 1461001);
                    l = l - parseInt((1461 * i) / 4) + 31;
                    j = parseInt((80 * l) / 2447);
                    day = l - parseInt((2447 * j) / 80);
                    l = parseInt(j / 11);
                    month = j + 2 - (12 * l);
                    year = (100 * (n - 49)) + i + l;
            } else {
                    j = jd + 1402;
                    k = parseInt((j - 1) / 1461);
                    l = j - (1461 * k);
                    n = parseInt((l - 1) / 365) - parseInt(l / 1461);
                    i = l - (365 * n) + 30;
                    j = parseInt((80 * i) / 2447);
                    day = i - parseInt((2447 * j) / 80);
                    i = parseInt(j / 11);
                    month = j + 2 - (12 * i);
                    year = (4 * k) + n + i - 4716;
            }
            return [ year, month, day ];
	},
	/**
	 * retrun array of object that contain dates in all type of calenders
	 */
	allDate : function() {
//		make Date object and get current date
		d = new Date();
		g_y = d.getFullYear();
		g_m = d.getMonth() + 1;
		g_d = d.getDate();
		g_day = d.getDay();
		
//		get day's name of week in Jalali date
		sh_week_day_name = this.sh_week[g_day];
//		get day's name of week in Gregorian date
		g_week_day_name = this.g_week[g_day];
//		get day's name of week in Ghamari date
		gh_week_day_name = this.gh_week[g_day];
		
//		get name of month in Jalali date
		shamsi = this.gregorianToJalali(g_y, g_m, g_d);
		sh_month_name = this.sh_month[shamsi[1]];
//		get name of month in Gregorian date
		g_month_name = this.g_month[g_m];
//		get name of month in Ghamari date
		ghamari = this.gregorianToGhamari(g_y, g_m, g_d);
		gh_month_name = this.gh_month[ghamari[1]];
		
//		get time	
		H = d.getHours();
		H = (H < 10) ? "0" + H : H;
		i = d.getMinutes();
		i = (i < 10) ? "0" + i : i;
		s = d.getSeconds();
		s = (s < 10) ? "0" + s : s;
		
//		make object based of all dates
		return {
                    'jalali':{
                        'year':shamsi[0],'month':shamsi[1],'day':shamsi[2],
                        'weekDayName':sh_week_day_name,'monthName':sh_month_name
                    },
                    'gregorian':{
                        'year':g_y,'month':g_m,'day':g_d,
                        'weekDayName':g_week_day_name,'monthName':g_month_name
                    },
                    'ghamari':{
                        'year':ghamari[0],'month':ghamari[1],'day':ghamari[2],
                        'weekDayName':gh_week_day_name,'monthName':gh_month_name
                    },
                    'time':{
                        'hour':H,'minute':i,'second':s
                    }
		};
		
	},
        /**
         * check gregorian year is leap year or not
         * @param {integer} year 
         */
        isGregorianLeapYear : function (year)
        {
            if ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) 
                return true;
            else 
                return false;
        },
        /**
         * check jalali year is leap year or not
         * @param {integer} year 
         */
        isJalaliLeapYear : function (year)
        {
            var ary = new Array(1, 5, 9, 13, 17, 22, 26, 30);
            var b = year % 33;
            if (ary.indexOf(b) > -1)
                return true;
            return false;
        },
        /**
         * 
         * @param {Number} month
         * @param {String} type
         * @returns {String}
         */
        getMonthName : function (month,type) {
            var name='';
            switch (type) {
                case 'jalali' :
                    name=this.sh_month[month] !== 'undefined' ? this.sh_month[month] : '';
                    break;
                case 'gregorian' :
                    name=this.g_month[month] !== 'undefined' ? this.g_month[month] : '';
                    break;
                case 'ghamari' :
                    name=this.gh_month[month] !== 'undefined' ? this.gh_month[month] : '';
                    break;
            }
            return name;
        },
        /**
         * 
         * @param {Number} year
         * @param {Number} month
         * @param {String} type
         * @returns Number
         */
        getMonthLength : function (year, month,type) {
            var monthStart = 0;
            var monthEnd = 0;
            var monthLength = 0;
            year = parseInt(year);
            month = parseInt(month);
            switch (type) {
                case 'jalali' :
                    
                    break;
                case 'gregorian' :
                    var monthStart = new Date(year, month, 1);
                    var monthEnd = new Date(year, month + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
                    break;
                case 'ghamari' :
                    
                    break;
            }
            return parseInt(monthLength);
            
        }
      
};