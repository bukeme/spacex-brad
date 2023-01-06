const btn = document.querySelector('#menu-btn')
const overlay = document.querySelector('#overlay')
const menu = document.querySelector('#mobile-menu')

btn.addEventListener('click', function() {
	this.classList.toggle('open')
	overlay.classList.toggle('overlay-show')
	document.body.classList.toggle('stop-scrolling')
	menu.classList.toggle('show-menu')
})