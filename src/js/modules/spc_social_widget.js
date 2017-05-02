export default class Spc_social_widget {
    constructor(element) {

    	let self = this
    	this.element = element
    	let btn = element.firstElementChild
    	this.menu = element.lastElementChild
    	
    	btn.addEventListener('click', function() {
    		self.toggleMenu()
    	})

        this.menu.addEventListener('click', function() {
            self.toggleMenu()
        })
    }

    toggleMenu() {

    	if(this.menu.classList.contains('fade-in-out')) {
    		this.menu.classList.remove('fade-in-out')
    	} else {
            this.menu.classList.add('fade-in-out')
    	}
    }
}




