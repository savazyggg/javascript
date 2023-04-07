class CardFlipOnScroll{
    constructor(wrapper, sticky){
        this.wrapper = wrapper;
        this.sticky = sticky;
        this.cards = sticky.querySelector(".card")
        this.length = this.cards.length
        
        this.start = 0 //this.wrapper.offsetTop
        this.end = 0 //this.wrapper.offsetTop+this.wrapper.offsetHeight-innerHeight
        this.step = 0
    }
    init() {}
    animate(){}
}

const mainContent1 = documnet.querySelector(".main-content-1")
const sticky = document.querySelector(".sticky")
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)