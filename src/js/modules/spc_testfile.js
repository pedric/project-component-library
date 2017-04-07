export default class Spc_testfile {
    constructor(element) {

    // Log load-verification for module
    let verification = element.getAttribute('data-spc_testfile');
    console.log(verification)

    let headingSize = function() {

        // Set basic style to heading
        let h1 = element.querySelector('h1')
        h1.style.display = 'inline-block'
        h1.style.fontSize = 48 + 'px'

        // Get width of the content
        // (Width for heading is supposed to line with
        // the content width no matter what screensize)
        // Safemargin prevents unwanted linebreaking in heading
        let responsiveBreakingPoint = 800
        let maxWidth = 530
        let safeMargin = 20

    	let screenWidth = window.innerWidth
        if(screenWidth > responsiveBreakingPoint) { 
            screenWidth = (( screenWidth / 10 ) * 5) - safeMargin
            if (screenWidth >= maxWidth) { screenWidth = maxWidth - safeMargin } 
        } else {
            screenWidth = ((screenWidth / 10) * 8) - safeMargin
        }

        // Element-, content width and fontsize to int
        let x = h1.offsetWidth
        let y = screenWidth
        let z = parseInt(h1.style.fontSize.replace('px', ''))

        // If heading is smaller than element
        if(x < y) {
            
            for (var i = x; i < y; z++) {
                h1.style.fontSize = z + 'px'
                i = h1.offsetWidth
            }

        // If content is smaller than element
        } else {

            for (var i = x; i > y; z--) {
                h1.style.fontSize = z + 'px'
                i = h1.offsetWidth
            }
        }
    }

    /* Init */
    headingSize()
    window.addEventListener('resize', headingSize)

    }
}
