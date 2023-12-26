// special countdown
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
	let futureDate = new Date("30 July 2023");
	let currentDate = new Date();
	let myDate = futureDate - currentDate;

	let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
							//millisec / mins / sec / hours
	let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
	let min = Math.floor(myDate / 1000 / 60) % 60;
	let sec = Math.floor(myDate / 1000) % 60;


	daysItem.innerHTML = days;
	hoursItem.innerHTML = hours;
	minItem.innerHTML = min;
	secItem.innerHTML = sec;
	
}

countDown()

setInterval(countDown, 1000)


//send message popUp

let popup = document.getElementById("popup");

function openPopup(event){
	event.preventDefault();
	  popup.classList.remove("popup");
	popup.classList.add("open-popup");
}
function closePopup(){
	  popup.classList.add("popup");
	popup.classList.remove("open-popup");
}


// scroll back to top

function scrollTopBack(){
	let scrollTopButton = document.querySelector("#scrollUp");
	window.onscroll = function(){
		var scroll = document.documentElement.scrollTop;
		if(scroll >= 250){
			scrollTopButton.classList.add("scrollActive");
		} else{
			scrollTopButton.classList.remove("scrollActive");
		}
	}
}
scrollTopBack();

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
	a.addEventListener("click", function(){
		navCollapse.classList.remove("show");
	})
})