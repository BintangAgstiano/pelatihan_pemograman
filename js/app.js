document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function () {
            const active = document.querySelector('.card.active');
            const boxNameActive = document.querySelector('.box-name.active-box-name');
            const decorationActive = document.querySelector('.decoration.active-decoration');
            const boxName = card.querySelector('.box-name');
            const decoration = card.querySelector('.decoration');

            if (active) {
                active.classList.remove('active');
            }
            if (boxNameActive) {
                boxNameActive.classList.remove('active-box-name');
            }
            if (decorationActive) {
                decorationActive.classList.remove('active-decoration');
            }
            if (boxName) {
                card.classList.add('active');
                boxName.classList.add('active-box-name');
                decoration.classList.add('active-decoration')
            }
        });
    });
    const arrowRight = document.querySelector('.col-arrow i')
    const card1 = document.querySelector('.right .card:nth-child(1)');
    const card2 = document.querySelector('.right .card:nth-child(2)');
    const card3 = document.querySelector('.right .card:nth-child(3)');
    const boxName1 = document.querySelector(' .right .card:nth-child(1) .box-name');
    const decoration1 = document.querySelector(' .right .card:nth-child(1) .decoration');
    const boxName2 = document.querySelector(' .right .card:nth-child(2) .box-name');
    const decoration2 = document.querySelector(' .right .card:nth-child(2) .decoration');
    const boxName3 = document.querySelector(' .right .card:nth-child(3) .box-name');
    const decoration3 = document.querySelector(' .right .card:nth-child(3) .decoration');
    let currentCardRight = 1;

    arrowRight.addEventListener('click', function () {
        card1.classList.remove('active');
        card2.classList.remove('active');
        card3.classList.remove('active');
        boxName1.classList.remove('active-box-name');
        decoration1.classList.remove('active-decoration');
        boxName2.classList.remove('active-box-name');
        decoration2.classList.remove('active-decoration');
        boxName3.classList.remove('active-box-name');
        decoration3.classList.remove('active-decoration');
        if (currentCardRight === 1) {

            card1.style.display = 'flex';
            card2.style.display = 'none';
            card3.style.display = 'none';
            card1.classList.add('active');
            setTimeout(() => {

                boxName1.classList.add('active-box-name');
                decoration1.classList.add('active-decoration')
            }, 100);
            currentCardRight = 2;
        } else if (currentCardRight === 2) {
            card1.style.display = 'none';
            card2.style.display = 'flex';
            card3.style.display = 'none';
            card2.classList.add('active');
            setTimeout(() => {

                boxName2.classList.add('active-box-name');
                decoration2.classList.add('active-decoration')
            }, 100);

            currentCardRight = 3;
        } else if (currentCardRight === 3) {

            card1.style.display = 'none';
            card2.style.display = 'none';
            card3.style.display = 'flex';
            card3.classList.add('active');
            setTimeout(() => {

                boxName3.classList.add('active-box-name');
                decoration3.classList.add('active-decoration')
            }, 100);

            currentCardRight = 1;
        }
    });


const textLogo=document.querySelector('.text-logo')
const chatLogo=document.querySelector('.chat-logo')
const lineLogoDecoration=document.querySelector('.line-logo-decoration')
const colLoading=document.querySelector('.col-loading')
setTimeout(() => {
    textLogo.classList.add('active')
}, 500);
setTimeout(() => {
    chatLogo.classList.add('active')
}, 700);
setTimeout(() => {
    lineLogoDecoration.classList.add('active')
}, 900);
setTimeout(() => {
    colLoading.style.opacity='0'
    colLoading.style.zIndex='-3'
    
}, 3000);

const closeAuthLogin = document.querySelector(' .close-auth-login');
const closeAuthRegister = document.querySelector(' .close-auth-register');
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
const loginSidebar = document.querySelector('.login-sidebar');
const registrasiSidebar = document.querySelector('.registrasi-sidebar');
const footerLogin = document.querySelector('#footer-login');
const footerRegister = document.querySelector('#footer-register');
const registrasi = document.querySelector('.registrasi');
login.addEventListener('click',function(){
    colAuthLogin.style.opacity = '1';
    colAuthLogin.style.zIndex = '9991';
})
registrasi.addEventListener('click',function(){
    colAuthRegister.style.opacity = '1';
    colAuthRegister.style.zIndex = '9991';
})
footerLogin.addEventListener('click',function(){
    colAuthLogin.style.opacity = '1';
    colAuthLogin.style.zIndex = '9991';
})
footerRegister.addEventListener('click',function(){
    colAuthRegister.style.opacity = '1';
    colAuthRegister.style.zIndex = '9991';
})

