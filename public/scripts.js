// const ModalOverlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')
// const Modal = document.querySelector('.modal')
// const modal_content = document.querySelector('.modal_content')

for (let card of cards){
  card.addEventListener("click", function(){
    // ModalOverlay.classList.add('active')
    const curso_id = card.getAttribute('id')
    window.location.href = `/courses/${curso_id}`
  })
}

// CloseModal = document.querySelector('.close_modal').addEventListener('click', function(){
//   ModalOverlay.classList.remove('active')
//   Modal.classList.remove('maximize')
//   modal_content.querySelector('iframe').src = ""
// })

// MaximizeModal = document.querySelector('.maximize_modal').addEventListener('click', function(){
//   if(Modal.classList.contains('maximize')===false){
//     Modal.classList.add('maximize')
//   }else{
//     Modal.classList.remove('maximize')
//   }
// })

