export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    init(){
        
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const sibling = btn.closest('.module__info-show').nextElementSibling;
                const line = btn.querySelector('.module__info-show > .plus > .plus__content > svg > path');


                if (sibling.classList.contains('msg')){
                    line.style.display = 'none';
                } else {
                    line.style.display = 'block';
                }
                sibling.classList.toggle('msg');
                sibling.style.marginTop = '20px';
            });
        });
    }
}