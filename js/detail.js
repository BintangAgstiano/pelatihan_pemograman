
const hamburger=document.querySelector('.hamburger')
const iconXSidebar=document.querySelector('.header-sidebar i')
const sidebar=document.querySelector('.sidebar')
hamburger.addEventListener('click',function(){
    sidebar.classList.toggle('active');
})
iconXSidebar.addEventListener('click',function(){
    sidebar.classList.remove('active')
})

const linksSidebar=document.querySelectorAll('.col-link-sidebar a')

linksSidebar.forEach((link)=>{
    link.addEventListener('click',function(){
        const linkSidebarActive=document.querySelector('.col-link-sidebar a.active')
        if(linkSidebarActive){
            linkSidebarActive.classList.remove('active')
        }
        link.classList.add('active');
        setTimeout(() => {
            
            sidebar.classList.remove('active')
        }, 200);

    })
})
document.addEventListener('DOMContentLoaded', function () {

    const closeAuthLogin = document.querySelector('.close-auth-login');
    const closeAuthRegister = document.querySelector('.close-auth-register');
    const colAuthLogin = document.querySelector('.col-login');
    const colAuthRegister = document.querySelector('.col-register');
    
    
    closeAuthRegister.addEventListener('click', function () {
        colAuthRegister.style.zIndex = '-1';
        colAuthRegister.style.opacity = '0';
    });
    closeAuthLogin.addEventListener('click', function () {
        colAuthLogin.style.zIndex = '-1';
        colAuthLogin.style.opacity = '0';
    });

    const login = document.querySelector('.login');
    const registrasi = document.querySelector('.registrasi');
    const loginSidebar = document.querySelector('.login-sidebar');
    const registrasiSidebar = document.querySelector('.registrasi-sidebar');
    
    login.addEventListener('click', function () {
        colAuthLogin.style.opacity = '1';
        colAuthLogin.style.zIndex = '9991'; 
    });

 
    registrasi.addEventListener('click', function () {
        colAuthRegister.style.opacity = '1';
        colAuthRegister.style.zIndex = '9991'; 
    });
    
    loginSidebar.addEventListener('click', function () {
        colAuthLogin.style.opacity = '1';
        colAuthLogin.style.zIndex = '9999'; 
    });

 
    registrasiSidebar.addEventListener('click', function () {
        colAuthRegister.style.opacity = '1';
        colAuthRegister.style.zIndex = '9999'; 
    });
    
  
    const buttons = [
        { selector: '.btn-detail-js', target: colAuthLogin },
        { selector: '.btn-detail-nodejs', target: colAuthLogin },
        { selector: '.btn-detail-laravel', target: colAuthLogin },
        { selector: '.btn-detail-php', target: colAuthLogin },
        { selector: '.btn-detail-html', target: colAuthRegister }, 
        { selector: '.btn-detail-css', target: colAuthLogin },
        { selector: '.btn-detail-cplus', target: colAuthLogin },
        { selector: '.btn-detail-csharp', target: colAuthLogin },
    ];

    
    buttons.forEach(button => {
        const btn = document.querySelector(button.selector);
        if (btn) {
            btn.addEventListener('click', function () {
                button.target.style.opacity = '1';
                button.target.style.zIndex = '999'; 
            });
        }
    });
});
