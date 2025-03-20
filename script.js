const divMain = document.querySelector('.divMain');

divMain.addEventListener('click',(e)=>{
    console.log(e.target.parentNode.open);
    if(e.target.parentNode.open === true){
        e.target.style.backgroundImage = 'url(/assets/images/icon-plus.svg)'
    } else if(e.target.parentNode.open === false){
        e.target.style.backgroundImage = 'url(/assets/images/icon-minus.svg)';
    } 
});