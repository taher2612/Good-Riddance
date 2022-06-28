// alert('This works')
const paras = document.querySelectorAll('*');

console.log(paras);
paras.forEach(para => {
if(window.getComputedStyle(para).getPropertyValue('position').toLowerCase() === 'fixed' || window.getComputedStyle(para).getPropertyValue('position').toLowerCase() === 'sticky'){
    para.classList.add('addRed');
}
})


// window.getComputedStyle(para).getPropertyValue('position').toLowerCase() === 'fixed';
// use the above comparison to check a particular property