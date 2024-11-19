let newLink = document.createElement('div');
newLink.className = 'skip-link';
newLink.textContent = 'Skip link';
newLink.setAttribute('tabindex', "0")

let mainContentStart = document.querySelector('#main-content');

if(mainContentStart){
    if(!mainContentStart.hasAttribute('tabindex') || element.tagName !== 'BUTTON' || element.tagName !== 'A'){
        mainContentStart = document.querySelector('#main-content a');
    }
    newLink.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') { 
            mainContentStart.focus();
        }
    })
} 

document.body.prepend(newLink);




