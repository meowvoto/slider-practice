let images = document.querySelectorAll(".image");
// console.log(images);
let sliderImages = [];
for (let i = 0; i < images.length; i++) {
    let newSliderImage = {
        image: images[i],
        title: i+1
    }
    sliderImages.push(newSliderImage)
}

console.log(sliderImages);