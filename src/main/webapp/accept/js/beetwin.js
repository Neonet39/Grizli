
/* Функция которая в зависемости от выбора
 периуда на форме, вызовет соответствующую функцию ,которая сгенерирует 
необходимые даты  */ 
function getPeriod() {
	var elem = document.getElementById('sel');
    
    if(elem.value == 'last_qtr'){
    	last_qtr();

    }else

     if(elem.value == 'last_month'){
    	last_month();

    }else

    if(elem.value == 'last_calendar_year'){
    	last_calendar_year();

    } else 

    if(elem.value == 'current_year_to_date'){
    	current_year_to_date();

    } else 

    if(elem.value == 'current_qtr_to_date'){
    	current_qtr_to_date();

    } else

    if(elem.value == 'current_month_to_date'){
    	current_month_to_date();

    } else 
    	clearCalendar();
}

/* Объект для работы с кварталами:
   вычисляет текущий квартал по передавемой дате,
   возвращает предыдущий квратал, 
   отдает диапазон месяцев, в зависимости от передаваемого квартала
 */ 
var qrt = {
	periods: {}, // для ассоциативного соотношение месяца и квартала

    fiilArray : function(){
    	var j = 1;
    	for (var i = 1; i <= 12 ; i++) {  

        	if (i%3==0) {
           		this.periods[(i-1)+''] = j;        
           		j++;

           		if (i==12) break;
        		}else 
            		this.periods[(i-1)+''] = j;           
    	}
  	},


	getCurrentQrt : function(month){  // возвращает текущий квартал
  		if(this.periods['0']==null)
    		this.fiilArray();
		return this.periods[month];
  	},


	getLastQrt : function(month){ // возвращает предыдущий квартал

 		var qr = this.getCurrentQrt(month);
 		var number = (parseInt(qr));
 
 		if (number==1) return '4';
 		else return number-1;
	},


	getBeetwinMothe:function(numberQrt){ // возвращает диапазон месяцев соответствующий кварталу

 		var beetwinMothe = {};
 		var startMothe;
 		var endMothe;

 		var qrt = parseInt(numberQrt);
 
 		if(qrt==1){
   			startMothe='0';
   			endMothe ='2';
 		}else 

 		if(qrt==2) {
   			startMothe='3';
   			endMothe ='5';
		}else 

		if(qrt==3) {
   			startMothe='6';
   			endMothe ='8';
		}else 

		if(qrt==4) {
   			startMothe='9';
   			endMothe ='11';
		}

   	   beetwinMothe['startMothe'] = startMothe;
   	   beetwinMothe['endMothe'] = endMothe;
   	
   	   return beetwinMothe;

	}	

   };


function clearCalendar(){ // чистка дат 
	write('','');
}


function last_qtr(){  // Вернет на форму даты предыдущего квартала

	var date = new Date();
	var month = date.getMonth();
    
    var qtr = qrt.getLastQrt(month);
    var beetwin = qrt.getBeetwinMothe(qtr);
    var year = date.getFullYear();

    var day = getLastDayOfMonth(year,beetwin['endMothe']);

    var startDate = convert(beetwin['startMothe'])+' '+ '01,'+year;
    var endDate = convert(beetwin['endMothe'])+' '+day+','+year;
    write(startDate,endDate);
}


function last_month(){ // Вернет на форму даты прошлого месяца
	var date = new Date();
	var year;
	var month = date.getMonth()-1;

	if(month == 11){
	 year = date.getFullYear()-1;

	}else year = date.getFullYear();


	
	var day = getLastDayOfMonth(year,month);

	var startDate = convert(month)+' '+ '01,'+year;
    var endDate = convert(month)+' '+day+','+year;

    write(startDate,endDate);
}

 
function last_calendar_year(){ // Вернет на форму прошлый календарный год

	var date = new Date();
	var year = date.getFullYear()-1;
	var day = getLastDayOfMonth(year,11);

	var startDate = convert(0)+' '+ '01,'+year;
    var endDate = convert(11)+' '+day+','+year;
    
    write(startDate,endDate);
}


function current_year_to_date(){ // Вернет на форму даты от начала текущего года до настоящего момента
	var date = new Date();

	var year = date.getFullYear();
	var day = date.getDate();
	var month = date.getMonth();

	var startDate = convert(0)+' '+ '01,'+year;
    var endDate = convert(month)+' '+day+','+year;
    
    write(startDate,endDate);
}


function current_qtr_to_date(){ // Вернет на форму даты от начала текущего квартала до настоящего момента
	var date = new Date();
	var month = date.getMonth();
    
    var qtr = qrt.getCurrentQrt(month);
    var beetwin = qrt.getBeetwinMothe(qtr);
    var year = date.getFullYear();

    var day = date.getDate();

    var startDate = convert(beetwin['startMothe'])+' '+ '01,'+year;
    var endDate = convert(month)+' '+day+','+year;
    write(startDate,endDate);
}


function current_month_to_date(){// Вернет на форму даты от начала текущего месяца по настоящий момент
	var date = new Date();

	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();

	var startDate = convert(month)+' '+ '01,'+year;
    var endDate = convert(month)+' '+day+','+year;

    write(startDate,endDate);
}


function getLastDayOfMonth(year, month) {// Отдает количество дней в передоваемом месяце
  var date = new Date(year, month + 1, 0);
  return date.getDate();
}


function convert(month){ // Конвертирует в другой вит циферное представление месяца
 	monthNames = ['Jan', 'Feb', 'Мар', 'Mar', 'May', 'Jun',
	'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return monthNames[month];

 }

 
function write(startDate,endDate){ // Изменяет на форме даты 
 	var from = document.getElementById('from');
    var to = document.getElementById('to');

    from.value = startDate;
    to.value = endDate;
 }

function validate(){ // Проверяет на верность заполнения дат
	var from = document.getElementById('from');
    var to = document.getElementById('to');
    
 	var startDate = parseInt(Date.parse(from.value));
    var endDate = parseInt(Date.parse(to.value));

    if(from.value == ''||to.value == ''){
    	 alert('Fields with dates must be filled in');
    	return false;
    }

    if(startDate > endDate){
    	alert('You have incorrectly set the date');
    	return false;
    }

}
  
