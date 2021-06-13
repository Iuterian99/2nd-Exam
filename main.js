const elHumbergerBtn = document.querySelector('.hamburger-btn')
const elHeader = document.querySelector('.site-header')

elHumbergerBtn.addEventListener('click', function () {
	elHeader.classList.toggle('header--adaptive')
})
