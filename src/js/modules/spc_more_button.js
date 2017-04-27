export default class Spc_more_button {
    constructor(element) {
    	this.node = element.getAttribute('data-spc_more_button')
    	this.btn = element.querySelectorAll('button')[0]
    	this.insertNode()
    }

    insertNode() {
    	this.btn.append(this.node)
    }
}
