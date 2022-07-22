const enableSelect = document.querySelector("#enable");
const disableSelect = document.querySelector("#disable");

enableSelect.addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.nextElementSibling.disabled = false;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        const message ={
            select : true
        }
        chrome.tabs.sendMessage(activeTab.id, message);
    })
});

disableSelect.addEventListener('click', (e) => {
    e.target.disabled = true;
    e.target.previousElementSibling.disabled = false;
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        const message ={
            select : false
        }
        chrome.tabs.sendMessage(activeTab.id, message);
    });
});