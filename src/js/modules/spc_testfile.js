export default class Spc_testfile {
  constructor(element) {

    // Log load verification
    let verification = element.getAttribute('data-spc_testfile');
    console.log(verification)

    let h1 = element.querySelector('h1')

    let size = 100
    let h1Size = size - h1.innerHTML.length*1.9

    let headingSize = function() {

    	let windowSize = window.innerWidth / 12
    	let h1Size = windowSize - h1.innerHTML.length

    	if(h1Size < 16) { h1Size = 16 }

			h1.setAttribute('style', 'font-size:' + h1Size + 'px')
    }

    headingSize()

    window.addEventListener('resize', headingSize)

  }
}
