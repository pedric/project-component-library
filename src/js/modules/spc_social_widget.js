export default class Spc_social_widget {
    constructor(element) {

    	var self = this
    	this.element = element
    	this.btn = element.firstElementChild
    	this.menu = element.lastElementChild
    	
    	this.btn.addEventListener('click', function() {
    		self.toggleMenu()
    	})

    	this.hideMenuOnLoad()
    }

    hideMenuOnLoad() {
    	this.menu.style.opacity = 0
    	this.menu.style.display = "none"
    }

    toggleMenu() {

    	if(this.menu.style.opacity == 0) {
    		this.menu.style.opacity = 1
    		this.menu.style.display = "block"
    	} else {
    		this.menu.style.opacity = 0
  	  	this.menu.style.display = "none"
    	}
    	
    	console.log('Hit the button!')
    }
}
