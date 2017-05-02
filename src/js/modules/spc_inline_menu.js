export default class Spc_inline_menu {
  constructor(element) {

  	let that = this

  	this.element = element
  	this.menu = element.getElementsByClassName('toggleMenu')[0]
  	let menuButton = element.getElementsByClassName('menuButton')[0]

  	this.setListItemWidth()
  	this.setListItemFontSize()
  	window.addEventListener('resize', function() {
  		that.setListItemWidth()
  	})

	  menuButton.addEventListener('click', function() {
	  	that.toggleMenu()
	  })

	  this.menu.addEventListener('click', function() {
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

	setListItemFontSize() {

		let mainMenuItems = this.element.getElementsByClassName('menuItem')
		let aElements = this.element.getElementsByTagName('a')
		let fontSize = 25 - mainMenuItems.length

		for (let i = 0; i < aElements.length; i++) {
			
				aElements[i].style.fontSize = fontSize + 'px'
			
			if(aElements[i].textContent.length > 9) {

				let smFontSize = fontSize - ((aElements[i].textContent.length) / 3)
				aElements[i].style.fontSize = smFontSize + 'px'
			}
		} 
	}  
}
