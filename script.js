const selectedElement = e => {
    e.target.classList.add('addRed');
    setTimeout(() => {
        if(confirm("Do you want to delete this container ?")){
            e.target.remove();
        }
        else{
            e.target.classList.remove('addRed');
        }
    }, 1500)
}

const scanDocument = (element) => {
        element.forEach(elem => { 
        elem.addEventListener('click', selectedElement);
    });
}


scanDocument(document.body.childNodes);
