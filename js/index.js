import { mainData } from "./module/mainData.js"
import { modal } from "./module/modal.js"
import { bgElements } from "./module/bgElements.js"
import { preloader } from "./module/preloader.js"
import { scrollToTop } from "./module/scrollToTop.js"
import { slider } from "./module/slider.js"

const init = () => {
   bgElements()
   preloader()
   modal()
   scrollToTop()
   slider()
   mainData()
}

window.addEventListener("DOMContentLoaded", init)
