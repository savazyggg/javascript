const images = [
    "wallpaperbetter_1.jpg", "wallpaperbetter_2.jpg", "wallpaperbetter_3.jpg","wallpaperbetter.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const image = document.createElement("img")
image.src=`img/${chosenImage}`
//console.log(image.src)

document.body.appendChild(image)