const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hourArmPosition = 20;
let minutesArmPosition = 130;
let secondArmPosition = 267;

HOURHAND.style.transform = "rotate(" + hourArmPosition+ "deg)";
MINUTEHAND.style.transform = "rotate(" + hourArmPosition+ "deg)";
SECONDHAND.style.transform = "rotate(" + hourArmPosition+ "deg)";