// let images = document.querySelectorAll(".image");
// // console.log(images);
// let sliderImages = [];
// for (let i = 0; i < images.length; i++) {
//     let newSliderImage = {
//         image: images[i],
//         title: i+1
//     }
//     sliderImages.push(newSliderImage)
// }

// console.log(sliderImages);
// sliderImages[0].image.style.cssText = "display: block";

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

function initSlider(images) {
    images.forEach((image, index) => {
        let divImage = `<div class="image n${index} ${index === 0 ? 'active' : ''}" style="background-image:url(${images[index].url})" data-index="${index}"></div>`
        imagesContainer.innerHTML += divImage;
    });
}
initSlider(images)