// Darkmode/lightmode
const checkbox = document.getElementById('checkbox');
const neon = document.querySelector('h1.neon');
const checkmark = document.querySelector('div.checkmark');
const header = document.querySelector('header.menu');
const nav = document.querySelector('nav.navigation');
const footer = document.querySelector('footer.footer');

checkbox.addEventListener('change', (e)=>{

  document.body.classList.toggle('dark');
  
  if(e.target.checked){   
    neon.style.textShadow = `0px 0px 12px rgba(0,0,0,1)`;
    checkmark.innerHTML = `🌙`;
    checkmark.style.color = `white`;
    checkmark.style.textShadow = `0px 0px 10px rgba(255,255,255,1)`;
    header.style.backgroundColor = `#1b46ff`;
    nav.style.backgroundColor = `#1b46ff`;
    footer.style.backgroundColor = `#1b46ff`;
  }
  else{
    neon.style.textShadow = `0px 0px 12px rgba(255,255,255,1)`;
    checkmark.innerHTML = `☀`;
    checkmark.style.color = `yellow`;
    checkmark.style.textShadow = `0px 0px 10px rgba(255,255,0,1)`;
    header.style.backgroundColor = `black`;
    nav.style.backgroundColor = `black`;
    footer.style.backgroundColor = `rgba(68, 58, 35, 0.4)`;
  }
});


// Scroll
const navHref = document.querySelectorAll('.navigation a[href^="#"]');

navHref.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick() {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const section = document.querySelector(id).offsetTop;

  window.scroll({
    top: section,
    behavior:"smooth",
  }); 
}

// Mostrar elemento no scroll
const observer = new IntersectionObserver(entries => {
  
  Array.from(entries).forEach(entry => {
    if (entry.intersectionRatio >= 0.5){
       entry.target.classList.add('init-hidden-off')
    } else {
      entry.target.classList.remove('init-hidden-off')
    }
  })  
  
}, {
  threshold: [0, .5, 1]
}) 


Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
  observer.observe(element)
})



function mostrar(){
  const e = document.querySelector('div.verMais');
  const botao = document.querySelector('button.maisProjetos')
  
  if(e.style.display == 'flex'){
    e.style.display = 'none';
    botao.innerHTML = 'Mais Projetos'
  }   
  else{
     e.style.display = 'flex';
    botao.innerHTML = 'Menos Projetos'
  }
}

function copyToClipboard(txt) {
  const alerta = document.querySelector('span.alert')
  navigator.clipboard.writeText(txt);
  alerta.style.display = 'inline'
  function tirarAlerta(){
      alerta.style.display = 'none'
  }
  setTimeout(tirarAlerta,3000)
}