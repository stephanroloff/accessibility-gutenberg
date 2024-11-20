let newLink = document.createElement('div');
newLink.className = 'skip-link';
newLink.textContent = 'Skip link';
newLink.setAttribute('tabindex', "0")

let mainContentStart = document.querySelector('#main-content');

if(mainContentStart){
    if(!mainContentStart.hasAttribute('tabindex') || element.tagName !== 'BUTTON' || element.tagName !== 'A'){
        mainContentStart = document.querySelector('#main-content a');
       
        if(!mainContentStart){
            mainContentStart = document.querySelector('#main-content [tabindex]');

            if(!mainContentStart){
                mainContentStart = document.querySelector('#main-content button');
            }
        }
    }
    newLink.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') { 
            mainContentStart.focus();
        }
    })
} 

document.body.prepend(newLink);




