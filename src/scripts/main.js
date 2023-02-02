document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const faq = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const AltHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < AltHero) {
            hideHeaderElements()
        } else {
            showHeaderElements()
        }
    })


    //Seção de atrações/Programação das abas//
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBtnAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //Seção FAQ/Accordion//
    for (let i=0; i < faq.length; i++) {
        faq[i].addEventListener('click', abreFecha)
    }
})

function hideHeaderElements(){
    const header = document.querySelector('header');

    header.classList.add('header--is-hidden')
}

function showHeaderElements(){
    const header = document.querySelector('header');

    header.classList.remove('header--is-hidden')
}

function abreFecha(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe)
}

function removeBtnAtivo() {
    const btn = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabContainer.length;i++) {
        tabContainer[i].classList.remove('shows__list--is-active')
    }
}