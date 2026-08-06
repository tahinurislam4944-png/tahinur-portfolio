// ===============================
// Typing Effect
// ===============================

const titles = [
    "Data Analyst",
    "Excel Specialist",
    "Digital Professional",
    "English Tutor"
];


let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero h2");


function typeEffect(){

    if(charIndex < titles[index].length){

        typingElement.innerHTML += titles[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex > 0){

        typingElement.innerHTML =
        titles[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= titles.length){
            index = 0;
        }


        setTimeout(typeEffect,500);

    }

}


// Start animation
typingElement.innerHTML="";
typeEffect();





// ===============================
// Scroll Reveal Animation
// ===============================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},

{

threshold:0.15

}

);




sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all 0.8s ease";


observer.observe(section);


});





// ===============================
// Current Year Footer
// ===============================


const year = new Date().getFullYear();


document.querySelector("footer p").innerHTML =
`© ${year} Tahinur Islam. All Rights Reserved.`;
