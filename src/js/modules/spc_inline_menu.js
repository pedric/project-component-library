export default class Spc_inline_menu {
  constructor(element) {

  	var that = this
  	this.menu = element.getElementsByClassName('toggleMenu')

		let setListItemWidth = function() {
			let listItems = element.getElementsByClassName('menuItem')   
			
			let itemWidth = 100

			let responsiveBreakingPoint = 1024

			if (window.innerWidth > responsiveBreakingPoint) {
				itemWidth = itemWidth / listItems.length
			}

			for (let i = 0; i < listItems.length; i++) {
				listItems[i].style.width = itemWidth + '%'
			}
		}

		let toggleMenu = function() {
			if (that.menu[0].style.display == 'none') {
				that.menu[0].style.display = 'block'
				that.menu[0].style.height = window.innerHeight + 'px'
			} else {
				that.menu[0].style.height = 0 + 'px'
				that.menu[0].style.display = 'none'
			}
		}

		/* Init */
  	setListItemWidth()
  	window.addEventListener('resize', setListItemWidth)
  	let menuButton = element.getElementsByClassName('menuButton')
	  menuButton[0].addEventListener('click', toggleMenu)
  
  }
}