loginSidebar.addEventListener('click', function () {
    colAuthLogin.style.opacity = '1';
    colAuthLogin.style.zIndex = '9999'; 
});


registrasiSidebar.addEventListener('click', function () {
    colAuthRegister.style.opacity = '1';
    colAuthRegister.style.zIndex = '9999'; 
});


    const searching = document.querySelector('.searching');
    const colCard = document.querySelector('.col-card');
    const cardKelas = colCard.querySelectorAll('.card-kelas');
    
    searching.addEventListener('keyup', function (e) {
        const searchText = e.target.value.toLowerCase();
        const colTidakAdaKelas = document.querySelector('.col-tidakAdaKelas');
        const colCard = document.querySelector('.col-card');
        let kelasTersembunyi = 0; 
    
        cardKelas.forEach((card) => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchText)) {
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
            } else {
                card.style.display = 'none';
                kelasTersembunyi++;
            }
        });
    
        if (kelasTersembunyi === cardKelas.length) {
            colTidakAdaKelas.style.display = 'flex';
            colCard.style.display = 'none';
        } else {
            colTidakAdaKelas.style.display = 'none';
        }
    });

    const cbFilters = document.querySelectorAll('#cb-filter');
    const btnFilter = document.querySelector('.btn-filter');
    btnFilter.addEventListener('click', function () {
        const checkedFilters = Array.from(cbFilters).filter(cbFilter => cbFilter.checked);

        if (checkedFilters.length === 0) {
           return false;
        }

        const hasil = checkedFilters.map(cbFilter => cbFilter.value.toLowerCase());

        cardKelas.forEach((card) => {
            const text = card.textContent.toLowerCase();
            if (hasil.some(value => text.includes(value))) {
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
            } else {
                card.style.display = 'none';
            }
        });

        const colFilterActive = document.querySelector('.right-page4.active');
        const colKelasActive = document.querySelector('.left-page4.active');
        const colSearchingActive = document.querySelector('.col-searching.active');
        if (colFilterActive) {
            colFilterActive.classList.remove('active');
            colKelasActive.classList.remove('active');
            colSearchingActive.classList.remove('active');
        }
    });

    const angka1 = document.querySelector('.angka1');
    const angka2 = document.querySelector('.angka2');
    let index = 0
    let index2 = 0
    function incrementAngka() {
        if (index <= 325) {
            angka1.innerHTML = index
            index = 25 + index
            setTimeout(incrementAngka, 50)
        }
    }
    incrementAngka()

    setInterval(() => {

        incrementAngka()
        index = 0
    }, 1500);

    function incrementAngka2() {
        if (index2 <= 6) {
            angka2.innerHTML = index2
            index2++
            setTimeout(incrementAngka2, 100)
        }
    }
    incrementAngka2()

    setInterval(() => {

        incrementAngka2()
        index2 = 0
    }, 1500);


});

const btnCariKelas = document.querySelector('.btn-cari-kelas');
const iconArrowDown = document.querySelector('.icon-arrow-down');
const teksAjakan2 = document.querySelector('.text-ajakan2');

btnCariKelas.addEventListener('mouseover', function () {
    btnCariKelas.classList.add('active')
    iconArrowDown.classList.add('active')
    teksAjakan2.classList.add('active')
})
btnCariKelas.addEventListener('mouseout', function () {
    btnCariKelas.classList.remove('active');
    iconArrowDown.classList.remove('active');
    teksAjakan2.classList.remove('active');
})
iconArrowDown.addEventListener('mouseover', function () {
    btnCariKelas.classList.add('active')
    iconArrowDown.classList.add('active')
    teksAjakan2.classList.add('active')
})
iconArrowDown.addEventListener('mouseout', function () {
    btnCariKelas.classList.remove('active');
    iconArrowDown.classList.remove('active');
    teksAjakan2.classList.remove('active');
})



