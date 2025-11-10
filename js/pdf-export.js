const { jsPDF } = window.jspdf;
document.getElementById('export').addEventListener('click', ()=>{
  const items = JSON.parse(localStorage.getItem('it_items')||'[]');
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("IT CENTER Bagh - Report", 14, 20);
  let y = 30;
  items.forEach((it,i)=>{ doc.setFontSize(12); doc.text(`${i+1}. ${it.name} | ${it.type} | Rs.${it.amount}`, 14, y); y += 8; if(y>280){doc.addPage(); y=20;} });
  doc.save('ITCenter_Report.pdf');
});
