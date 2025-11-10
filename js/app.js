const form = document.getElementById('form');
const list = document.getElementById('list');
let items = JSON.parse(localStorage.getItem('it_items')||'[]');
function render(){ list.innerHTML=''; items.forEach((it,i)=>{ const li=document.createElement('li'); li.textContent = `${it.name} | ${it.type} | Rs.${it.amount}`; list.appendChild(li); }); }
form.addEventListener('submit', e=>{ e.preventDefault(); const name=document.getElementById('name').value||'--'; const type=document.getElementById('type').value||'--'; const amount=document.getElementById('amount').value||0; items.push({name,type,amount}); localStorage.setItem('it_items', JSON.stringify(items)); render(); form.reset(); });
render();
