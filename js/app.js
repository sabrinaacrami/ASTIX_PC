document.querySelectorAll('.accordion').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;
        

        if(content.style.maxHeight) {
          document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        }else{
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})




  function openModal() {
    document.getElementById("my-modal").classList.add("open")
  }

  const buttons = document.querySelectorAll(".js-btn")

  buttons.forEach(button => {
    button.addEventListener("click", openModal)
  })


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
  document.getElementById("my-modal").classList.remove("open")
}) 

$(document).ready(function(){
  $('.feedback').slick();
});

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".navigation__link");

  navLinks.forEach(link => {
      link.addEventListener("click", () => {
          const checkbox = document.querySelector(".navigation__checkbox");
          checkbox.checked = false; // Закрываем меню после клика по ссылке
      });
  });
});


function redirectToNewPage() {
    // Замените 'новая-страница.html' на путь к вашей новой странице
    window.location.href = 'modal.html';
}

function validateForm() {
  var checkbox = document.getElementById("myCheck");
  if (!checkbox.checked) {
    alert("Пожалуйста, согласитесь с условиями");
    return false; 
  }
    var field1Value = document.getElementById('name').value;
    var field2Value = document.getElementById('email').value;
    var field3Value = document.getElementById('phone').value;
    var field4Value = document.getElementById('text').value;

    if (field1Value === '' || field2Value === '' || field3Value === '' || field4Value === '') {
      alert("Пожалуйста, заполните все поля");
      return false;
  }
  redirectToNewPage(); // Перенаправление на modal.html, только если все условия выполнены
  return false; // Отменяем отправку формы, так как мы перенаправляем вручную
}


function checkFields() {
  var field1Value = document.getElementById('name').value;
  var field2Value = document.getElementById('email').value;
  var field3Value = document.getElementById('phone').value;
  var field4Value = document.getElementById('text').value;

  var submitButton = document.getElementById('submitButton');

  if (field1Value !== '' && field2Value !== '' && field3Value !== '' && field4Value !== '') {
      submitButton.removeAttribute('disabled');
  } else {
      submitButton.setAttribute('disabled', 'disabled');
  }
}



window.addEventListener('DOMContentLoaded', function () {
  var video = document.querySelector('.videos');

  video.addEventListener('click', function () {
  if(video.classList.contains ('play')) {
    return;
  }

  video.classList.add('play');
  video.insertAdjacentHTML('afterbegin', '<div class="video__container"><iframe class="video__element" src="https://www.youtube.com/embed/-KipyhOG0sw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>');

  var playButton = video.querySelector('.videos__wrapper');
  if (playButton) {
    playButton.remove();
  }
});
});
