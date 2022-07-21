const enableSelect = document.querySelector("#enable");
const disableSelect = document.querySelector("#disable");

enableSelect.addEventListener('click', (e) => {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        const message ={
            select : true
        }
        chrome.tabs.sendMessage(activeTab.id, message, response => {
            para.textContent = response;
        });
    });
});

disableSelect.addEventListener('click', (e) => {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        const message ={
            select : false
        }
        chrome.tabs.sendMessage(activeTab.id, message, response => {
            para.textContent = response;
        });
    });
});