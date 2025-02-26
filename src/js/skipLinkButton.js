// This works as follows: 
// If there is a wrapper that wraps all the content, it will search for an <a> or a <button> inside this wrapper (content wrapper).
// If there is no wrapper that wraps all the content, it will move to the next sibling node and search for an <a> or a <button> inside it (navigation wrapper).

// Name of the content wrapper
let contentWrapper = '.content-wrapper';
// Name of the navigation wrapper
let navigationWrapper = 'header';


let newLink = document.createElement('div');
newLink.className = 'skip-link';
newLink.textContent = 'Skip link';
newLink.setAttribute('tabindex', "0")

let navigation;
let startContent;

startContent = document.querySelector(`${contentWrapper} a`); // Searches for .content-wrapper

if(startContent){
    
    newLink.addEventListener('keydown', (event)=>{
        if (event.key === 'Enter') { 
            startContent.focus();
        }
    })

}else{
    navigation = document.querySelector(`${navigationWrapper}`);        
    
    if(navigation){
    
        let nextElement = navigation.nextElementSibling; // Gets the next sibling element
        let linkOrButton = nextElement.querySelector('a, button'); // Searches for an <a> or <button> inside the sibling element
        
        // If no <a> or <button> is found, move to the next sibling node
        while (!linkOrButton && nextElement) {
            nextElement = nextElement.nextElementSibling; // Move to the next sibling
            if (!nextElement) break; // If there are no more siblings, exit the loop
        
            linkOrButton = nextElement.querySelector('a, button'); // Search inside the new sibling
        }
    
        if(linkOrButton){
            newLink.addEventListener('keydown', (event)=>{
                if (event.key === 'Enter') { 
                    linkOrButton.focus();
                }
            })
        }
    } 
}

document.body.prepend(newLink);












