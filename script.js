chrome.runtime.onMessage.addListener(reciever);// for recieving messages

function reciever(request, sender, sendResponse){
    setTimeout(() => {
        document.body.classList.add("scroll")
        scanDocument(document.body.childNodes, request.select);
    }, 500);
}

const selectedElement = e => {
    if(e.altKey){
        e.target.classList.add('addRed');
        setTimeout(() => {
            if(confirm("Do you want to delete this container ?")){
                e.target.remove();
            }
            else{
                e.target.classList.remove('addRed');
            }
        }, 100)
    }
}

const scanDocument = (element, select) => {
    if(select){
        element.forEach(elem => { 
            elem.addEventListener('click', selectedElement);
        });
    }else{
        element.forEach(elem => { 
            elem.removeEventListener('click', selectedElement);
        });
    }
}