const logoCs = document.querySelector('.logo-cs');
const colBoxChat = document.querySelector('.col-box-chat');
const boxNotifikasi = document.querySelector('.box-notifikasi');
const caretRight = document.querySelector('#caret-right');
const iconKembali = document.querySelector('#icon-kembali');
setInterval(() => {
    logoCs.classList.add('active');
    boxNotifikasi.classList.add('active');
    caretRight.classList.add('active');

    setTimeout(() => {
        logoCs.classList.remove('active');
        boxNotifikasi.classList.remove('active');
        caretRight.classList.remove('active');
    }, 5000);
}, 9000);
logoCs.addEventListener('click', function () {
    colBoxChat.classList.add('active');
    boxNotifikasi.classList.remove('active');
    caretRight.classList.remove('active');
})
iconKembali.addEventListener('click', function () {
    colBoxChat.classList.remove('active')
})

const close = document.querySelector('.close');
const colPopupMisi = document.querySelector('.col-popup-misi');
const textDiskon = document.querySelector('.header-content-popup-misi span');
const textTitle1 = document.querySelector('.content-text-misi2 div:nth-child(1)');
const textsubtile1 = document.querySelector('.content-text-misi2 div:nth-child(2)');
const textTitle2 = document.querySelector('.content-text-misi3 div:nth-child(1)');
const textsubtile2 = document.querySelector('.content-text-misi3 div:nth-child(2)');
const btnCardDiskons = document.querySelectorAll('.btn-card-diskon');
btnCardDiskons.forEach((btnCardDiskon) => {
    btnCardDiskon.addEventListener('click', function (e) {
        let diskon = e.target.dataset.diskon
        let title1 = e.target.dataset.title1
        let subtitle1 = e.target.dataset.subtitle1
        let title2 = e.target.dataset.title2
        let subtitle2 = e.target.dataset.subtitle2

        textDiskon.innerHTML = diskon
        textTitle1.innerHTML = title1
        textsubtile1.innerHTML = subtitle1
        textTitle2.innerHTML = title2
        textsubtile2.innerHTML = subtitle2
        colPopupMisi.classList.add('active');
    })
    close.addEventListener('click', function () {
        colPopupMisi.classList.remove('active');

    })
})


const btnRegisterSection7 = document.querySelector('.btn-register-section7');
const btnLoginSection7 = document.querySelector('.btn-login-section7');
btnRegisterSection7.addEventListener('mouseover', function () {
    btnRegisterSection7.classList.add('active');
    btnLoginSection7.classList.add('active');
});
btnRegisterSection7.addEventListener('mouseout', function () {
    btnRegisterSection7.classList.remove('active');
    btnLoginSection7.classList.remove('active');

});


const btnCardJs = document.querySelector('#btn-card-js');
btnCardJs.addEventListener('click', function () {
    document.location = 'html/detailJS.html'
})
const btnCardNodeJs = document.querySelector('#btn-card-nodejs');
btnCardNodeJs.addEventListener('click', function () {
    document.location = 'html/detailNODEJS.html'
})
const btnCardCPLUS = document.querySelector('#btn-card-cplus');
btnCardCPLUS.addEventListener('click', function () {
    document.location = 'html/detailCPLUS.html'
})
const btnCardCSHARP = document.querySelector('#btn-card-csharp');
btnCardCSHARP.addEventListener('click', function () {
    document.location = 'html/detailCSHARP.html'
})
const btnCardHTML = document.querySelector('#btn-card-html');
btnCardHTML.addEventListener('click', function () {
    document.location = 'html/detailHTML.html'
})
const btnCardCSS = document.querySelector('#btn-card-css');
btnCardCSS.addEventListener('click', function () {
    document.location = 'html/detailCSS.html'
})
const btnCardLARAVEL = document.querySelector('#btn-card-laravel');
btnCardLARAVEL.addEventListener('click', function () {
    document.location = 'html/detailLARAVEL.html'
})
const btnCardPHP = document.querySelector('#btn-card-php');
btnCardPHP.addEventListener('click', function () {
    document.location = 'html/detailPHP.html'
})


const links = document.querySelectorAll('.col-link a');
links.forEach(link => {
    link.addEventListener('click', function () {
        const linkActive = document.querySelector('.col-link a.active');
        if (linkActive) {
            linkActive.classList.remove('active')
        }
        link.classList.add('active');
    })
});


