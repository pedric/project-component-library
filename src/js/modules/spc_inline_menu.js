export default class Spc_inline_menu {
  constructor(element) {

  	var that = this

  	this.element = element
  	this.menu = element.getElementsByClassName('toggleMenu')[0]
  	let menuButton = element.getElementsByClassName('menuButton')[0]

  	/* Init */
  	this.setListItemWidth()
  	window.addEventListener('resize', function() {
  		that.setListItemWidth()
  	})

	  menuButton.addEventListener('click', function() {
	  	that.toggleMenu()
	  })
  }

  setListItemWidth() {
			
			let listItems = this.element.getElementsByClassName('menuItem')   
			let itemWidth = 100
			let responsiveBreakingPoint = 1024
			
			if (window.innerWidth > responsiveBreakingPoint) {
				itemWidth = itemWidth / listItems.length
			}

			for (let i = 0; i < listItems.length; i++) {
				listItems[i].style.width = itemWidth + '%'
			}
		}

		toggleMenu() {
			
			if (this.menu.classList.contains('fade-in-out')) {
				this.menu.classList.remove('fade-in-out')
			} else {
				this.menu.classList.add('fade-in-out')
			}
		}  
}
