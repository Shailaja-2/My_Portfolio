const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 


function openChat() {
  document.getElementById("chatBox").style.display = "flex";
}

function sendMessage(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message) {
      let chatBody = document.getElementById("chatMessages");
      chatBody.innerHTML += `<p><b>You:</b> ${message}</p>`;
      input.value = "";

      // Simulated admin reply
      setTimeout(() => {
        chatBody.innerHTML += `<p><b>Admin:</b> Thanks for reaching out! I’ll get back to you shortly.</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000);
    }
  }
}

// Read More / Read Less functionality
const readMoreBtn = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMoreBtn.addEventListener("click", () => {
  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    readMoreBtn.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    readMoreBtn.textContent = "Read Less";
  }
});

