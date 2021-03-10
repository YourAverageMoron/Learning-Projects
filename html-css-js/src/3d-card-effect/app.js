//Movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.info h1');
const sneaker = document.querySelector('.sneaker img');
const circle = document.querySelector('.circle');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//Movement event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";
    sneaker.style.transform = "translateZ(150px) rotateZ(-20deg)";
    // circle.style.transform = "translateZ(75px)";
    title.style.transform = "translateZ(125px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(75px)";
    purchase.style.transform = "translateZ(50px)";
})

//Animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all 0.5s ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    // circle.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";

})