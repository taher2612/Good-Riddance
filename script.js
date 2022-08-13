chrome.runtime.onMessage.addListener(reciever);// for recieving messages
function reciever(request, sender, sendResponse){
    if(window.getComputedStyle(document.body).getPropertyValue('overflow').toLowerCase() === 'hidden'){ //if the body element's overflow is set to hidden, then set to scroll
        document.body.classList.add('scroll');
    }
    scanDocument(document.body.childNodes, request.select);
}

const elementsToRemove = [];
document.body.addEventListener('keyup', (e) => {
    if(e.keyCode === 8 || e.keyCode === 46){ // 8 for 'backspace' , 46 for 'delete'
        elementsToRemove.forEach(elem => {
            elem.remove();
        });
        elementsToRemove.splice(0,);//will remove all elements
    }

});

const selectedElement = e => {
    if(e.altKey && e.ctrlKey){
        if(e.target.classList.contains('toDelete')){//removing selections from a specific element
            e.target.classList.remove('toDelete');
            const remIndex = elementsToRemove.indexOf(e.target);
            elementsToRemove.splice(remIndex, 1); 
        }
        else{
            e.target.classList.add('toDelete');
            e.target.classList.remove('highlightDelete');
            elementsToRemove.push(e.target);
        }
    }
}

const highlight = e => {
    if((e.altKey && e.ctrlKey) && !e.target.classList.contains('toDelete')){
        e.target.classList.add('highlightDelete');
    }
}

const removeHighlight = e => {
    e.target.classList.remove('highlightDelete');
}

const scanDocument = (elements, select) => {
    if(select){
        elements.forEach(elem => { 
            elem.addEventListener('click', selectedElement);
            elem.addEventListener('mouseover', highlight)
            elem.addEventListener('mouseout', removeHighlight)

        });
    }else{
        elementsToRemove.forEach(elem => {//deselecting all elements 
            elem.classList.remove('toDelete');
        });
        elementsToRemove.splice(0,);//will remove all elements from the array
        elements.forEach(elem => { 
            elem.removeEventListener('click', selectedElement);
            elem.removeEventListener('mouseover', highlight);
            elem.removeEventListener('mouseout', removeHighlight)
        });
    }
}

// by default, enable select:
reciever({select : true});
