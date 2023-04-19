const btn = document.getElementById('nav-btn')
const nav = document.getElementById('nav-menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('slide')
    nav.classList.toggle('hidden')
})

window.onscroll = function() {imgScroll()};

function imgScroll() {
    if (document.documentElement.scrollTop > 350) {
      document.getElementById("about_img").classList = "about_slide_img";
    } 
}

document.getElementById('submitBtn').addEventListener('click', () => {
    const form = document.getElementById('my_form');
    if (form.checkValidity()) {
        alert('Message is sent successfully'); 
      }
})

// Animated Text

const text = document.querySelector(".text p")
text.innerHTML = text.innerText.split("").map((char, i) => 
  `<span style="transform:rotate(${i*9.2}deg)">${char}</span>`
).join("")




