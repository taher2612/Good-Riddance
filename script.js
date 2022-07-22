chrome.runtime.onMessage.addListener(reciever);// for recieving messages
function reciever(request, sender, sendResponse){
    document.body.classList.add("scroll");
    scanDocument(document.body.childNodes, request.select);
}

const elementsToRemove = [];
document.body.addEventListener('keyup', (e) => {
    if(e.keyCode === 8 || e.keyCode === 46){
        elementsToRemove.forEach(elem => {
            elem.remove();
        });
        elementsToRemove.splice(0,);//will remove all elements
    }

});

const selectedElement = e => {
    if(e.altKey && e.ctrlKey){
        if(e.target.classList.contains('addRed')){//removing selections from a specific element
            e.target.classList.remove('addRed');
            const remIndex = elementsToRemove.indexOf(e.target);
            elementsToRemove.splice(remIndex, 1); 
        }
        else{
            e.target.classList.add('addRed');
            elementsToRemove.push(e.target);
        }
    }
}

const scanDocument = (elements, select) => {
    if(select){
        elements.forEach(elem => { 
            elem.addEventListener('click', selectedElement);
        });
    }else{
        elementsToRemove.forEach(elem => {//deselecting all elements 
            elem.classList.remove('addRed');
        });
        elementsToRemove.splice(0,);//will remove all elements
        elements.forEach(elem => { 
            elem.removeEventListener('click', selectedElement);
        });
    }
}

// on default, enable select:
reciever({select : true});