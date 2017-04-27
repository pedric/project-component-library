export default class Spc_article_excerpts {
    constructor(element) {

        let that = this
        this.element = element

        this.setBoxHeight()
        window.addEventListener('resize', function() {
            that.setBoxHeight()
        })

        for (var i = 0; i < element.children.length; i++) {
            let thisEl = element.children[i].querySelectorAll('svg')
            element.children[i].addEventListener('mousemove', function(e) {
                that.moveArrow(e, thisEl)
            })
        }

    }

    setBoxHeight() {
            
        let boxWidth = this.element.firstElementChild.firstElementChild.offsetWidth

        for (var i = 0; i < this.element.children.length; i++) {
            this.element.children[i].firstElementChild.style.height = boxWidth + 'px'
        }
    }

    moveArrow(e, thisEl) {
        
        let node = 'rotate(' + (e.clientY - e.clientX) / 2 + 'deg)'
        thisEl[0].style.transform = node
    }
}