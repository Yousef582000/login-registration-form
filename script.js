const wrapaper=document.querySelector('.wrapaper');
const loginLINK=document.querySelector('.login-link');
const RegisterLink=document.querySelector('.register-link');
const btnlog=document.querySelector('.btnlogin-popup');
const iconclose=document.querySelector('.icon-close');

RegisterLink.addEventListener('click', ()=>{
wrapaper.classList.add('active');

});


loginLINK.addEventListener('click', ()=>
{
wrapaper.classList.remove('active');

});
btnlog.addEventListener('click', ()=>{
    wrapaper.classList.add('active-popup');
    
    });
    
    iconclose.addEventListener('click', ()=>{
        wrapaper.classList.remove('active-popup');
        
        });