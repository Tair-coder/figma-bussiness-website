const pricingCard = document.querySelectorAll('.pricing__card'),
      header = document.querySelector('.heads'),
      intro = document.querySelector('.header').offsetHeight
      scrollDown = window.pageYOffset || document.documentElement.scrollTop;

    
    checkScroll(scrollDown)
    // console.log(window.pageYOffset || document.documentElement.scrollTop)
window.addEventListener('scroll',()=>{
    scrollDown = window.pageYOffset || document.documentElement.scrollTop;
    checkScroll(scrollDown)

})




function checkScroll(scrollDown) {
    if(950 <= scrollDown ) {
        header.classList.add('fixed')
        header.querySelector('.logo').src = '/img/logo.svg'

    }else{
        header.classList.remove('fixed')
        header.querySelector('.logo').src = '/img/dark logo.svg'
    }
}



for (const addPriceCard of pricingCard) {
 addPriceCard.addEventListener('click',()=>{
    removePrice();
    addPriceCard.classList.add('activate');    
})   
}
function removePrice() {
    for (const removePriceCard of pricingCard) {
        removePriceCard.classList.remove('activate')
        
    }
    
}

if ( window.pageXOffset <= 418){
    document.querySelector('.hero_p').innerHTML = "Most calendars are<br>designed for teams.";
    document.querySelector('.features__text-content__h4').innerHTML = "Most calendars are<br>designed for teams.";
    document.querySelector('.content-2__h4').innerHTML = "Most calendars are<br>designed for teams.";
}