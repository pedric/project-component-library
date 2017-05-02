export default class Spc_article {
    constructor(element) {

        let that = this

        this.element = element
        this.heading = element.querySelector('h1')
        this.heading.style.display = 'inline-block'

        this.setHeadingSize()
        window.addEventListener('resize', function() {
            that.setHeadingSize()
        })
    }

    setHeadingSize() {

        let fontSize = parseFloat(window.getComputedStyle(this.heading, null).getPropertyValue('font-size'))
        let safeMargin = 20
        
        // Element width, content width and fontsize
        let x = this.heading.offsetWidth
        let y = this.heading.parentElement.offsetWidth - safeMargin
        let z = fontSize

        // If content is smaller than parentelement
        if(x < y) {
            
            for (var i = x; i < y; z++) {
                this.heading.style.fontSize = z + 'px'
                this.heading.style.lineHeight = z + 'px'
                i = this.heading.offsetWidth
            }

        // If content is bigger than parentelement
        } else {

            for (var i = x; i > y; z--) {
                this.heading.style.fontSize = z + 'px'
                this.heading.style.lineHeight = z + 'px'
                i = this.heading.offsetWidth
            }
        }
    }
}