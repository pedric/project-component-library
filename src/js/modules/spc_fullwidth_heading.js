export default class Spc_fullwidth_heading {
    constructor(element) {

    let headingSize = function() {

        // Set basic style to heading
        let heading = element.querySelector('a')
        heading.style.display = 'table'
        heading.style.fontSize = 48 + 'px'

        // Get width of the content
        // (Width for heading is supposed to line with
        // the content width no matter what screensize)
        // safeMargin prevents unwanted linebreaking in heading
        let responsiveBreakingPoint = 800
        let maxWidth = 1024
        let safeMargin = 27
	    	let screenWidth = window.innerWidth

	    	if(screenWidth > 1024) {
	    		screenWidth = 1024 - safeMargin
	    	} else {
	    		screenWidth = screenWidth - safeMargin
	    	}

        // Element-, content width and fontsize to int
        let x = heading.offsetWidth
        let y = screenWidth
        let z = parseInt(heading.style.fontSize.replace('px', ''))

        // If heading is smaller than element
        if(x < y) {
            
            for (var i = x; i < y; z++) {
                heading.style.fontSize = z + 'px'
                heading.style.lineHeight = z + 'px'
                i = heading.offsetWidth
            }

        // If content is smaller than element
        } else {

            for (var i = x; i > y; z--) {
                heading.style.fontSize = z + 'px'
                heading.style.lineHeight = z + 'px'
                i = heading.offsetWidth
            }
        }
  }
  /* Init */
    headingSize()
    window.addEventListener('resize', headingSize)

}
}