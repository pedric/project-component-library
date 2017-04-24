export default class Spc_article_excerpts {
    constructor(element) {

        let setBoxHeight = function() {
            let boxWidth = element.firstElementChild.offsetWidth

            for (var i = 0; i < element.children.length; i++) {
                element.children[i].style.height = boxWidth + 'px'
            }
        }

    /* Init */
    setBoxHeight()
    window.addEventListener('resize', setBoxHeight)

    }
}
