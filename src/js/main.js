import './modules'

document.getElementsByTagName('body')[0].style.transition = 'all 0.5s'

let setSiteTopMargin = function() {
	let headingHeight = document.getElementsByClassName('spc_fullwidth_heading')[0].offsetHeight
	let heroHeight = document.getElementsByClassName('spc_hero_article')[0].offsetHeight
	let menuHeight = document.getElementsByClassName('spc_inline_menu')[0].offsetHeight
	let heroTopMargin = window.innerHeight - (headingHeight + heroHeight + menuHeight)
	
	if (heroTopMargin <= 0) {
		heroTopMargin = window.innerHeight / 100
	}

	if (window.innerWidth < 1024) {
		heroTopMargin = 55
	}

	document.getElementsByTagName('body')[0].style.paddingTop = heroTopMargin + 'px'
	document.getElementsByTagName('body')[0].scrollTop = 0
}

let fadeInOnLoad = function() {
	document.getElementsByTagName('body')[0].style.opacity = '1'
}

/* Init */
setSiteTopMargin()
window.addEventListener('resize', setSiteTopMargin, false)
window.addEventListener('load', fadeInOnLoad, false)

console.log(`main.js has loaded!`)
