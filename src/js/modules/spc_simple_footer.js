export default class Spc_simple_footer {
    constructor(element) {

    	this.company = element.getAttribute('data-spc_simple_footer')
    	let d = new Date()
    	this.year = d.getFullYear()
    	this.El = element.querySelectorAll('span')[0]
    	this.insertYearCopyright()
    }

    insertYearCopyright() {

    	let node = '@' + this.year + ' ' + this.company
    	this.El.append(node)
    }
}
