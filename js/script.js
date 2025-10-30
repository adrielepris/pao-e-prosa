// Scroll: mostrar/ocultar botão voltar ao topo
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) toTop.classList.add('show'); else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Validação + feedback do formulário
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Dispara validação nativa
  if (!form.checkValidity()) {
    feedback.textContent = '⚠️ Por favor, verifique os campos obrigatórios.';
    feedback.style.backgroundColor = '#fff0d6';
    feedback.style.color = '#6b4000';
    form.reportValidity();
    return;
  }

  // Simulação de envio
  feedback.textContent = '✅ Mensagem enviada com sucesso! O Seu Joaquim agradece o contato e responderá em breve.';
  feedback.style.backgroundColor = '#d4edda';
  feedback.style.color = '#155724';

  setTimeout(() => { form.reset(); feedback.textContent=''; feedback.removeAttribute('style'); }, 3200);
});
