const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function clockFace() {
	var date = new Date();
	console.log(date);
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	console.log(hours + " " + minutes + " " + seconds );

	let hourArmPosition = (hours*360/12) + ((minutes*(360/60))/12);
	let minutesArmPosition = (minutes*360/60) + (seconds*(360/60)/60);
	let secondArmPosition = seconds*(360/60);

	HOURHAND.style.transform = "rotate(" + hourArmPosition+ "deg)" ;
	MINUTEHAND.style.transform = "rotate(" + minutesArmPosition+ "deg)" ;
	SECONDHAND.style.transform = "rotate(" + secondArmPosition+ "deg)" ;
}

var clockRefreshInterval = setInterval(clockFace,1000);