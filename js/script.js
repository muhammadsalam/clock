let hours = document.getElementsByClassName('hours');
let minute = document.getElementsByClassName('minute');
let second = document.getElementsByClassName('second');
function date(){
	let date = new Date();
	// Часы
	if (date.getHours().toString().length == 2){
		hours[0].textContent = date.getHours().toString()[0];
		hours[1].textContent = date.getHours().toString()[1];
	}else{
		hours[0].textContent = '0';
		hours[1].textContent = date.getHours().toString()[0];
	}
	// Минуты
	if (date.getMinutes().toString().length == 2){
		minute[0].textContent = date.getMinutes().toString()[0];
		minute[1].textContent = date.getMinutes().toString()[1];
	}else{
		minute[0].textContent = '0';
		minute[1].textContent = date.getMinutes().toString()[0];
	}
	// Секунды
	if (date.getSeconds().toString().length == 2){
		second[0].textContent = date.getSeconds().toString()[0];
		second[1].textContent = date.getSeconds().toString()[1];
	}else{
		second[0].textContent = '0';
		second[1].textContent = date.getSeconds().toString()[0];
	}
}
setInterval(date, 500);