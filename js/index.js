// Load your images on page-load
function preloader() {
    const imagesPaths = [
       "img/dynamic/wind-dynamic-img.jpg",
       "img/dynamic/solar-dynamic-img.jpg",
       "img/dynamic/hydro-dynamic-img.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);

/* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    let btnList = document.querySelectorAll('button');

 

    
  /*  Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
   
const data = {
    windEnergy: {
        heading:"Wind energy",
        imageURL: "img/dynamic/wind-dynamic-img.jpg",
        imageAlt: "Wind-turbine-for-dynamic-content",
        bodyText: "Wind farms capture the energy of wind flow by using turbines and converting it into electricity. There are several forms of systems used to convert wind energy and each vary. Commercial grade wind-powered generating systems can power many different organizations, while single-wind turbines are used to help supplement pre-existing energy organizations. Another form is utility-scale wind farms, which are purchased by contract or wholesale. "
    }, 
    solarEnergy: {
        heading:"Solar energy",
        imageURL: "img/dynamic/solar-dynamic-img.jpg",
        imageAlt: "Solar-for-dynamic-content",
        bodyText: "Solar energy is derived by capturing radiant energy from sunlight and converting it into heat, electricity, or hot water. Photovoltaic (PV) systems can convert direct sunlight into electricity through the use of solar cells. One of the benefits of solar energy is that sunlight is functionally endless. With the technology to harvest it, there is a limitless.  supply of solar energy, meaning it could render fossil fuels obsolete. Relying on solar energy rather than fossil fuels also helps us improve public health and environmental conditions. "
    }, 
    hydroEnergy: {
        heading:"Hydro energy",
        imageURL: "img/dynamic/hydro-dynamic-img.jpg",
        imageAlt: "hydro-turbine-for-dynamic-content",
        bodyText: "Dams are what people most associate when it comes to hydroelectric power. Water flows through the dam’s turbines to produce electricity, known as pumped-storage hydropower. Run-of-river hydropower uses a channel to funnel water through rather than powering it through a dam. Hydroelectric power is very versatile and can be generated using both large scale projects, like the Hoover Dam, and small scale projects like underwater turbines and lower dams on small rivers and streams. "
}
}


/* Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */
    
    let $dc = document.getElementById('dynamic-content');


    // create the initial page markup 
    let markup = `<h1>${data.windEnergy.heading}</h1>
              <img src="${data.windEnergy.imageURL}" alt="${data.windEnergy.imageAlt} "> 
              <p> ${data.windEnergy.bodyText} </p>`;

    $dc.innerHTML = markup;



    /* handleSelection function here. */ 

  
function handleSelection(ev) {

    
    // move the id-attribute to the currently clicked button 
    let currentBtn = ev.target;

     // loop through the list of all nav-items
     for (let i = 0; i < btnList.length; i++) {
        // if nav-item contans attribute type of id
        if (btnList[i].hasAttribute('id')) {
            // remove the attribute type of 'id'
            btnList[i].removeAttribute('id');

        }
    }
    //add attribute to the curent
    currentBtn.setAttribute('id','active-button');

    
/* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */
                        
                if (ev.target == btnList[0]) {
                    let dynamicMarkup =  `<h1>${data.windEnergy.heading}</h1>
                    <img src="${data.windEnergy.imageURL}" alt="${data.windEnergy.imageAlt} "> 
                    <p> ${data.windEnergy.bodyText} </p>`;
                    $dc.innerHTML = dynamicMarkup;
                
                } else if (ev.target == btnList[1]) {
                    let dynamicMarkup =  `<h1>${data.solarEnergy.heading}</h1>
                    <img src="${data.solarEnergy.imageURL}" alt="${data.solarEnergy.imageAlt} "> 
                    <p> ${data.solarEnergy.bodyText} </p>`;
                    $dc.innerHTML = dynamicMarkup;
                 
                }  else {
                    let dynamicMarkup =  `<h1>${data.hydroEnergy.heading}</h1>
                    <img src="${data.hydroEnergy.imageURL}" alt="${data.hydroEnergy.imageAlt} "> 
                    <p> ${data.hydroEnergy.bodyText} </p>`;
                    $dc.innerHTML = dynamicMarkup;

                } 
         

}


// registering list items for click event:

for(let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', handleSelection);
}









