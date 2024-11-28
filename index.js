const button = document.querySelector('#open-modal')
const modal = document.querySelector('.modal')
const shadow = document.querySelector('.modal-shadow')
button.addEventListener('click', () => {
   modal.classList.add('active')
})

shadow.addEventListener('click', () => {
    modal.classList.remove('active')
 })
 