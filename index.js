// script for navbar 

const navToggle = document.querySelector(".nav-toggle")
const closeButton = document.querySelector(".close-button")
console.log(closeButton)
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    // navToggle.style.display = "none"
    closeButton.style.display = "block"
    return toggle()
   
})



links.addEventListener("click", function(){
   return toggle()
})


function toggle(){
    links.classList.toggle("show-links")
}





window.addEventListener('scroll', reveal)

function reveal(){
    let reveals = document.querySelectorAll(".reveal")
for (let i =0; i < reveals.length; i++){

    let windowheight = window.innerHeight
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150

    if (revealtop < windowheight - revealpoint){
     reveals[i].classList.add("active") 

    }
    else{
        reveals[i].classList.remove("active")    
    }
}

}







// testimonial section 
const testimonial = [
    {
    id: 1,
    name: "Peter Lucas",
    image: "images/peter-lucas.png",
    quote: "images/open-quote.svg",
    text: 
 `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam lorem ipsum repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},
{
    id: 2,
    name: "Mayowa Odusanya",
    image: "images/mayowa-odusanya.png",
    quote: "images/open-quote.svg",
    text: 
 `Such an amazing expeience. The staff were very nice and pleasant,
  I look forward to working with SAAS again` ,
},
{
    id: 3,
    name: "Eniola Peter",
    image: "images/eniola-peter.png",
    quote: "images/open-quote.svg",
    text: 
 `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam lorem ipsum repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
}
]
let textCount = 1
const testimialText = document.querySelector(".testimial-text")
const testimonialName = document.querySelector(".testimonial-name")
const testimonialPersonImage = document.querySelector(".testimonial-person--image")
const openQuote =  document.querySelector(".open-quote")
console.log(openQuote)

   

 setInterval(() => {
if (textCount >= 3){
    textCount = 1
}
const item = testimonial[textCount]
testimonialPersonImage.src = item.image
openQuote.src = item.quote
testimialText.textContent = item.text
testimonialName.innerHTML = item.name

textCount++
 },10000)
 