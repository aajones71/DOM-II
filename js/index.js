// Your code goes here
let funTitleUp = document.querySelector(".logo-heading");
funTitleUp.addEventListener("mouseenter", e => {
    console.log(e)
funTitleUp.style.transform = "scale(2)";
funTitleUp.style.transition = "transform 0.5s";
});

let funTitleDown = document.querySelector(".logo-heading");
funTitleDown.addEventListener("mouseleave", e =>{
    console.log(e)
funTitleDown.style.transform = "scale(1)";
funTitleDown.style.transition = "transform 0.5s";
});

let homeDance = document.querySelectorAll(".nav-link");
    homeDance.forEach(item => {
    item.addEventListener("mouseover", e => {
    item.style.transform = "rotate(0.5turn)";
    console.log(e)
    });
});
let homeDance2 = document.querySelectorAll(".nav-link")
    homeDance2.forEach(item => {
    item.addEventListener("mouseout", e =>{
    item.style.transform = "rotate(0turn)";
    console.log(e)
    });
});

// let welcm =document.querySelector(".welcome")
// welcm.addEventListener("click", e => {
//     welcm.sytle.fontSize = "3rem";
//     console.log(e)
    
// })
const welcm = document.querySelector(".welcome")
    welcm.addEventListener("dblclick", e => {
        console.log(e)
        welcm.style.fontSize = "5rem"
        welcm.style.color = "black"
    })
const welcm2 = document.querySelector(".welcome")
    welcm2.addEventListener("click", e => {
    console.log(e)
    welcm.style.fontSize = "3rem"
    welcm.style.color = "blue"
    })
 
    const travel = document.querySelector(".travel")
    travel.addEventListener('mouseover', e => {
            travel.style.background = 'pink'; 
          
      });

      const travel2 = document.querySelector(".travel")
    travel2.addEventListener('mouseout', e => {
            travel.style.background = 'none'; 
        });

const funpic = document.querySelector('.text-content');

funpic.addEventListener('click', (event) => {
  event.target.style.background = 'purple';    
});

funpic.addEventListener('mouseover', (event) => {
    event.target.style.background = '';    
  });