const navLinkEls = document.querySelectorAll('.col-link a');
const sectionEls = document.querySelectorAll('section');


function updateActiveLink() {
    let currentSection;

    sectionEls.forEach(sectionEl => {
        const sectionTop = sectionEl.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = sectionEl.getAttribute('id');
        }
    });

    navLinkEls.forEach(navLinkEl => {
        navLinkEl.classList.remove('active');
        if (navLinkEl.getAttribute('href').includes(currentSection)) {
            navLinkEl.classList.add('active'); 
        }
    });
}


window.addEventListener('scroll', updateActiveLink);


const iconFilter = document.querySelector('.box-icon-filter');
const closeFilter = document.querySelector('.filter-close');
const colFilter = document.querySelector('.right-page4');
const colKelas = document.querySelector('.left-page4');
const colSearching = document.querySelector('.col-searching');
const closeFilterActive = document.querySelector('.filter-close.active');
const colFilterActive = document.querySelector('.right-page4.active');
const colKelasActive = document.querySelector('.left-page4.active');
const colSearchingActive = document.querySelector('.col-searching.active');
iconFilter.addEventListener('click', function () {
    colFilter.classList.toggle('active');
    closeFilter.classList.add('active');
    colSearching.classList.toggle('active');
    colKelas.classList.toggle('active');



    if (colFilterActive) {
        colFilterActive.classList.remove('active')
        colKelasActive.classList.remove('active')
        colSearchingActive.classList.remove('active')

    }
})

closeFilter.addEventListener('click', function () {

    colFilter.classList.remove('active');
    colKelasActive.classList.remove('active')

    colSearchingActive.classList.remove('active')
})


const hamburger = document.querySelector('.hamburger')
const iconXSidebar = document.querySelector('.header-sidebar i')
const sidebar = document.querySelector('.sidebar')
hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('active');
})
iconXSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active')
})

const linksSidebar = document.querySelectorAll('.col-link-sidebar a')

linksSidebar.forEach((link) => {
    link.addEventListener('click', function () {
        const linkSidebarActive = document.querySelector('.col-link-sidebar a.active')
        if (linkSidebarActive) {
            linkSidebarActive.classList.remove('active')
        }
        link.classList.add('active');
        setTimeout(() => {

            sidebar.classList.remove('active')
        }, 200);

    })
})
const iconSendMessage=document.querySelector('.footer-box-chat img');
const chatContainer = document.querySelector('.content-box-chat');
const selectMessage = document.querySelector('#select-message');
iconSendMessage.addEventListener('click',function(){
    
   const value=selectMessage.value
        const newChatMessage = document.createElement('div');
        newChatMessage.classList.add('box-chat2-content-box-chat');
        
        newChatMessage.innerHTML = `
            <div class="icon-caret2-box-chat">
                <i class='bx bx-caret-right'></i>
            </div>
            <span>${value}</span>
        `;
        chatContainer.appendChild(newChatMessage);

    if(value=='Bagaimana cara membeli kelas ?'){
        const newChatMessage2 = document.createElement('div');
        newChatMessage2.classList.add('box-chat-content-box-chat');
        
        newChatMessage2.innerHTML = `
            <div class="icon-caret-box-chat">
                <i class='bx bx-caret-left'></i>
            </div>
            <span>Pencet tombol detail lalu klik bergabung pada kelas yang di inginkan</span>
        `;
        chatContainer.appendChild(newChatMessage2);

    }
    if(value=='Bagaimana cara login ?'){
        const newChatMessage2 = document.createElement('div');
        newChatMessage2.classList.add('box-chat-content-box-chat');
        
        newChatMessage2.innerHTML = `
            <div class="icon-caret-box-chat">
                <i class='bx bx-caret-left'></i>
            </div>
            <span>Buka bagian menu lalu klik tombol masuk</span>
        `;
        chatContainer.appendChild(newChatMessage2);

    }
    if(value=='Dimana tombol membeli kelas ?'){
        const newChatMessage2 = document.createElement('div');
        newChatMessage2.classList.add('box-chat-content-box-chat');
        
        newChatMessage2.innerHTML = `
            <div class="icon-caret-box-chat">
                <i class='bx bx-caret-left'></i>
            </div>
            <span>Di dalam halaman detail dan klik tombol bergabung</span>
        `;
        chatContainer.appendChild(newChatMessage2);

    }
   
})
