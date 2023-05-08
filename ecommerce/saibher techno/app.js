/*
*
/////////////////-----------------TOPBAR----------------------///////////////////
*
*/

const hiddenMenu = document.querySelector('.lang-menu');
const selectMenu = document.querySelector('.select-menu');
const hiddenMenuLink = document.querySelectorAll('.hidden-menu-link');

if((hiddenMenu)){
    hiddenMenu.addEventListener('click', ()=>{
        selectMenu.classList.toggle('active')
    })
}
if(hiddenMenuLink){
    hiddenMenuLink.forEach(element => {
        element.addEventListener('click', (e)=>{
            let selected = e.target.innerHTML;
            let langMenuSelecion = document.querySelector('.lang-menu-selecion');
            langMenuSelecion.innerHTML = selected;
            selectMenu.classList.toggle('active')
        })
    });

}
    
/*
*
/////////////////-----------------END TOPBAR----------------------///////////////////
*
*/