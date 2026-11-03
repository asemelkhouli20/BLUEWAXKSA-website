const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target);}}),{threshold:0.08});document.querySelectorAll('.discipline,.project').forEach(e=>{e.classList.add('reveal');observer.observe(e);});}
