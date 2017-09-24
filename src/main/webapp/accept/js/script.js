	var dates = $("#from, #to").datepicker({
defaultDate: "+1w",
changeMonth: true,
numberOfMonths: 2,
onSelect: function (selectedDate) {
var option = this.id == "from" ? "minDate" : "maxDate",
instance = $(this).data("datepicker"),
date = $.datepicker.parseDate(
instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
selectedDate, instance.settings);
dates.not(this).datepicker("option", option, date);
}
});
$.datepicker.regional['en'] = {
closeText: 'Close',
prevText: 'Next',
nextText: 'Early',
currentText: 'Today',
monthNames: ['January', 'February', 'March', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'],
monthNamesShort: ['Jan', 'Feb', 'Мар', 'Mar', 'May', 'Jun',
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
dayNamesMin:  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
weekHeader: 'Не',
dateFormat: 'M dd,yy',
firstDay: 1,
isRTL: false,
showMonthAfterYear: false,
yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['en']);