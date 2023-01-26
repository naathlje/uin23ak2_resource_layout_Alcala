const resources = [
    {   
        kat_id:1,
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
        
    },
    {   
        kat_id:2,
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {   
        kat_id:3,
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        kat_id:4,
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        kat_id:5,
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
    
];

let fanerHTML = []
let id = resources.forEach((element, index, array)=> {
    console.log(element)
    console.log(index)
    console.log(array)
});
let knapp = document.querySelectorAll(".hele #faner #knapper .kategori");
let inn_hold = document.querySelectorAll(".hele .saker");
console.log(id);


function nav_faner (){
    let tabs ="";
    resources.map(faner=> {tabs +=`
    <section id="faner">
    <span> <a onclick="se_innhold(${faner.kat_id})" role="button" id="knapper-" class="kategori" > <p> ${faner.category} <p> </a></span>
    </section>
    
    `});
    document.getElementById("faner").innerHTML= tabs;
    
    
}   
nav_faner();

function hoved_innhold () {
    let innhold ="";
    resources.map(artikkler => {innhold +=`  
    
    <article class = "saker" id="art-${artikkler.kat_id}">
    
    <h2 class="navn">${artikkler.category}</h2>
    <p class="tekst">${artikkler.text}</p>
    
    <ul class= "lister" id="lis-${artikkler.sources}">
    <li><a href= "${artikkler.sources[0].url}"> ${artikkler.sources[0].title} </a></li>
    <li><a href= "${artikkler.sources[1].url}"> ${artikkler.sources[1].title} </a></li>
    <li><a href= "${artikkler.sources[2].url}"> ${artikkler.sources[2].title} </a></li>
    </ul>
    </article>
    `
    se_innhold();
});
document.getElementById("innholds_artikkler").innerHTML = innhold
};
hoved_innhold ();

////// .find
let faner = 1;
let artikkel = "category";
let result = resources.find((item) => {
    return item.id == faner;
});
console.log(result );
////////


//////.eventlistener
//let knapper = document.getElementById("knapper");
//knapper.addEventListener("click", )
//


function vis_innhold() {
    let id = resources.forEach((element, index, array)=> {
        console.log(element)
        console.log(index)
        console.log(array)

    });
    
}

vis_innhold()

function se_innhold() {
document.querySelector("#innholds_artikkler").classList.toggle("hidden") 
document.getElementById("faner").addEventListener("click",se_innhold)

};
se_innhold();




