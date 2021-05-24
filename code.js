let images = [
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/8_EGO-GRIN_new.jpg',
    title:'EGO-GRIN, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/006_EGO-SCAR.jpg',
    title: 'EGO-SCAR, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/007_EGO-BEAT.jpg',
    title: 'EGO-BIT, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/003_EGO-DNA.jpg',
    title: 'EGO-DNA, YONEYAMA MAI'}, 
    {url:'https://www.anicoremixgallery.com/wp-content/uploads/2021/03/004_EGO-MELT.jpg',
    title:'EGO-MELT, YONEYAMA MAI'}, 
]

let imagesContainer = document.querySelector(".images_container")
let buttons = document.querySelector(".buttons")
let button = buttons.querySelectorAll(".button")
function initSlider(images) {
    if (!images || !images.length) return;

    images.forEach((image, index) => {
        let divImage = `<div class="image n${index} ${index === 0 ? 'active' : ''}" style="background-image:url(${images[index].url})" data-index="${index}"></div>`
        imagesContainer.innerHTML += divImage;
    });

    // initHighlightButton();

    // function initHighlightButton() {
    //     button.forEach(buttonElem => {
    //         buttonElem.addEventListener("mouseover", function() {
    //             buttonElem.querySelector(".arrow").style.cssText = 'color: hsl(0, 0%, 100%);';
    //         })
    //     })
    // }



    // function initButtons() {
    //     let curNumber = imagesContainer.querySelector(".active");
    //     let nextNumber;

    // }

}

document.addEventListener("DOMContentLoaded", initSlider(images))
