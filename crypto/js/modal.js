const heroBtn = document.querySelector('.hero__btn')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

overlay.style.transitionDuration='0.76s'
modal.style.transitionDuration='0.76s'

heroBtn.addEventListener('click', () => {
    overlay.classList.add('overlay_open')
    modal.classList.add('modal_open')
})

overlay.addEventListener('click', (event) => {
    const target = event.target;
    //event - любое действие, в данном случае клик

    // если таргет равен оверлею или если у таргет есть класс modal__close (closest ищет его выше и выше в разметке по клику)
    if(target === overlay || target.closest('.modal__close')){
        overlay.classList.remove('overlay_open')
        modal.classList.remove('modal_open')
    }
    
})


const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        name: form.name.value,
        surname: form.surname.value,
        tel: form.tel.value,

    }

    fetch('https://api-form-order.herokuapp.com/api/order', {
        method: 'post',
        body: JSON.stringify(data) //преобразовывает обьект в строчку и отправляет на сервер
    })

})