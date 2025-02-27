document.addEventListener("DOMContentLoaded", function() {
    let siteLang = document.querySelector('html');    
    let skipLinkContainer = document.querySelector('.skip-link');
    
    if(siteLang.lang == "de-DE" || siteLang.lang == "de"){
        if (skipLinkContainer) {
            skipLinkContainer.textContent = "Überspringen-Link";
        }
    }
});
