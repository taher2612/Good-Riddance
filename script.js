const selectedElement = e => {
    e.target.classList.add('addRed');
    setTimeout(() => {
        if(confirm("Do you want to delete this container ?")){
            e.target.remove();
        }
        else{
            e.target.classList.remove('addRed');
        }
    }, 500)
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

scanDocument(document.body.childNodes, true);

const deselect = () => {
    console.log("Here");
    setTimeout(() => {
        console.log("ALso here");        
        if(confirm("Should I end the deletion of containers?")){
            scanDocument(document.body.childNodes, false);
        }else{
            closeDeselction();
        }
    }, 6000);
}

deselect();
