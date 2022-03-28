$(document).ready(function()
{
    let hamburger = document.querySelector('.hamburger');
    let x = document.querySelector('.x');
    let mobilenav = document.querySelector('.mobilenav');

    hamburger.addEventListener('click',function(){
                   mobilenav.classList.add('open');        
    });
    x.addEventListener('click',function(){
        mobilenav.classList.remove('open');            
    });
}