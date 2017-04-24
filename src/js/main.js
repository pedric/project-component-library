import './modules'

let setSiteTopMargin = function() {
	let headingHeight = document.getElementById('spc_fullwidth_heading').offsetHeight
	let heroHeight = document.getElementById('spc_hero_article').offsetHeight
	let menuHeight = document.getElementsByClassName('spc_inline_menu')[0].offsetHeight
	let heroTopMargin = window.innerHeight - (headingHeight + heroHeight + menuHeight)
	
	if (heroTopMargin <= 0) {
		heroTopMargin = window.innerHeight / 100
	}

	document.getElementsByTagName('div')[0].style.marginTop = heroTopMargin + 'px'
}

/* Init */
setSiteTopMargin()
// window.addEventListener('resize', setSiteTopMargin, false)

console.log(`main.js has loaded!`)
