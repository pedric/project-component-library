export default class Spc_hero_article {
    constructor(element) {

    	let that = this
    	let hoverElement = element.firstElementChild.firstElementChild
        this.element = element
        this.thisEl = element.firstElementChild.firstElementChild.lastElementChild

    	this.setArrowSize()
    	window.addEventListener('resize', function() {
    		that.setArrowSize()
    	})

    	hoverElement.addEventListener('mouseover', function() {
    		that.arrowMouseOverEffect()
    	})
        
    	hoverElement.addEventListener('mouseout', function() {
    		that.arrowMouseOutEffect()
    	})
    }

    setArrowSize() {
    	let boxSize = this.element.firstElementChild.firstElementChild.firstElementChild.offsetHeight
    	let borderSize = boxSize / 2

		this.thisEl.style.borderTop = borderSize + 'px solid transparent'
		this.thisEl.style.borderBottom = borderSize + 'px solid transparent'
		this.thisEl.style.borderLeft = '0px solid'
    }

    arrowMouseOverEffect() {
    	let boxSize = this.element.firstElementChild.firstElementChild.firstElementChild.offsetHeight
        let arrowSize = boxSize / 4

		this.thisEl.style.borderLeft = arrowSize + 'px solid'
    }

    arrowMouseOutEffect() {

        this.thisEl.style.borderLeft = '0px solid'
    }
}
