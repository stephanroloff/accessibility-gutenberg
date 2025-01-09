let newLink = document.createElement('div');
newLink.className = 'skip-link';
newLink.textContent = 'Skip link';
newLink.setAttribute('tabindex', "0")

let mainContentStart;

// This array should be adapted, cause every website has a different structure.
//*****************************************************************************
let selectorsArray = [
    '#main-content a',
    '#main-content [tabindex]',
    '#main-content button',
    '.entry-content a',
    'select'
];
//*****************************************************************************


selectorsArray.forEach(selector =>{
    if(!mainContentStart){
        mainContentStart = document.querySelector(selector)
    }
})

if(mainContentStart){
    newLink.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') { 
            mainContentStart.focus();
        }
    })
} 

document.body.prepend(newLink);









